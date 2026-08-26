# Vladimir Leonov — portfolio

[![Docker Image](https://img.shields.io/docker/v/8ladimirovi4/vladimir_dev?sort=semver)](https://hub.docker.com/r/8ladimirovi4/vladimir_dev)

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
| ------------------ | ------------------------ |
| `npm run dev`    | Dev server (Turbopack) |
| `npm run build`  | Production build       |
| `npm start`      | Serve production build |
| `npm run lint`   | ESLint                 |
| `npm run format` | Prettier               |

## Environment

Copy `.env.example` → `.env`  / GitHub Secrets


| Variable                    | Purpose                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`      | Canonical origin (no trailing slash). Phase 1 (VPS IP):`https://YOUR.SERVER.IP:PORT`. Later with domain + LE: `https://your-domain.com`. |
| `NEXT_PUBLIC_SITE_INDEXING` | Optional. Omit/`false` → noindex / `Disallow: /` (IP & staging). `true` → allow search + AI search bots after domain launch.           |
| `WEB_IMAGE`                 | Compose image tag. Local:`vladimir_dev:local`. VPS/CD: Hub tag, e.g. `8ladimirovi4/vladimir_dev:v1.0.0`.                                 |
| `SERVER_IP`                 | VPS static IP (set in`.env` / secrets).                                                                                                  |
| `NGINX_HTTPS_PORT`          | Host → nginx`443` (e.g. `8443`). Local/VPS `.env`; on CD also GitHub Variable (see below).                                              |

`NEXT_PUBLIC_*` are inlined at **build time**. Changing the site URL requires a rebuild (and a new release image in production).

### GitHub Actions (release / CI)

Configure in **Settings → Secrets and variables → Actions**:


| Name | Type | Used for |
| --- | --- | --- |
| `CI_RUNNER_IMAGE` | Variable | `runs-on` in CI/CD |
| `NGINX_HTTPS_PORT` | Variable | Host HTTPS port written to VPS `.env` on deploy |
| `DOCKERHUB_REPO` | Variable (optional) | Docker Hub image; default `github.repository` (`owner/name`) |
| `GHCR_REPO` | Variable (optional) | GHCR image; default `ghcr.io/<github.repository>` |
| `DOCKERHUB_USERNAME` / `DOCKERHUB_TOKEN` | Secrets | Push image to Docker Hub |
| `PROD_SITE_URL` | Secret | Build-arg `NEXT_PUBLIC_SITE_URL` |
| `VPS_HOST` / `VPS_USER` / `VPS_SSH_KEY` | Secrets | SSH deploy |

Image path follows the current GitHub repo (or optional Variables above). Tag comes from `github.ref_name` (e.g. `v1.0.0`).

## Docker

Images: **Docker Hub** (primary) + **GHCR** (mirror).

```bash
docker pull 8ladimirovi4/vladimir_dev:latest
```

### Local Compose stack (`web` + `nginx`)

1. Generate a self-signed cert (once) — set `SERVER_IP` from your `.env`:

```bash
# Linux / WSL / VPS
SERVER_IP=YOUR.SERVER.IP ./deploy/nginx/gen-selfsigned.sh

# Windows (no openssl) — via Docker:
docker run --rm -v "${PWD}/deploy/nginx/certs:/certs" alpine/openssl req -x509 -nodes -newkey rsa:2048 -days 825 -keyout /certs/privkey.pem -out /certs/fullchain.pem -subj "/CN=YOUR.SERVER.IP" -addext "subjectAltName=IP:YOUR.SERVER.IP"
```

2. Build and start:

```bash
# set NEXT_PUBLIC_SITE_URL / NGINX_HTTPS_PORT in .env for compose
docker compose build
docker compose up -d
```

Open `https://localhost:<NGINX_HTTPS_PORT>` (browser will warn about the self-signed certificate — expected for v1.0.0).

```bash
docker compose ps
docker compose down
```

## Deploy on VPS

- Stack: Next.js (`web`, internal `:3000`) behind **nginx** (host `NGINX_HTTPS_PORT` → container `443`).
- TLS: **self-signed** on the bare IP; search indexing stays off (`noindex` / `Disallow: /`).
- CD: push annotated tag `v*` on `main` → build & push Hub+GHCR → SSH deploy (`docker compose pull && up -d`).
