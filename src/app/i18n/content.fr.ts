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
    lead: 'Formé à la comptabilité et au contrôle de gestion, je conçois des outils pensés pour votre rentabilité et votre trésorerie, pas seulement pour la technique.',
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
  trust: { title: 'Ils m’ont fait confiance' },
  services: {
    eyebrow: 'Services',
    title: 'Ce que je peux faire pour vous',
    intro:
      'Je pars de vos problèmes du quotidien et je raisonne comme un gestionnaire : combien de temps et d’argent ce processus vous coûte-t-il ? Puis je livre un outil qui en fait gagner à vos équipes, dès les premières semaines.',
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
          'Un site rapide sur mobile, conçu pour bien se classer sur Google',
          'Vos textes et vos pages modifiables par vous-même, sans développeur',
          'Vos contenus et votre référencement actuel conservés lors de la migration',
        ],
      },
      {
        icon: 'gauge',
        title: 'Optimisation',
        pitch:
          'Votre application existante est lente, instable ou coûteuse à maintenir ? Je commence par un audit : je mesure, j’identifie les causes et je vous remets un plan d’action chiffré avant de corriger.',
        benefits: [
          'Un diagnostic écrit : ce qui ralentit, ce qui casse, ce qui coûte',
          'Des corrections priorisées selon leur impact sur votre activité',
          'Des gains mesurés avant / après (temps de réponse, incidents)',
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
      stack: 'Technologies :',
    },
    items: [
      {
        title: 'Paiements clients : 1 à 2 jours de travail libérés chaque semaine',
        context: 'Plateforme SaaS de communication',
        problem:
          'Les clients payaient par virement. À chaque paiement, un comptable devait créditer leur compte, marquer la facture payée dans Odoo, l’envoyer par mail et relancer les retardataires. Avec plus d’une centaine de paiements par mois, cela lui prenait 1 à 2 jours par semaine.',
        solution:
          'J’ai travaillé sur un module de paiement en ligne : quand le client paie par carte, son compte est crédité via l’API de l’opérateur télécom, la facture est mise à jour dans Odoo et envoyée par mail, sans intervention humaine. Le virement reste possible pour les cas exceptionnels.',
        impact: [
          '1 à 2 jours de travail libérés chaque semaine pour le comptable',
          'Crédit disponible instantanément pour le client, sans attendre une intervention manuelle',
          'Plus de 100 paiements par mois traités automatiquement',
        ],
        flow: ['Paiement par carte', 'Module de paiement', 'Crédit opérateur', 'Odoo + facture par mail'],
        stack: ['Node.js', 'TypeScript', 'AWS Lambda', 'API Odoo', 'API opérateur télécom'],
      },
      {
        title: 'Une plateforme de rendez-vous relancée : plus rapide, en temps réel, de nouveau livrable',
        context: 'My Simply Agenda',
        problem:
          'Une plateforme SaaS de prise de rendez-vous vieillissante : technologies obsolètes, design dépassé, et un calendrier qui chargeait tous les rendez-vous d’un coup, parfois des centaines de milliers de lignes. Le code était si difficile à prendre en main que les mises en production étaient quasiment à l’arrêt.',
        solution:
          'Au sein d’une équipe de deux développeurs, j’ai modernisé la plateforme : plusieurs versions de retard rattrapées, code repris pour être lisible et maintenable, design refait en collaboration avec une designeuse. Le calendrier ne charge plus que la période affichée et se met à jour en temps réel, au lieu d’interroger le serveur toutes les 30 secondes.',
        impact: [
          'Des mises en production relancées, alors qu’elles étaient quasiment à l’arrêt',
          'Un calendrier qui s’affiche vite, même avec des centaines de milliers de rendez-vous en base',
          'Des agendas à jour instantanément, au lieu de toutes les 30 secondes',
          'Des coûts d’hébergement réduits',
        ],
        flow: ['Professionnels et clients', 'Mise à jour en temps réel', 'Agendas synchronisés'],
        stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'WebSocket'],
      },
      {
        title: 'Des audits terrain menés sur téléphone, sans plus aucune ressaisie',
        context: 'Free · Pôle sécurité',
        problem:
          'Les audits de sécurité au travail des techniciens se faisaient sur une grille papier, qu’il fallait ensuite ressaisir entièrement dans Excel. Résultat : du temps perdu, des risques d’erreur et un suivi difficile des points à corriger.',
        solution:
          'Seul développeur sur le projet, j’ai conçu et construit l’application de zéro. L’auditeur mène l’audit directement sur son téléphone, le rapport s’exporte en PDF et chaque point défaillant est suivi jusqu’à sa mise en conformité.',
        impact: [
          'Fin de la ressaisie : l’audit est saisi une seule fois, sur le terrain',
          'Des rapports PDF générés automatiquement',
          'Un tableau de bord pour suivre les statistiques des audits',
          'Une trentaine d’utilisateurs équipés',
        ],
        flow: ['Audit sur téléphone', 'Application d’audit', 'Tableau de bord + rapports PDF'],
        stack: ['Node.js', 'Vue.js', 'PHP', 'MariaDB'],
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
      { icon: 'tag', title: 'Au forfait', text: 'Périmètre et budget fixés avant de démarrer. Sans surprise.' },
      { icon: 'globe', title: '100 % à distance', text: 'En français ou en anglais, avec des points réguliers.' },
      { icon: 'calendar', title: 'De quelques jours à quelques mois', text: 'Une mission adaptée à la taille de votre besoin.' },
    ],
    afterDelivery: {
      title: 'Après la mise en ligne',
      items: [
        {
          icon: 'key',
          title: 'Vous êtes propriétaire de votre outil',
          text: 'Le code source et la solution vous appartiennent. Vous pouvez la faire évoluer comme vous le souhaitez, avec ou sans moi.',
        },
        {
          icon: 'wrench',
          title: 'Une maintenance si vous le souhaitez',
          text: 'Un forfait de maintenance optionnel pour les corrections, les mises à jour et les petites évolutions.',
        },
      ],
    },
  },
  about: {
    eyebrow: 'À propos',
    title: 'Un développeur qui parle votre langage',
    paragraphs: [
      'Je suis Camille Hayot, développeur full stack indépendant depuis plus de 7 ans. Je conçois des applications métier sur mesure et j’automatise les processus qui font perdre du temps aux équipes.',
      'Avant le code, j’ai étudié la comptabilité et le contrôle de gestion. Je comprends vos enjeux de rentabilité, de trésorerie et de pilotage : chaque projet est pensé pour un gain mesurable.',
    ],
    photoAlt: 'Portrait de Camille Hayot',
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
    otherChannels: 'Retrouvez-moi aussi sur',
    reassurance: ['Échange sans engagement', 'Devis au forfait', 'Français ou anglais'],
  },
  footer: {
    tagline: 'Développeur full stack indépendant · Automatisation et applications métier',
    rights: 'Tous droits réservés.',
  },
};
