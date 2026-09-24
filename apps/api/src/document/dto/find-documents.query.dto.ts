import { IsEnum, IsOptional } from 'class-validator';
import { DocumentSection, DocumentStatus } from '../../storage/domain.types';

export class FindDocumentsQueryDto {
  @IsOptional()
  @IsEnum(DocumentStatus)
  status?: DocumentStatus;

  @IsOptional()
  @IsEnum(DocumentSection)
  section?: DocumentSection;
}
