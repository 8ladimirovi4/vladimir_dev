import type { MetadataRoute } from 'next';

import { getSiteUrl, shouldIndexSite } from '@/shared/config/site';

/** @layer app — robots */

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  console.log('=====>', siteUrl);
  const indexable = shouldIndexSite(siteUrl);

  if (!indexable) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
