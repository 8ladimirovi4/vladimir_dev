# Vladimir Leonov — portfolio

[![Docker Image](https://img.shields.io/docker/v/vlleo/vladimir_dev?sort=semver)](https://hub.docker.com/r/vlleo/vladimir_dev)

Personal portfolio site (Next.js): EN/RU, SEO/PWA basics, contact dialog, CV download.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
**Requirements:** Node.js 24, npm 11+

## Local development

```bash
cp .env.example .env
# for local UI you can set NEXT_PUBLIC_SITE_URL=http://localhost:3000

npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script           | Description            |
| ---------------- | ---------------------- |
| `npm run dev`    | Dev server (Turbopack) |
| `npm run build`  | Production build       |
| `npm start`      | Serve production build |
| `npm run lint`   | ESLint                 |
| `npm run format` | Prettier               |

## Environment

Copy `.env.example` → `.env` / GitHub Secrets

| Variable                    | Purpose                                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical origin (no trailing slash), e.g. `https://vlleo.com`.                                                                          |
| `NEXT_PUBLIC_SITE_INDEXING` | Optional. Omit/`false` → noindex / `Disallow: /` (staging). `true` → allow search + AI search bots. In CD set via `PROD_SITE_INDEXING`.  |
| `WEB_IMAGE`                 | Compose image tag. Local:`vladimir_dev:local`. VPS/CD: Hub tag, e.g. `vlleo/vladimir_dev:v1.1.0`.                                        |
| `NGINX_HTTPS_PORT`          | Optional. Host → nginx`443`, default `443`. On CD also GitHub Variable (see below).                                                      |

`NEXT_PUBLIC_*` are inlined at **build time**. Changing the site URL requires a rebuild (and a new release image in production).

### GitHub Actions (release / CI)

Configure in **Settings → Secrets and variables → Actions**:

| Name                                     | Type                | Used for                                                                      |
| ---------------------------------------- | ------------------- | ----------------------------------------------------------------------------- |
| `CI_RUNNER_IMAGE`                        | Variable            | `runs-on` in CI/CD                                                            |
| `NGINX_HTTPS_PORT`                       | Variable (optional) | Host HTTPS port written to VPS `.env` on deploy; default `443`               |
| `PROD_SITE_INDEXING`                     | Variable            | Build-arg `NEXT_PUBLIC_SITE_INDEXING` (`true` → search indexing allowed)      |
| `DOCKERHUB_REPO`                         | Variable (optional) | Docker Hub image; default `vlleo/vladimir_dev` (Hub namespace ≠ GitHub owner) |
| `DOCKERHUB_USERNAME` / `DOCKERHUB_TOKEN` | Secrets             | Docker Hub login; username must match Hub namespace (`vlleo`)                 |
| `GHCR_REPO`                              | Variable (optional) | GHCR image; default `ghcr.io/<github.repository>`                             |
| `PROD_SITE_URL`                          | Secret              | Build-arg `NEXT_PUBLIC_SITE_URL`                                              |
| `VPS_HOST` / `VPS_USER` / `VPS_SSH_KEY`  | Secrets             | SSH deploy                                                                    |

Hub image defaults to `vlleo/vladimir_dev`; GHCR follows `ghcr.io/<github.repository>`. Tag comes from `github.ref_name` (e.g. `v1.0.0`).

## Docker

Images: **Docker Hub** (primary) + **GHCR** (mirror).

```bash
docker pull vlleo/vladimir_dev:latest
```

The Compose stack (`web` + `nginx` + `certbot`) is for the VPS with the real domain and a Let's Encrypt certificate. For local work use `npm run dev`.

## Deploy on VPS

- Stack: Next.js (`web`, internal `:3000`) behind **nginx** (host `:80` and `NGINX_HTTPS_PORT` → container `443`).
- TLS: **Let's Encrypt** for `vlleo.com` and `www.vlleo.com` (certbot, HTTP-01 webroot); `www` redirects to `https://vlleo.com`.
- Renew: daily cron on the VPS runs `docker compose --profile certbot run --rm -T certbot renew --quiet` and then reloads nginx.
- CD: push annotated tag `v*` on `main` → build & push Hub+GHCR → SSH deploy (`docker compose pull && up -d`).
