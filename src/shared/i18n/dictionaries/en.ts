/** @layer shared / slice i18n / segment dictionaries */

const en = {
  logo: 'Vladimir.dev',
  nav: {
    work: 'Work',
    stack: 'Stack',
    projects: 'Projects',
    engineering: 'Engineering',
    contact: 'Contact',
  },
  hero: {
    title: 'Senior Frontend Engineer',
    titleLine2: 'Building reliable, product-grade interfaces at scale',
    subheadline:
      '7+ years in programming with React & TypeScript. I architect frontend systems, lead teams, and ship complex UIs — from real-time operational dashboards to CRM platforms and UI for SBO controllers built from scratch. Focused on performance, code quality, and predictable delivery in fast-moving product environments.',
    badge: '7+ years in programming · React · TypeScript · Team Lead',
    bullets: [
      'Architected FSD-based frontend → 40% faster UI module delivery',
      'Real-time dashboards (WebSocket) for mission-critical operations',
      'Established code quality gates → 20% fewer bugs reaching QA',
      'CI/CD pipelines with automated tests → reliable production releases',
    ],
    ctaCases: 'View case studies',
    ctaCv: 'Download CV',
    cvAlt: 'Russian version',
    microcopy:
      'Open to product engineering roles in fintech & high-growth startups',
    seoKeywords:
      'Senior Frontend Developer, React, Redux, TypeScript, JavaScript, HTML, CSS, Feature-Sliced Design, real-time UI, WebSocket, REST API, PostgreSQL, Git, GitHub, Figma, Scrum, component library, code review, mentoring, team lead, CI/CD, performance optimization, fintech-ready, product engineering',
  },
  expertise: {
    title: 'Technical Expertise',
    filterHint: 'Click to filter projects',
    cards: [
      {
        id: 'core',
        title: 'Core Stack',
        description: 'Expert level',
        items: ['React & TypeScript', 'Redux Toolkit', 'JavaScript & HTML/CSS'],
      },
      {
        id: 'architecture',
        title: 'Architecture',
        description: 'Enterprise patterns',
        items: ['Feature-Sliced Design', 'CI/CD & Git', 'Scrum & Figma'],
      },
      {
        id: 'ai',
        title: 'AI Integration',
        description: 'Applied ML in production',
        items: ['RAG pipelines', 'Qdrant vector DB', 'Nest.js APIs'],
      },
      {
        id: 'performance',
        title: 'Performance',
        description: 'Real-time solutions',
        items: ['WebSocket & REST', 'PostgreSQL', 'Vitest & code quality'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    ndaLabel: 'Under NDA',
    openRepoLabel: 'Open repository',
    clearFilter: 'Show all projects',
    emptyFilter: 'No projects match this stack yet.',
    cards: {
      'scada-nextgen': {
        title: 'Next-gen SCADA Platform',
        description:
          'Leading the React SPA rebuild of a legacy industrial SCADA (Webix MPA → modern stack) for operators and engineers. Architected FSD frontend, led a team of 3, shipped real-time WebSocket UI — 40% faster module delivery, 20% fewer bugs before QA.',
      },
      'crm-sales': {
        title: 'Corporate CRM',
        description:
          'Built a sales CRM from scratch to replace Excel workflows — architecture on React/Redux Toolkit, reusable UI kit, and performance work that hit FCP under 1.5s. Cut manager data-entry errors by 25% via validation and UX.',
      },
      'knowledge-hub-rag': {
        title: 'Knowledge Hub — AI RAG API',
        description:
          'Production-shaped NestJS backend for an AI knowledge product: RAG over articles with Qdrant (hybrid retrieval + rerank), Gemini LLM, auth/RBAC, and Dockerized Postgres. Foundation for commercial React/Next.js clients — copilots, semantic search, and doc Q&A on a modern full-stack AI stack.',
      },
      'rest-client-app': {
        title: 'REST Client — Next.js API Workbench',
        description:
          'Led a 2-person team building a Postman-style REST client on Next.js 15 — auth, request history, env variables, code snippets, and i18n, with server-side request forwarding for CORS. Production-shaped React/Next foundation for commercial developer tools and internal API consoles.',
      },
    },
  },
  footer: {
    copyEmail: 'Copy email',
    copied: 'Copied!',
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
    },
  },
  meta: {
    description:
      'Senior Frontend Engineer with 7+ years in programming: React, TypeScript, Redux, FSD architecture, real-time UI, CI/CD, team leadership. Building scalable product interfaces for fintech and high-growth startups.',
  },
} as const;

export default en;
