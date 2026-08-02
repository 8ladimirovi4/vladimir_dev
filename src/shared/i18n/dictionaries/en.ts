/** @layer shared / slice i18n / segment dictionaries */

const en = {
  logo: 'Vladimir_Leonov.dev',
  nav: {
    work: 'Work',
    stack: 'Stack',
    projects: 'Projects',
    engineering: 'Engineering',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    title: 'Senior Frontend & AI Engineer',
    titleLine2: 'Product-grade interfaces — and production AI systems',
    subheadline:
      '7+ years in programming with React & TypeScript. I architect frontend systems, lead teams, and ship complex UIs — real-time dashboards and CRM. Beyond the UI layer, I build AI RAG APIs on NestJS with hybrid retrieval over vector databases and LLMs — semantic search and knowledge-base Q&A. Focused on performance, code quality, and predictable delivery.',
    badge: '7+ years · React · TypeScript · NestJS · RAG · Team Lead',
    bullets: [
      'Architected FSD-based frontend → 40% faster UI module delivery',
      'Real-time dashboards (WebSocket) for mission-critical operations',
      'Knowledge Hub — NestJS RAG API (Qdrant + Gemini) for semantic search & doc Q&A',
      'Established code quality gates → 20% fewer bugs reaching QA',
    ],
    ctaCases: 'View case studies',
    ctaCv: 'Download CV',
    cvAlt: 'CV Russian version',
    microcopy:
      'Open to product & AI engineering roles in fintech & high-growth startups',
    seoKeywords:
      'Senior Frontend Developer, AI Engineer, React, Redux, TypeScript, NestJS, RAG, Qdrant, Gemini, vector database, JavaScript, HTML, CSS, Feature-Sliced Design, real-time UI, WebSocket, REST API, PostgreSQL, Git, GitHub, Figma, Scrum, component library, code review, mentoring, team lead, CI/CD, performance optimization, fintech-ready, product engineering',
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
    prevLabel: 'Previous projects',
    nextLabel: 'Next projects',
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
  work: {
    title: 'Work Experience',
    currentBadge: 'Current',
    materialsLabel: 'Course materials',
    prevLabel: 'Previous roles',
    nextLabel: 'Next roles',
    jobs: {
      mechatronica: {
        title: 'Senior Frontend Developer',
        company: 'NTC "Mechatronica"',
        period: 'Jan 2023 – Present',
        description:
          'Leading the React SPA rebuild of a next-gen industrial SCADA platform (legacy Webix MPA → modern stack) for engineers and operators. Apply modern frontend architectures (FSD, Atomic Design, Clean Architecture). Lead a team of 3 FE: requirements decomposition, mentoring, code review, hiring. Work in Agile (Scrum, sprints, Kanban). Real-time WebSocket UI and Code Quality practices (ESLint, Husky, Vitest) → 40% faster UI module delivery, 20% fewer bugs before QA.',
      },
      itfrog: {
        title: 'Frontend Developer',
        company: 'ITFrog LLC',
        period: 'May 2020 – Sep 2022',
        description:
          'Built a corporate sales CRM from scratch to replace scattered Excel workflows — React/Redux Toolkit architecture, reusable UI kit, and Figma-to-code delivery with Tailwind. Hit FCP under 1.5s via code splitting and lazy loading; cut manager data-entry errors by 25% through validation and UX (incl. batch deal editing).',
      },
      'ait-instructor': {
        title: 'Frontend Instructor',
        company: 'AIT TR GmbH',
        period: '2024 – 2025',
        description:
          'Taught frontend fundamentals through React for career-switchers at a DEKRA-accredited IT school in Germany (AIT TR). Designed and delivered a practical curriculum — HTML, CSS, JavaScript, TypeScript, React, Router, Formik/Yup, Redux Toolkit — with live sessions and lesson materials in a public GitHub repo. Strengthens mentoring and communication skills alongside product team leadership.',
      },
    },
  },
  philosophy: {
    title: 'Engineering Philosophy',
    description:
      'I build interfaces that stay reliable under real load — and teams that can keep shipping them. Code quality gates, clear architecture, and mentoring are how I turn complex product work into predictable delivery.',
    principles: [
      { id: 'quality', label: 'Code Quality' },
      { id: 'mentorship', label: 'Mentorship' },
      { id: 'architecture', label: 'Scalable Architecture' },
    ],
  },
  contactModal: {
    title: 'Get in Touch',
    email: 'Email',
    copy: 'Copy',
    copied: 'Copied!',
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
    title: 'Vladimir Leonov — Senior Frontend & AI Engineer',
    description:
      'Senior Frontend & AI Engineer with 7+ years in programming: React, NextJS, TypeScript, NestJS, RAG, MCP, AI Agents pipelines, FSD architecture, real-time UI, team leadership. Building scalable product interfaces and production AI systems for fintech and high-growth startups.',
    ogTitle: 'Vladimir Leonov — Frontend & AI Engineer',
    ogDescription:
      'React, NextJS, TypeScript, NestJS, RAG. Product UI and production AI systems for fintech and high-growth startups.',
    keywords: [
      'Senior Frontend Developer',
      'AI Engineer',
      'React',
      'NextJS',
      'TypeScript',
      'NestJS',
      'RAG',
      'Feature-Sliced Design',
      'WebSocket',
      'fintech',
    ],
  },
} as const;

export default en;
