/** @layer shared / slice i18n / segment dictionaries */

const ru = {
  logo: 'Vladimir_Leonov.dev',
  nav: {
    work: 'Опыт',
    stack: 'Стек',
    projects: 'Проекты',
    engineering: 'Инженерия',
    contact: 'Контакты',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
  },
  hero: {
    title: 'Senior Frontend & AI Engineer',
    titleLine2: 'Продуктовые интерфейсы — и production AI-системы',
    subheadline:
      '7+ лет в программировании с React и TypeScript. Архитектура frontend-систем, управление командой, сложные UI: real-time дашборды и CRM. За пределами UI собираю AI RAG API на NestJS с hybrid retrieval в векторных БД на основе LLM, semantic search и Q&A по базе знаний. Фокус — performance, качество кода и предсказуемая delivery.',
    badge: '7+ лет · React · TypeScript · NestJS · RAG · Team Lead',
    bullets: [
      'FSD-архитектура → +40% к скорости разработки UI-модулей',
      'Real-time интерфейсы (WebSocket) для mission-critical systems',
      'Knowledge Hub — NestJS RAG API (Qdrant + Gemini) для semantic search и doc Q&A',
      'Code quality (ESLint, Husky, Vitest) → −20% багов до QA',
    ],
    ctaCases: 'Кейсы',
    ctaCv: 'Скачать резюме',
    cvAlt: 'Версия резюме на английском',
    microcopy:
      'Рассматриваю product и AI engineering роли в fintech и high-growth стартапах',
    seoKeywords:
      'Senior Frontend Developer, AI Engineer, React, Redux, TypeScript, NestJS, RAG, Qdrant, Gemini, vector database, JavaScript, HTML, CSS, Feature-Sliced Design, real-time UI, WebSocket, REST API, PostgreSQL, Git, GitHub, Figma, Scrum, component library, code review, mentoring, team lead, CI/CD, performance optimization, fintech-ready, product engineering',
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
    prevLabel: 'Предыдущие проекты',
    nextLabel: 'Следующие проекты',
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
  work: {
    title: 'Опыт работы',
    currentBadge: 'Сейчас',
    materialsLabel: 'Материалы курса',
    prevLabel: 'Предыдущие роли',
    nextLabel: 'Следующие роли',
    jobs: {
      mechatronica: {
        title: 'Senior Frontend Developer',
        company: 'ООО «НТЦ Механотроника»',
        period: 'Янв 2023 – н.в.',
        description:
          'Руковожу разработкой SCADA нового поколения на базе React SPA (замена легаси Webix MPA) для инженеров и операторов. Применяю современные frontend-архитектуры (FSD, Atomic Design, Clean Architecture). Лидирую команду из 3 FE: декомпозиция требований, менторинг, код-ревью, найм. Работа по Agile (Scrum, sprints, Kanban). Real-time UI на WebSocket и практики Code Quality (ESLint, Husky, Vitest) → +40% к скорости UI-модулей, −20% багов до QA.',
      },
      itfrog: {
        title: 'Frontend Developer',
        company: 'ООО «Айтифрог»',
        period: 'Май 2020 – Сен 2022',
        description:
          'С нуля собрал корпоративную CRM для отдела продаж вместо разрозненных Excel: архитектура React/Redux Toolkit, UI-kit и pixel-perfect из Figma на Tailwind. FCP < 1.5s за счёт code splitting и lazy loading; ошибки ввода менеджеров −25% благодаря валидации и UX (в т.ч. пакетное редактирование сделок).',
      },
      'ait-instructor': {
        title: 'Frontend Instructor',
        company: 'AIT TR GmbH',
        period: '2024 – 2025',
        description:
          'Преподавал frontend от основ до React для студентов, меняющих карьеру, в DEKRA-аккредитованной IT-школе в Германии (AIT TR). Собрал и вёл практическую программу — HTML, CSS, JavaScript, TypeScript, React, Router, Formik/Yup, Redux Toolkit — с live-занятиями и материалами в публичном GitHub-репозитории. Усиливает навыки менторинга и коммуникации рядом с лидерством в продуктовой команде.',
      },
    },
  },
  philosophy: {
    title: 'Как я работаю',
    description:
      'Строю интерфейсы, которые остаются надёжными под реальной нагрузкой — и команды, которые могут их развивать дальше. Code quality, понятная архитектура и менторинг — как я перевожу сложную продуктовую работу в предсказуемую delivery.',
    principles: [
      { id: 'quality', label: 'Качество кода' },
      { id: 'mentorship', label: 'Менторство' },
      { id: 'architecture', label: 'Масштабируемая архитектура' },
    ],
  },
  contactModal: {
    title: 'Связаться со мной',
    email: 'Email',
    copy: 'Копировать',
    copied: 'Скопировано!',
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
    title: 'Владимир Леонов — Senior Frontend & AI Engineer',
    description:
      'Senior Frontend & AI Engineer, 7+ лет в программировании: React, NextJS, TypeScript, NestJS, RAG, MCP, пайплайны AI Agents, FSD, real-time UI, лидирование команды. Масштабируемые продуктовые интерфейсы и production AI-системы для fintech и high-growth стартапов.',
    ogTitle: 'Владимир Леонов — Frontend & AI Engineer',
    ogDescription:
      'React, NextJS, TypeScript, NestJS, RAG. Продуктовые интерфейсы и production AI для fintech и high-growth стартапов.',
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

export default ru;
