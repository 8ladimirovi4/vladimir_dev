import type { MetadataRoute } from 'next';

import { getSiteUrl, siteConfig } from '@/shared/config/site';

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = getSiteUrl();

  return {
    name: siteConfig.name,
    short_name: 'Leonov_V',
    description: `${siteConfig.jobTitle} — React, TypeScript, NestJS, RAG.`,
    start_url: '/',
    id: siteUrl,
    display: 'standalone',
    background_color: '#bdb2a0',
    theme_color: '#bdb2a0',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
