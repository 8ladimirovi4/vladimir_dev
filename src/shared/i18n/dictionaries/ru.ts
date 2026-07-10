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
