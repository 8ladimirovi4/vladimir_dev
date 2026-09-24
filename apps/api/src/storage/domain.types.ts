export enum DocumentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export enum DocumentSection {
  WORK = 'work',
  PROJECTS = 'projects',
  STACK = 'stack',
  ENGINEERING = 'engineering',
  ABOUT = 'about',
}

export interface Document {
  id: string;
  slug: string;
  title: string;
  content: string;
  section: DocumentSection;
  status: DocumentStatus;
  tags: string[];
  createdAt: number;
  updatedAt: number;
  ragIndexedContentHash: string | null;
  ragIndexedAt: number | null;
}
