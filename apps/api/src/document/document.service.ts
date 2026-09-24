import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { NotFoundError, ValidationError } from '../common/errors';
import {
  applyOptionalPagination,
  type PaginatedList,
} from '../common/pagination/apply-pagination.util';
import { PrismaService } from '../prisma/prisma.service';
import { DocumentStatus, type Document } from '../storage/domain.types';
import {
  domainDocumentSectionToPrisma,
  domainDocumentStatusToPrisma,
  prismaDocumentToDomain,
} from '../storage/prisma-mappers';
import type { CreateDocumentDto } from './dto/create-document.dto';
import type { FindDocumentsQueryDto } from './dto/find-documents.query.dto';
import type { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    query: FindDocumentsQueryDto,
    page?: string,
    limit?: string,
  ): Promise<Document[] | PaginatedList<Document>> {
    const where: Prisma.DocumentWhereInput = {};
    if (query.status !== undefined) {
      where.status = domainDocumentStatusToPrisma(query.status);
    }
    if (query.section !== undefined) {
      where.section = domainDocumentSectionToPrisma(query.section);
    }

    const rows = await this.prisma.document.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    return applyOptionalPagination(
      rows.map(prismaDocumentToDomain),
      page,
      limit,
    );
  }

  async findOne(id: string): Promise<Document> {
    const row = await this.prisma.document.findUnique({ where: { id } });
    if (!row) {
      throw new NotFoundError('Document not found');
    }
    return prismaDocumentToDomain(row);
  }

  async create(dto: CreateDocumentDto): Promise<Document> {
    await this.assertSlugIsFree(dto.slug);

    const row = await this.prisma.document.create({
      data: {
        slug: dto.slug,
        title: dto.title,
        content: dto.content,
        section: domainDocumentSectionToPrisma(dto.section),
        status: domainDocumentStatusToPrisma(
          dto.status ?? DocumentStatus.PUBLISHED,
        ),
        tags: dto.tags ?? [],
      },
    });
    return prismaDocumentToDomain(row);
  }

  async update(id: string, dto: UpdateDocumentDto): Promise<Document> {
    const existing = await this.prisma.document.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundError('Document not found');
    }

    if (dto.slug !== undefined && dto.slug !== existing.slug) {
      await this.assertSlugIsFree(dto.slug);
    }

    const data: Prisma.DocumentUpdateInput = {};
    if (dto.slug !== undefined) {
      data.slug = dto.slug;
    }
    if (dto.title !== undefined) {
      data.title = dto.title;
    }
    if (dto.content !== undefined) {
      data.content = dto.content;
    }
    if (dto.section !== undefined) {
      data.section = domainDocumentSectionToPrisma(dto.section);
    }
    if (dto.status !== undefined) {
      data.status = domainDocumentStatusToPrisma(dto.status);
    }
    if (dto.tags !== undefined) {
      data.tags = dto.tags;
    }

    // Every updatable field feeds the RAG fingerprint, so any edit invalidates
    // the index state and the document has to be picked up by POST /rag/index again.
    data.ragIndexedContentHash = null;
    data.ragIndexedAt = null;

    const row = await this.prisma.document.update({ where: { id }, data });
    return prismaDocumentToDomain(row);
  }

  async remove(id: string): Promise<void> {
    const existing = await this.prisma.document.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundError('Document not found');
    }
    await this.prisma.document.delete({ where: { id } });
  }

  private async assertSlugIsFree(slug: string): Promise<void> {
    const taken = await this.prisma.document.findUnique({ where: { slug } });
    if (taken) {
      throw new ValidationError(`Document with slug "${slug}" already exists`);
    }
  }
}
