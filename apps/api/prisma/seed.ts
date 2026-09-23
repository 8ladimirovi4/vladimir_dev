import 'dotenv/config';
import * as bcrypt from 'bcryptjs';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { requireSaltRounds } from 'src/common/utils';

function requireDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('DATABASE_URL is not set');
  }
  return url;
}

function requireAdminCredentials(): { login: string; password: string } {
  const login = process.env.SEED_ADMIN_LOGIN;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (!login || !password) {
    throw new Error(
      'SEED_ADMIN_LOGIN / SEED_ADMIN_PASSWORD are not set',
    );
  }
  return { login, password };
}

async function main(): Promise<void> {
  const adapter = new PrismaPg({
    connectionString: requireDatabaseUrl(),
  });
  const prisma = new PrismaClient({ adapter });

  const saltRounds = requireSaltRounds();
  const { login, password } = requireAdminCredentials();

  try {
    const passwordHash = await bcrypt.hash(password, saltRounds);

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
