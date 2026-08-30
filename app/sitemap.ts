import type { MetadataRoute } from 'next';

import { getSiteUrl, shouldIndexSite } from '@/shared/config/site';
import { locales } from '@/shared/i18n';

/** @layer app — sitemap */

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  // Avoid publishing IP URLs to crawlers during the pre-domain phase
  if (!shouldIndexSite(siteUrl)) {
    return [];
  }

  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `${siteUrl}/${loc}`])
      ),
    },
  }));
}
