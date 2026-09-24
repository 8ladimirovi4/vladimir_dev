import 'dotenv/config';
import * as bcrypt from 'bcryptjs';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

// Self-contained on purpose: the production image ships only dist/, prisma/ and
// prisma.config.ts, so this script must not import anything from src/.
const DEFAULT_SALT_ROUNDS = 10;
const MIN_PASSWORD_LENGTH = 8;

function fail(lines: string[]): never {
  const border = '='.repeat(74);
  console.error('');
  console.error(border);
  console.error('SEED FAILED - the administrator account is not configured');
  console.error(border);
  for (const line of lines) {
    console.error(line);
  }
  console.error(border);
  console.error('');
  process.exit(1);
}

function requireDatabaseUrl(): string {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) {
    fail([
      'Missing required environment variable: DATABASE_URL',
      '',
      'Example: postgresql://user:password@host:5432/database?schema=public',
    ]);
  }
  return url;
}

function requireAdminCredentials(): { login: string; password: string } {
  const login = process.env.SEED_ADMIN_LOGIN?.trim();
  const password = process.env.SEED_ADMIN_PASSWORD?.trim();

  const missing: string[] = [];
  if (!login) {
    missing.push('SEED_ADMIN_LOGIN');
  }
  if (!password) {
    missing.push('SEED_ADMIN_PASSWORD');
  }

  if (missing.length > 0) {
    fail([
      `Missing required environment variable(s): ${missing.join(', ')}`,
      '',
      'The API has no other way to create an administrator: sign-up is not',
      'implemented, so without these variables nobody can log in and the RAG',
      'corpus (POST /documents, POST /rag/index) stays unmanageable.',
      '',
      'Set both variables and start the container again:',
      '  SEED_ADMIN_LOGIN=<login>',
      '  SEED_ADMIN_PASSWORD=<password>    # at least ' +
        `${MIN_PASSWORD_LENGTH} characters`,
      '',
      'Local runs read apps/api/.env; the container reads the deploy .env',
      '(written from GitHub Secrets on release).',
    ]);
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    fail([
      `SEED_ADMIN_PASSWORD is too short: ${password.length} character(s).`,
      '',
      `This account can rewrite the whole RAG corpus, so at least ${MIN_PASSWORD_LENGTH}`,
      'characters are required.',
    ]);
  }

  return { login, password };
}

function resolveSaltRounds(): number {
  const raw = process.env.CRYPT_SALT?.trim();
  if (!raw) {
    return DEFAULT_SALT_ROUNDS;
  }
  const rounds = Number(raw);
  if (!Number.isInteger(rounds) || rounds < 1) {
    fail([
      `CRYPT_SALT must be a positive integer, got: "${raw}"`,
      '',
      `Remove it to fall back to ${DEFAULT_SALT_ROUNDS} bcrypt rounds.`,
    ]);
  }
  return rounds;
}

async function main(): Promise<void> {
  // Validate configuration before opening a connection: a misconfigured deploy
  // should say what is missing, not fail on an unrelated database error.
  const connectionString = requireDatabaseUrl();
  const { login, password } = requireAdminCredentials();
  const saltRounds = resolveSaltRounds();

  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });

  try {
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Idempotent by design: runs on every container start. Never deletes data - it only creates the
    // admin or refreshes the password hash of the existing one.
    const admin = await prisma.user.upsert({
      where: { login },
      update: { password: passwordHash },
      create: { login, password: passwordHash },
    });

    console.log(`Seed OK: admin user "${admin.login}" (${admin.id}).`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e: unknown) => {
  console.error(e);
  process.exit(1);
});
