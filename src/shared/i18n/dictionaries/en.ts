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
