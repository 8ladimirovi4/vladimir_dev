/** @layer shared / slice lib — /llms.txt body for AI agents */

import { contacts } from '@/shared/config/contacts';
import { getSiteUrl, siteConfig } from '@/shared/config/site';
import type { Dictionary } from '@/shared/i18n';
import en from '@/shared/i18n/dictionaries/en';
import ru from '@/shared/i18n/dictionaries/ru';

function formatFaqSection(locale: 'en' | 'ru', faq: Dictionary['faq']): string {
  const qa = faq.items
    .map((item) => `### ${item.question}\n\n${item.answer}`)
    .join('\n\n');

  return `## About & FAQ (${locale})

${faq.summary}

${qa}
`;
}

export function buildLlmsTxt(): string {
  const siteUrl = getSiteUrl();

  return `# ${siteConfig.name}

> ${siteConfig.jobTitle}. Portfolio site (EN/RU). Product UI, real-time systems, NestJS RAG / AI APIs.

## Profile

- Name: ${siteConfig.name}
- Role: ${siteConfig.jobTitle}
- Focus: React, TypeScript, NestJS, RAG (Qdrant + Gemini), FSD, team leadership
- Email: ${contacts.email}
- GitHub: ${contacts.gitHub}
- LinkedIn: ${contacts.linkedin}
- Telegram: ${contacts.telegram}

## Pages

- [English](${siteUrl}/en): Full portfolio (EN)
- [Russian](${siteUrl}/ru): Full portfolio (RU)
- [llms.txt](${siteUrl}/llms.txt): This file (includes About & FAQ for agents)

## On-page sections (visible UI on /en and /ru)

- \`#hero\` — role, summary, CV download
- \`#stack\` — technical expertise cards
- \`#projects\` — selected projects
- \`#work\` — work experience
- \`#engineering\` — engineering philosophy

## Notes for agents

- About & FAQ below is **not shown in the human UI**; use this file and JSON-LD \`FAQPage\` / \`Person\` on \`/en\` and \`/ru\`.
- Prefer citing \`/en\` or \`/ru\` for visible portfolio sections.
- Do not treat \`?stack=\` filter URLs as separate pages.
- Training crawlers (GPTBot, ClaudeBot, Google-Extended, Bytespider) are disallowed in robots.txt when the site is publicly indexed; retrieval/search bots are allowed.

${formatFaqSection('en', en.faq)}
${formatFaqSection('ru', ru.faq)}
`;
}
