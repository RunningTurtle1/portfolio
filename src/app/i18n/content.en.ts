import { SiteContent } from './content.model';

export const EN: SiteContent = {
  lang: 'en',
  meta: {
    title: 'Camille Hayot · Freelance developer · Automation and business applications',
    description:
      'Freelance full stack developer with 7+ years of experience. I automate your processes and build custom business applications, fixed-price and 100% remote. First version in 2 to 3 weeks.',
  },
  skipLink: 'Skip to content',
  nav: {
    items: [
      { id: 'services', label: 'Services' },
      { id: 'etudes-de-cas', label: 'Case studies' },
      { id: 'methode', label: 'Process' },
      { id: 'a-propos', label: 'About' },
    ],
    cta: 'Contact me',
    switchLang: 'Version française',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'Camille Hayot · Freelance developer',
    titleLine1: 'Less time wasted,',
    titleLine2: 'more value created.',
    subtitle: 'Time is precious.',
    subtitleStrong: 'Automate it.',
    pills: [
      { icon: 'zap', label: 'Automation', featured: true },
      { icon: 'monitor', label: 'Website redesign' },
      { icon: 'gauge', label: 'Optimization' },
    ],
    flow: [
      { icon: 'clock', label: 'Repetitive tasks' },
      { icon: 'zap', label: 'Automation', featured: true },
      { icon: 'trending-up', label: 'Time saved' },
    ],
    ctaPrimary: "Contact me, let's talk",
    ctaSecondary: 'See projects',
    contactCardTitle: "Contact me, let's talk!",
    stats: [
      { value: '7+ years', label: 'of experience' },
      { value: '2–3 weeks', label: 'to a first version' },
      { value: '100%', label: 'remote, fixed-price' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'What I can do for you',
    intro:
      'I start from the day-to-day friction in your business and deliver a tool that saves your team time within the first few weeks.',
    featuredBadge: 'Core service',
    items: [
      {
        icon: 'zap',
        title: 'Process automation',
        pitch:
          'Is your team re-typing, copying and checking data by hand? I connect your tools and build the business applications that do the work for them.',
        benefits: [
          'Less manual data entry, fewer errors',
          'Your tools (CRM, invoicing, payments…) connected',
          'Spreadsheets and paperwork replaced by an application',
        ],
        featured: true,
      },
      {
        icon: 'monitor',
        title: 'Website redesign',
        pitch:
          'An outdated, slow or hard-to-update website holds your business back. I rebuild it fast, clear and mobile-friendly.',
        benefits: [
          'A modern site that builds trust',
          'Fast pages that rank well',
          'Content that is easy to update',
        ],
      },
      {
        icon: 'gauge',
        title: 'Optimization',
        pitch:
          'Is your existing application slow, unstable or expensive to maintain? I find what is holding it back and fix it.',
        benefits: [
          'Shorter loading times',
          'Fewer outages and incidents',
          'A healthy foundation for what comes next',
        ],
      },
    ],
  },
  cases: {
    eyebrow: 'Case studies',
    title: 'Real results',
    intro:
      'These projects are internal to my clients: no screenshots, but the problem, the solution and what changed.',
    labels: {
      problem: 'The problem',
      solution: 'The solution',
      impact: 'The impact',
      architecture: 'How it works',
      ongoing: 'Ongoing',
      stack: 'Technologies:',
    },
    items: [
      {
        title: 'Automated payment collection for a communication platform',
        context: 'Communication SaaS platform',
        period: 'Since 2022',
        ongoing: true,
        problem:
          'Tracking customer payments required manual work between the CRM and the payment providers. The finance team spent several days on it.',
        solution:
          'I designed a payment module that automatically connects the CRM to the payment providers, along with connectors to telephony tools and customers’ CRMs.',
        impact: [
          'Easier payment collection for customers',
          'Several days of work saved for the finance team',
          'Less re-typing, so fewer errors',
        ],
        flow: ['CRM', 'Payment module', 'Payment providers'],
        stack: ['Node.js', 'TypeScript', 'Serverless functions (AWS Lambda)', 'REST APIs'],
      },
      {
        title: 'Modernizing an online booking platform',
        context: 'My Simply Agenda',
        period: '2021 – 2022',
        problem: 'An ageing SaaS booking platform that was hard to evolve and maintain.',
        solution:
          'As technical lead, I drove its modernization: gradual code overhaul, new features and a better-organized development process.',
        impact: [
          'A more reliable platform for users',
          'New features shipped faster',
          'A healthy technical foundation for the future',
        ],
        flow: ['Customers', 'Online booking', 'Professionals’ calendars'],
        stack: ['Angular', 'PHP', 'Laravel', 'MySQL'],
      },
      {
        title: 'Paper and Excel audits replaced by an application',
        context: 'Free · Security department',
        period: '2019 – 2021',
        problem:
          'Security audits were handled on paper and in Excel files: re-typing, multiple versions, hard to follow up.',
        solution:
          'I built a business application from scratch that digitizes the whole audit process, from on-site data entry to action tracking.',
        impact: [
          'No more paper and scattered Excel files',
          'Centralized, reliable data',
          'Real-time audit tracking',
        ],
        flow: ['On-site entry', 'Audit application', 'Tracking and reports'],
        stack: ['Angular', 'TypeScript', 'PHP', 'MariaDB'],
      },
    ],
  },
  method: {
    eyebrow: 'How I work',
    title: 'A usable tool within weeks',
    intro: 'A simple framework, a budget agreed upfront and visible results early on.',
    steps: [
      {
        icon: 'clipboard-check',
        duration: 'A few days',
        title: 'Scoping',
        text: 'Together we pinpoint the process that costs you the most time. I give you a scope, a schedule and a fixed price.',
      },
      {
        icon: 'zap',
        duration: '2 to 3 weeks',
        title: 'First version',
        text: 'You get a usable tool covering the core of your need, which your team can test in real conditions.',
      },
      {
        icon: 'trending-up',
        duration: 'As needed',
        title: 'Iterations',
        text: 'We improve it based on your team’s feedback, in short steps, each with its own scope and budget.',
      },
    ],
    firstVersion: {
      title: 'What a first version includes',
      items: [
        'The essential screens of your main process',
        'Key repetitive tasks already automated',
        'Deployed online and accessible to your team',
        'A short onboarding to get started',
      ],
    },
    commitments: [
      { icon: 'tag', title: 'Fixed-price', text: 'Scope and budget agreed before we start. No surprises.' },
      { icon: 'globe', title: '100% remote', text: 'In English or French, with regular check-ins.' },
      { icon: 'calendar', title: 'From a few days to a few months', text: 'An engagement sized to your need.' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'A developer who speaks your language',
    paragraphs: [
      'I’m Camille Hayot, a freelance full stack developer with more than 7 years of experience. I build custom business applications and automate the processes that waste your team’s time.',
      'Before coding, I studied accounting and management control. I understand profitability, cash flow and reporting: every project is designed for a measurable gain.',
    ],
    photoAlt: 'Portrait of Camille Hayot',
    educationTitle: 'Education',
    education: [
      {
        title: 'French state-certified web developer diploma (RNCP level III)',
        school: 'OpenClassrooms',
        years: '2018 – 2019',
      },
      {
        title: 'Bachelor’s degree in Economics and Management · Accounting and management control',
        school: 'Université Paris Nanterre',
        years: '2013 – 2016',
        note: 'A real asset to understand your financial challenges',
      },
    ],
    stackTitle: 'Technologies',
    stackMain: {
      label: 'Day to day',
      items: ['Angular', 'TypeScript', 'Node.js', 'Vue.js', 'PHP', 'Laravel', 'MySQL / MariaDB'],
    },
    stackExtra: { label: 'Also', items: ['NestJS', 'Express', 'Docker', 'PostgreSQL'] },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your project',
    text: 'Tell me in a few lines about the task that wastes your time. I’ll reply within 48 hours with a first idea of a solution.',
    cta: "Contact me, let's talk",
    orWrite: 'or email me directly at',
    reassurance: ['No-commitment call', 'Fixed-price quote', 'English or French'],
  },
  footer: {
    tagline: 'Freelance full stack developer · Automation and business applications',
    rights: 'All rights reserved.',
  },
};
