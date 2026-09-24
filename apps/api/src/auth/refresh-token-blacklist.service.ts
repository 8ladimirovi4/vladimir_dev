import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

// In-memory on purpose (as-is from the concept): a single-replica deployment
// only. Revocations are lost on restart and don't survive horizontal scaling -
// acceptable for a single-admin API, documented as a known limitation.
@Injectable()
export class RefreshTokenBlacklistService {
  private readonly hashes = new Set<string>();

  revoke(token: string): void {
    this.hashes.add(this.hash(token));
  }

  isRevoked(token: string): boolean {
    return this.hashes.has(this.hash(token));
  }

  private hash(token: string): string {
    return createHash('sha256').update(token, 'utf8').digest('hex');
  }
}
