#!/bin/sh
set -e
echo "Applying Prisma migrations..."
npx prisma migrate deploy
echo "Seeding administrator account..."
npx prisma db seed
exec node dist/main.js
