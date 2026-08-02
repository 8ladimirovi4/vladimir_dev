/** @layer shared / slice lib — /llms.txt body for AI agents */

import { contacts } from '@/shared/config/contacts';
import { getSiteUrl, siteConfig } from '@/shared/config/site';

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
- [llms.txt](${siteUrl}/llms.txt): This file

## On-page sections (same on /en and /ru)

- \`#hero\` — role, summary, CV download
- \`#stack\` — technical expertise cards
- \`#projects\` — selected projects
- \`#work\` — work experience
- \`#engineering\` — engineering philosophy
- \`#about\` — short about + FAQ for citations

## Notes for agents

- Prefer citing \`/en\` or \`/ru\` HTML (SSG). Key facts are in visible copy and JSON-LD (\`Person\`, \`FAQPage\`).
- Do not treat \`?stack=\` filter URLs as separate pages.
- Training crawlers (GPTBot, ClaudeBot, Google-Extended, Bytespider) are disallowed in robots.txt when the site is publicly indexed; retrieval/search bots are allowed.
`;
}
