/** @layer shared / slice lib — locale Metadata builder */

import type { Metadata } from 'next';

import { siteConfig, getSiteUrl, shouldIndexSite } from '@/shared/config/site';
import type { Dictionary, Locale } from '@/shared/i18n';
import { defaultLocale, locales } from '@/shared/i18n';

export function buildLocaleMetadata(
  locale: Locale,
  dictionary: Dictionary
): Metadata {
  const siteUrl = getSiteUrl();
  const title = dictionary.meta.title;
  const description = dictionary.meta.description;
  const ogTitle = dictionary.meta.ogTitle ?? title;
  const ogDescription = dictionary.meta.ogDescription ?? description;
  const indexable = shouldIndexSite(siteUrl);

  const languageAlternates = Object.fromEntries(
    locales.map((loc) => [loc, `${siteUrl}/${loc}`])
  ) as Record<Locale, string>;

  return {
    title,
    description,
    keywords: [...dictionary.meta.keywords],
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ...languageAlternates,
        'x-default': `${siteUrl}/${defaultLocale}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.localeOpenGraph[locale],
      url: `${siteUrl}/${locale}`,
      siteName: siteConfig.name,
      title: ogTitle,
      description: ogDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
