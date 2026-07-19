/** @layer entities / slice project / segment data */

import type { Project } from '../model';

export const projects: readonly Project[] = [
  {
    id: 'scada-nextgen',
    stacks: ['architecture', 'core', 'performance'],
    accent: 'architecture',
    tech: 'React, TypeScript, Redux Toolkit, FSD, PrimeReact, WebSocket, Vitest',
    access: { kind: 'nda' },
  },
  {
    id: 'crm-sales',
    stacks: ['core', 'performance'],
    accent: 'core',
    tech: 'React, Redux Toolkit, TypeScript, Tailwind CSS, REST, WebSocket',
    access: { kind: 'nda' },
  },
  {
    id: 'knowledge-hub-rag',
    stacks: ['emerging', 'architecture'],
    accent: 'emerging',
    tech: 'NestJS, TypeScript, Gemini, Qdrant, Prisma, PostgreSQL, Docker',
    access: {
      kind: 'external',
      href: 'https://github.com/8ladimirovi4/nodejs-2026q1-knowledge-hub/tree/feature-10-ai-rag-vectordb',
    },
  },
  {
    id: 'rest-client-app',
    stacks: ['core', 'architecture'],
    accent: 'core',
    tech: 'Next.js, React, TypeScript, Redux Toolkit, Firebase, Tailwind CSS, Vitest',
    access: {
      kind: 'external',
      href: 'https://github.com/8ladimirovi4/rest-client-app/tree/develop',
    },
  },
];
