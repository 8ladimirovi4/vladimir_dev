#!/usr/bin/env sh
# Generate a self-signed certificate for the VPS static IP (SAN=IP).
# Run once on the VPS (or locally) before the first `docker compose up`.
#
# Usage:
#   SERVER_IP=YOUR.SERVER.IP ./deploy/nginx/gen-selfsigned.sh
#
# Output:
#   deploy/nginx/certs/fullchain.pem
#   deploy/nginx/certs/privkey.pem

set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
CERT_DIR="${SCRIPT_DIR}/certs"
SERVER_IP="${SERVER_IP:-}"
DAYS="${CERT_DAYS:-825}"

if [ -z "${SERVER_IP}" ]; then
  echo "SERVER_IP is required (e.g. SERVER_IP=YOUR.SERVER.IP ./deploy/nginx/gen-selfsigned.sh)"
  exit 1
fi

mkdir -p "${CERT_DIR}"

if [ -f "${CERT_DIR}/fullchain.pem" ] && [ -f "${CERT_DIR}/privkey.pem" ]; then
  echo "Certificates already exist in ${CERT_DIR} — skip (delete them to regenerate)."
  exit 0
fi

if ! command -v openssl >/dev/null 2>&1; then
  echo "openssl not found. On Windows/local you can run:"
  echo "  docker run --rm -v \"${CERT_DIR}:/certs\" -e SERVER_IP=${SERVER_IP} alpine/openssl req -x509 -nodes -newkey rsa:2048 -days ${DAYS} -keyout /certs/privkey.pem -out /certs/fullchain.pem -subj \"/CN=${SERVER_IP}\" -addext \"subjectAltName=IP:${SERVER_IP}\""
  exit 1
fi

openssl req -x509 -nodes -newkey rsa:2048 \
  -days "${DAYS}" \
  -keyout "${CERT_DIR}/privkey.pem" \
  -out "${CERT_DIR}/fullchain.pem" \
  -subj "/CN=${SERVER_IP}" \
  -addext "subjectAltName=IP:${SERVER_IP}"

chmod 644 "${CERT_DIR}/fullchain.pem"
chmod 600 "${CERT_DIR}/privkey.pem"

echo "Wrote ${CERT_DIR}/fullchain.pem and ${CERT_DIR}/privkey.pem (SAN=IP:${SERVER_IP})"
