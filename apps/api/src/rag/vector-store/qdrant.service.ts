import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QdrantService {
  private readonly url: string;

  constructor(config: ConfigService) {
    this.url = (
      config.get<string>('RAG_VECTOR_DB_URL') || 'http://127.0.0.1:6333'
    ).replace(/\/$/, '');
  }

  async getCollections(): Promise<string[]> {
    const response = await fetch(`${this.url}/collections`);
    if (!response.ok) {
      throw new Error(`Qdrant returned HTTP ${response.status}`);
    }

    const body = (await response.json()) as {
      result: { collections: { name: string }[] };
    };
    return body.result.collections.map((collection) => collection.name);
  }
}
