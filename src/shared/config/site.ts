/** @layer shared / slice config / segment site */

type SiteUrlResolution = {
  url: string;
  /** True when NEXT_PUBLIC_SITE_URL was set and parsed successfully */
  fromEnv: boolean;
};

/**
 * Canonical site origin for metadata, sitemap, robots, JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL on the server (https://IP or https://domain).
 * When moving IP → domain: change only this env — no code changes.
 */
export function resolveSiteUrl(): SiteUrlResolution {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      return { url: new URL(raw).origin, fromEnv: true };
    } catch {
      // fall through
    }
  }

  return { url: 'http://localhost:3000', fromEnv: false };
}

export function getSiteUrl(): string {
  return resolveSiteUrl().url;
}
/** True when host is a bare IPv4/IPv6 (temporary prod before a real domain). */
export function isIpSiteUrl(siteUrl: string = getSiteUrl()): boolean {
  try {
    const { hostname } = new URL(siteUrl);
    if (hostname === 'localhost' || hostname === '127.0.0.1') return false;
    if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(hostname)) return true;
    if (hostname.includes(':')) return true;
    return false;
  } catch {
    return true;
  }
}

/**
 * Whether search engines may index the site.
 * Priority:
 * 1. NEXT_PUBLIC_SITE_INDEXING=true|false (explicit override)
 * 2. noindex if SITE_URL unset / invalid
 * 3. noindex on bare IP hosts (pre-domain phase)
 * 4. index in production on a real domain
 */
export function shouldIndexSite(siteUrl?: string): boolean {
  const flag = process.env.NEXT_PUBLIC_SITE_INDEXING?.trim().toLowerCase();
  if (flag === 'true' || flag === '1') return true;
  if (flag === 'false' || flag === '0') return false;

  const resolved = siteUrl ? { url: siteUrl, fromEnv: true } : resolveSiteUrl();

  if (!resolved.fromEnv) return false;
  if (process.env.NODE_ENV !== 'production') return false;
  if (isIpSiteUrl(resolved.url)) return false;
  return true;
}

export const siteConfig = {
  name: 'Vladimir Leonov',
  jobTitle: 'Senior Frontend & AI Engineer',
  localeOpenGraph: {
    en: 'en_US',
    ru: 'ru_RU',
  },
} as const;
