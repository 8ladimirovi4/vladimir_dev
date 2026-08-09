# Vladimir Leonov — portfolio

Personal portfolio site (Next.js): EN/RU, SEO/PWA basics, contact dialog, CV download.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4  
**Requirements:** Node.js 24, npm 11+

## Local development

```bash
cp .env.example .env
# set NEXT_PUBLIC_SITE_URL (e.g. http://localhost:3000)

npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Environment

Copy `.env.example` → `.env` (never commit `.env`).

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (no trailing slash). Phase 1: `https://212.132.113.102:8443`. Later with domain + LE: `https://your-domain.com`. |
| `NEXT_PUBLIC_SITE_INDEXING` | Optional. Omit/`false` → noindex / `Disallow: /` (IP & staging). `true` → allow search + AI search bots after domain launch. |

`NEXT_PUBLIC_*` are inlined at **build time**. Changing the site URL requires a rebuild (and a new release image in production).

## Docker

> Coming in the Docker/deploy PR (`feature/docker-deploy`): `Dockerfile`, `compose.yaml`, pull from Docker Hub.

```bash
# placeholder — will be filled after the Docker stack lands
# docker pull 8ladimirovi4/vladimir_dev:latest
# docker compose up -d
```

## Deploy on VPS

> Target: **`https://212.132.113.102:8443`** (nginx host port **8443** → container `443`, self-signed TLS).  
> Details in the Docker/deploy PR: Compose (`web` + `nginx`), CI/CD by tag `v*`, SSH deploy runbook.
