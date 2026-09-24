import {
  DocumentSection as PrismaDocumentSection,
  DocumentStatus as PrismaDocumentStatus,
  type Document as PrismaDocument,
} from '@prisma/client';
import { DocumentSection, DocumentStatus, type Document } from './domain.types';

export function prismaDocumentStatusToDomain(
  status: PrismaDocumentStatus,
): DocumentStatus {
  switch (status) {
    case PrismaDocumentStatus.DRAFT:
      return DocumentStatus.DRAFT;
    case PrismaDocumentStatus.PUBLISHED:
      return DocumentStatus.PUBLISHED;
    case PrismaDocumentStatus.ARCHIVED:
      return DocumentStatus.ARCHIVED;
    default:
      return DocumentStatus.DRAFT;
  }
}

export function domainDocumentStatusToPrisma(
  status: DocumentStatus,
): PrismaDocumentStatus {
  switch (status) {
    case DocumentStatus.DRAFT:
      return PrismaDocumentStatus.DRAFT;
    case DocumentStatus.PUBLISHED:
      return PrismaDocumentStatus.PUBLISHED;
    case DocumentStatus.ARCHIVED:
      return PrismaDocumentStatus.ARCHIVED;
    default:
      return PrismaDocumentStatus.DRAFT;
  }
}

export function prismaDocumentSectionToDomain(
  section: PrismaDocumentSection,
): DocumentSection {
  switch (section) {
    case PrismaDocumentSection.WORK:
      return DocumentSection.WORK;
    case PrismaDocumentSection.PROJECTS:
      return DocumentSection.PROJECTS;
    case PrismaDocumentSection.STACK:
      return DocumentSection.STACK;
    case PrismaDocumentSection.ENGINEERING:
      return DocumentSection.ENGINEERING;
    case PrismaDocumentSection.ABOUT:
      return DocumentSection.ABOUT;
    default:
      return DocumentSection.ABOUT;
  }
}

export function domainDocumentSectionToPrisma(
  section: DocumentSection,
): PrismaDocumentSection {
  switch (section) {
    case DocumentSection.WORK:
      return PrismaDocumentSection.WORK;
    case DocumentSection.PROJECTS:
      return PrismaDocumentSection.PROJECTS;
    case DocumentSection.STACK:
      return PrismaDocumentSection.STACK;
    case DocumentSection.ENGINEERING:
      return PrismaDocumentSection.ENGINEERING;
    case DocumentSection.ABOUT:
      return PrismaDocumentSection.ABOUT;
    default:
      return PrismaDocumentSection.ABOUT;
  }
}

export function prismaDocumentToDomain(row: PrismaDocument): Document {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    content: row.content,
    section: prismaDocumentSectionToDomain(row.section),
    status: prismaDocumentStatusToDomain(row.status),
    tags: row.tags,
    createdAt: row.createdAt.getTime(),
    updatedAt: row.updatedAt.getTime(),
    ragIndexedContentHash: row.ragIndexedContentHash,
    ragIndexedAt: row.ragIndexedAt ? row.ragIndexedAt.getTime() : null,
  };
}
