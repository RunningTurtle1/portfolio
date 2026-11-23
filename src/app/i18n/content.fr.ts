import { SiteContent } from './content.model';

export const FR: SiteContent = {
  lang: 'fr',
  meta: {
    title: 'Camille Hayot · Développeur indépendant · Automatisation et applications métier',
    description:
      "Développeur full stack indépendant depuis plus de 7 ans. J'automatise vos processus et je crée vos applications métier sur mesure, au forfait et 100 % à distance. Première version en 2 à 3 semaines.",
  },
  skipLink: 'Aller au contenu',
  nav: {
    items: [
      { id: 'services', label: 'Services' },
      { id: 'etudes-de-cas', label: 'Études de cas' },
      { id: 'methode', label: 'Méthode' },
      { id: 'a-propos', label: 'À propos' },
    ],
    cta: 'Me contacter',
    switchLang: 'English version',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  hero: {
    eyebrow: 'Camille Hayot · Développeur indépendant',
    titleLine1: 'Moins de temps perdu,',
    titleLine2: 'plus de valeur créée.',
    subtitle: 'Le temps est précieux.',
    subtitleStrong: 'Automatisez-le.',
    pills: [
      { icon: 'zap', label: 'Automatisation', featured: true },
      { icon: 'monitor', label: 'Refonte de site web' },
      { icon: 'gauge', label: 'Optimisation' },
    ],
    flow: [
      { icon: 'clock', label: 'Tâches répétitives' },
      { icon: 'zap', label: 'Automatisation', featured: true },
      { icon: 'trending-up', label: 'Temps gagné' },
    ],
    ctaPrimary: 'Contactez-moi, on discute',
    ctaSecondary: 'Voir des projets',
    contactCardTitle: 'Contactez-moi, on discute !',
    stats: [
      { value: '7+ ans', label: "d'expérience" },
      { value: '2 à 3 sem.', label: 'pour une première version' },
      { value: '100 %', label: 'à distance, au forfait' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Ce que je peux faire pour vous',
    intro:
      'Je pars de vos irritants du quotidien et je livre un outil qui fait gagner du temps à vos équipes, dès les premières semaines.',
    featuredBadge: 'Service principal',
    items: [
      {
        icon: 'zap',
        title: 'Automatisation de processus',
        pitch:
          'Vos équipes ressaisissent, copient et vérifient à la main ? Je relie vos outils entre eux et je crée les applications métier qui font le travail à leur place.',
        benefits: [
          'Moins de saisies manuelles et moins d’erreurs',
          'Vos outils (CRM, facturation, paiement…) connectés',
          'Tableaux Excel et papier remplacés par une application',
        ],
        featured: true,
      },
      {
        icon: 'monitor',
        title: 'Refonte de site web',
        pitch:
          'Un site daté, lent ou difficile à mettre à jour freine votre activité. Je le reconstruis rapide, clair et adapté au mobile.',
        benefits: [
          'Un site moderne qui inspire confiance',
          'Pages rapides et bien référencées',
          'Contenus faciles à faire évoluer',
        ],
      },
      {
        icon: 'gauge',
        title: 'Optimisation',
        pitch:
          'Votre application existante est lente, instable ou coûteuse à maintenir ? Je trouve ce qui bloque et je le corrige.',
        benefits: [
          'Temps de chargement réduits',
          'Moins de pannes et d’incidents',
          'Une base saine pour les prochaines évolutions',
        ],
      },
    ],
  },
  cases: {
    eyebrow: 'Études de cas',
    title: 'Des résultats concrets',
    intro:
      'Ces projets sont internes à mes clients : pas de captures d’écran, mais le problème, la solution et ce que cela a changé.',
    labels: {
      problem: 'Le problème',
      solution: 'La solution',
      impact: 'L’impact',
      architecture: 'Comment ça fonctionne',
      ongoing: 'En cours',
      stack: 'Technologies :',
    },
    items: [
      {
        title: 'Encaissements automatisés pour une plateforme de communication',
        context: 'Plateforme SaaS de communication',
        period: 'Depuis 2022',
        ongoing: true,
        problem:
          'Le suivi des paiements clients passait par des manipulations manuelles entre le CRM et les prestataires de paiement. Le service financier y consacrait plusieurs jours.',
        solution:
          'J’ai conçu un module de paiement qui relie automatiquement le CRM aux prestataires de paiement, ainsi que des connecteurs vers les outils de téléphonie et les CRM des clients.',
        impact: [
          'Encaissements facilités pour les clients',
          'Plusieurs jours de travail économisés pour le service financier',
          'Moins de ressaisies, donc moins d’erreurs',
        ],
        flow: ['CRM', 'Module de paiement', 'Prestataires de paiement'],
        stack: ['Node.js', 'TypeScript', 'Fonctions serverless (AWS Lambda)', 'API REST'],
      },
      {
        title: 'Modernisation d’une plateforme de prise de rendez-vous',
        context: 'My Simply Agenda',
        period: '2021 – 2022',
        problem:
          'Une plateforme SaaS de prise de rendez-vous vieillissante, difficile à faire évoluer et à maintenir.',
        solution:
          'En tant que responsable technique, j’ai piloté sa modernisation : refonte progressive du code, nouvelles fonctionnalités et organisation du développement.',
        impact: [
          'Une plateforme plus fiable pour les utilisateurs',
          'Des évolutions livrées plus vite',
          'Une base technique saine pour la suite',
        ],
        flow: ['Clients', 'Prise de rendez-vous en ligne', 'Agendas des professionnels'],
        stack: ['Angular', 'PHP', 'Laravel', 'MySQL'],
      },
      {
        title: 'Des audits papier et Excel remplacés par une application',
        context: 'Free · Pôle sécurité',
        period: '2019 – 2021',
        problem:
          'Les audits de sécurité étaient gérés sur papier et dans des fichiers Excel : ressaisies, versions multiples, suivi difficile.',
        solution:
          'J’ai construit de zéro une application métier qui dématérialise tout le processus d’audit, de la saisie terrain au suivi des actions.',
        impact: [
          'Fin du papier et des fichiers Excel dispersés',
          'Des données centralisées et fiables',
          'Un suivi des audits en temps réel',
        ],
        flow: ['Saisie terrain', 'Application d’audit', 'Suivi et rapports'],
        stack: ['Angular', 'TypeScript', 'PHP', 'MariaDB'],
      },
    ],
  },
  method: {
    eyebrow: 'Méthode de travail',
    title: 'Un outil utilisable en quelques semaines',
    intro: 'Un cadre simple, un budget fixé à l’avance et des résultats visibles très tôt.',
    steps: [
      {
        icon: 'clipboard-check',
        duration: 'Quelques jours',
        title: 'Cadrage',
        text: 'On identifie ensemble le processus qui vous coûte le plus de temps. Je vous remets un périmètre, un planning et un prix fixe.',
      },
      {
        icon: 'zap',
        duration: '2 à 3 semaines',
        title: 'Première version',
        text: 'Vous recevez un outil utilisable sur le cœur de votre besoin, que vos équipes peuvent tester dans des conditions réelles.',
      },
      {
        icon: 'trending-up',
        duration: 'Selon vos besoins',
        title: 'Itérations',
        text: 'On l’améliore à partir des retours de vos équipes, par étapes courtes, chacune avec son périmètre et son budget.',
      },
    ],
    firstVersion: {
      title: 'Ce que contient une première version',
      items: [
        'Les écrans essentiels de votre processus principal',
        'Les tâches répétitives clés déjà automatisées',
        'Une mise en ligne accessible à vos équipes',
        'Une courte prise en main pour démarrer',
      ],
    },
    commitments: [
      { icon: 'tag', title: 'Au forfait', text: 'Périmètre et budget fixés avant de démarrer. Pas de surprise.' },
      { icon: 'globe', title: '100 % à distance', text: 'En français ou en anglais, avec des points réguliers.' },
      { icon: 'calendar', title: 'De quelques jours à quelques mois', text: 'Une mission adaptée à la taille de votre besoin.' },
    ],
  },
  about: {
    eyebrow: 'À propos',
    title: 'Un développeur qui parle votre langage',
    paragraphs: [
      'Je suis Camille Hayot, développeur full stack indépendant depuis plus de 7 ans. Je conçois des applications métier sur mesure et j’automatise les processus qui font perdre du temps aux équipes.',
      'Avant le code, j’ai étudié la comptabilité et le contrôle de gestion. Je comprends vos enjeux de rentabilité, de trésorerie et de pilotage : chaque projet est pensé pour un gain mesurable.',
    ],
    photoAlt: 'Portrait de Camille Hayot',
    educationTitle: 'Formation',
    education: [
      {
        title: 'Titre RNCP niveau III · Développeur web',
        school: 'OpenClassrooms',
        years: '2018 – 2019',
      },
      {
        title: 'Licence AES · Comptabilité et contrôle de gestion',
        school: 'Université Paris Nanterre',
        years: '2013 – 2016',
        note: 'Un vrai plus pour comprendre vos enjeux financiers',
      },
    ],
    stackTitle: 'Technologies',
    stackMain: {
      label: 'Au quotidien',
      items: ['Angular', 'TypeScript', 'Node.js', 'Vue.js', 'PHP', 'Laravel', 'MySQL / MariaDB'],
    },
    stackExtra: { label: 'Également', items: ['NestJS', 'Express', 'Docker', 'PostgreSQL'] },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet',
    text: 'Décrivez-moi en quelques lignes la tâche qui vous fait perdre du temps. Je vous réponds sous 48 h avec une première idée de solution.',
    cta: 'Contactez-moi, on discute',
    orWrite: 'ou écrivez-moi directement à',
    reassurance: ['Échange sans engagement', 'Devis au forfait', 'Français ou anglais'],
  },
  footer: {
    tagline: 'Développeur full stack indépendant · Automatisation et applications métier',
    rights: 'Tous droits réservés.',
  },
};
