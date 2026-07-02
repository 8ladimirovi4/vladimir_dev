import { MetadataRoute } from 'next';

/** @layer app — robots */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}
