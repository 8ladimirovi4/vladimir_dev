/** @layer shared / slice i18n / segment dictionaries */

const ru = {
  logo: 'Vladimir.dev',
  nav: {
    work: 'Работа',
    stack: 'Стек',
    projects: 'Проекты',
    engineering: 'Инженерия',
    contact: 'Контакты',
  },
  hero: {
    title: 'Senior Frontend Engineer',
    titleLine2: 'Проектирую надёжные продуктовые интерфейсы под масштаб',
    subheadline:
      '7+ лет в программировании с React и TypeScript. Архитектура frontend-систем, управление командой, сложные UI: real-time дашборды, CRM, UI для контроллеров SBO с нуля. Фокус — performance, качество кода и предсказуемая delivery в быстрорастущих продуктах.',
    badge: '7+ лет в программировании · React · TypeScript · Team Lead',
    bullets: [
      'FSD-архитектура → +40% к скорости разработки UI-модулей',
      'Real-time интерфейсы (WebSocket) для mission-critical систем',
      'Code quality (ESLint, Husky, Vitest) → −20% багов до QA',
      'CI/CD pipeline с автотестами → предсказуемые релизы в production',
    ],
    ctaCases: 'Кейсы',
    ctaCv: 'Скачать резюме',
    cvAlt: 'Версия на английском',
    microcopy:
      'Рассматриваю product engineering роли в fintech и high-growth стартапах',
    seoKeywords:
      'Senior Frontend Developer, React, Redux, TypeScript, JavaScript, HTML, CSS, Feature-Sliced Design, real-time UI, WebSocket, REST API, PostgreSQL, Git, GitHub, Figma, Scrum, component library, code review, mentoring, team lead, CI/CD, performance optimization, fintech-ready, product engineering',
  },
  expertise: {
    title: 'Техническая экспертиза',
    filterHint: 'Нажмите, чтобы отфильтровать проекты',
    cards: [
      {
        id: 'core',
        title: 'Основной стек',
        description: 'Экспертный уровень',
        items: ['React & TypeScript', 'Redux Toolkit', 'JavaScript & HTML/CSS'],
      },
      {
        id: 'architecture',
        title: 'Архитектура',
        description: 'Enterprise-паттерны',
        items: ['Feature-Sliced Design', 'CI/CD & Git', 'Scrum & Figma'],
      },
      {
        id: 'ai',
        title: 'AI Integration',
        description: 'Applied ML в production',
        items: ['RAG pipelines', 'Qdrant vector DB', 'Nest.js APIs'],
      },
      {
        id: 'performance',
        title: 'Performance',
        description: 'Real-time решения',
        items: ['WebSocket & REST', 'PostgreSQL', 'Vitest & code quality'],
      },
    ],
  },
  projects: {
    title: 'Проекты',
    ndaLabel: 'Под NDA',
    openRepoLabel: 'Открыть репозиторий',
    clearFilter: 'Показать все проекты',
    emptyFilter: 'Нет проектов для этого стека.',
    cards: {
      'scada-nextgen': {
        title: 'SCADA-платформа нового поколения',
        description:
          'Руковожу заменой легаси industrial SCADA (Webix MPA → React SPA) для инженеров и операторов. FSD-архитектура, команда из 3 FE, real-time UI на WebSocket — +40% к скорости UI-модулей, −20% багов до QA.',
      },
      'crm-sales': {
        title: 'Корпоративная CRM',
        description:
          'CRM для отдела продаж с нуля вместо Excel: архитектура React/Redux Toolkit, UI-kit и FCP < 1.5s. Ошибки ввода менеджеров −25% за счёт валидации и UX.',
      },
      'knowledge-hub-rag': {
        title: 'Knowledge Hub — AI RAG API',
        description:
          'Production-shaped backend на NestJS для AI knowledge-продукта: RAG по статьям (Qdrant, hybrid retrieval + rerank), Gemini LLM, auth/RBAC и Docker (Postgres + vector DB). Точка входа в коммерческую разработку React/Next.js + NestJS + AI — copilot, semantic search, Q&A по базе знаний.',
      },
      'rest-client-app': {
        title: 'REST Client — Next.js API Workbench',
        description:
          'Team Lead в команде из 2 FE: Postman-style REST-клиент на Next.js 15 — auth, история запросов, переменные окружения, code snippets и i18n, плюс server-side forwarding для CORS. Production-shaped foundation на React/Next для коммерческих developer tools и внутренних API-консолей.',
      },
    },
  },
  footer: {
    copyEmail: 'Копировать email',
    copied: 'Скопировано!',
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
    },
  },
  meta: {
    description:
      'Senior Frontend Engineer, 7+ лет в программировании: React, TypeScript, Redux, FSD, real-time UI, CI/CD, лидирование команды. Масштабируемые продуктовые интерфейсы для fintech и high-growth стартапов.',
  },
} as const;

export default ru;
