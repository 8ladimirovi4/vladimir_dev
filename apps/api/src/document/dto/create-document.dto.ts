import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { DocumentSection, DocumentStatus } from '../../storage/domain.types';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export class CreateDocumentDto {
  @ApiProperty({
    pattern: SLUG_PATTERN.source,
    example: 'about-me',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(SLUG_PATTERN, {
    message: 'slug must be kebab-case (lowercase letters, digits and dashes)',
  })
  slug: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(DocumentSection)
  section: DocumentSection;

  @IsOptional()
  @IsEnum(DocumentStatus)
  status?: DocumentStatus;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
