import type { MetadataRoute } from 'next';

import { getSiteUrl, shouldIndexSite } from '@/shared/config/site';

/** @layer app — robots */

/** AI training / foundation-model crawlers — blocked when indexing is on */
const AI_TRAINING_BOTS = [
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Bytespider',
] as const;

/** AI answer / retrieval crawlers — explicitly allowed when indexing is on */
const AI_SEARCH_BOTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
] as const;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
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
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...AI_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
      ...AI_TRAINING_BOTS.map((userAgent) => ({
        userAgent,
        disallow: '/',
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
