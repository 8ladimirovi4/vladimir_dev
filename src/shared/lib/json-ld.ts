/** @layer shared / slice lib — JSON-LD structured data */

import { contacts } from '@/shared/config/contacts';
import { siteConfig, getSiteUrl } from '@/shared/config/site';
import type { Dictionary, Locale } from '@/shared/i18n';

export function buildPersonJsonLd(locale: Locale, dictionary: Dictionary) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${locale}`;

  const knowsAbout = dictionary.expertise.cards.flatMap((card) => card.items);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    description: dictionary.faq.summary,
    url: pageUrl,
    email: contacts.email,
    sameAs: [contacts.gitHub, contacts.linkedin, contacts.telegram],
    knowsAbout,
    worksFor: {
      '@type': 'Organization',
      name: dictionary.work.jobs.mechatronica.company,
    },
  } as const;
}

export function buildWebSiteJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: ['en', 'ru'],
  } as const;
}

export function buildFaqJsonLd(locale: Locale, dictionary: Dictionary) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${siteUrl}/${locale}`,
    mainEntity: dictionary.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } as const;
}
