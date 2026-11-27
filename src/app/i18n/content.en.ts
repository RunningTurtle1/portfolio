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
    lead: 'With a background in accounting and management control, I build tools designed around your profitability and cash flow, not just the technology.',
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
  trust: { title: 'They trusted me' },
  services: {
    eyebrow: 'Services',
    title: 'What I can do for you',
    intro:
      'I start from the day-to-day friction in your business and think like a manager: how much time and money does this process cost you? Then I deliver a tool that wins it back for your team within the first few weeks.',
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
          'A fast, mobile-first site built to rank well on Google',
          'Text and pages you can update yourself, no developer needed',
          'Your existing content and search rankings preserved during the move',
        ],
      },
      {
        icon: 'gauge',
        title: 'Optimization',
        pitch:
          'Is your existing application slow, unstable or expensive to maintain? I start with an audit: I measure, identify the causes and hand you a costed action plan before fixing anything.',
        benefits: [
          'A written diagnosis: what slows things down, what breaks, what costs',
          'Fixes prioritized by their impact on your business',
          'Before / after measurements (response times, incidents)',
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
      stack: 'Technologies:',
    },
    items: [
      {
        title: 'Customer payments: 1 to 2 days of work freed up every week',
        context: 'Communication SaaS platform',
        problem:
          'Customers paid by bank transfer. For each payment, an accountant had to top up the customer’s account, mark the invoice as paid in Odoo, email it and chase late payers. With over a hundred payments a month, this took 1 to 2 days every week.',
        solution:
          'I worked on an online payment module: when a customer pays by card, their account is topped up through the telecom operator’s API, and the invoice is updated in Odoo and emailed, with no human intervention. Bank transfer remains available for exceptional cases.',
        impact: [
          '1 to 2 days of work freed up every week for the accountant',
          'Credit available instantly for the customer, with no manual step',
          'Over 100 payments a month processed automatically',
        ],
        flow: ['Card payment', 'Payment module', 'Operator top-up', 'Odoo + emailed invoice'],
        stack: ['Node.js', 'TypeScript', 'AWS Lambda', 'Odoo API', 'Telecom operator API'],
      },
      {
        title: 'A booking platform back on track: faster, real-time, shippable again',
        context: 'My Simply Agenda',
        problem:
          'An ageing SaaS booking platform: outdated technologies, a dated design, and a calendar that loaded every appointment at once, sometimes hundreds of thousands of rows. The code was so hard to work with that releases had almost stopped.',
        solution:
          'As part of a two-developer team, I modernized the platform: several versions of lag caught up, code reworked to be readable and maintainable, design rebuilt together with a designer. The calendar now loads only the period on screen and updates in real time, instead of polling the server every 30 seconds.',
        impact: [
          'Releases back on track after almost coming to a halt',
          'A calendar that loads fast, even with hundreds of thousands of appointments stored',
          'Calendars updated instantly instead of every 30 seconds',
          'Lower hosting costs',
        ],
        flow: ['Professionals and clients', 'Real-time updates', 'Synced calendars'],
        stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'WebSocket'],
      },
      {
        title: 'Field audits run on a phone, with no more re-typing',
        context: 'Free · Safety department',
        problem:
          'Workplace safety audits of field technicians were done on a paper checklist, which then had to be fully re-typed into Excel. The result: lost time, risk of errors and hard-to-track corrective actions.',
        solution:
          'As the only developer on the project, I designed and built the application from scratch. Auditors run the audit directly on their phone, the report is exported as a PDF and every failed item is tracked until it is brought into compliance.',
        impact: [
          'No more re-typing: each audit is entered once, in the field',
          'PDF reports generated automatically',
          'A dashboard to track audit statistics',
          'Around thirty users equipped',
        ],
        flow: ['Audit on a phone', 'Audit application', 'Dashboard + PDF reports'],
        stack: ['Node.js', 'Vue.js', 'PHP', 'MariaDB'],
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
    afterDelivery: {
      title: 'After go-live',
      items: [
        {
          icon: 'key',
          title: 'You own your tool',
          text: 'The source code and the solution belong to you. You can evolve it as you see fit, with or without me.',
        },
        {
          icon: 'wrench',
          title: 'Maintenance if you want it',
          text: 'An optional maintenance plan for fixes, updates and small improvements.',
        },
      ],
    },
  },
  about: {
    eyebrow: 'About',
    title: 'A developer who speaks your language',
    paragraphs: [
      'I’m Camille Hayot, a freelance full stack developer with more than 7 years of experience. I build custom business applications and automate the processes that waste your team’s time.',
      'Before coding, I studied accounting and management control. I understand profitability, cash flow and reporting: every project is designed for a measurable gain.',
    ],
    photoAlt: 'Portrait of Camille Hayot',
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
    otherChannels: 'You can also find me on',
    reassurance: ['No-commitment call', 'Fixed-price quote', 'English or French'],
  },
  footer: {
    tagline: 'Freelance full stack developer · Automation and business applications',
    rights: 'All rights reserved.',
  },
};
