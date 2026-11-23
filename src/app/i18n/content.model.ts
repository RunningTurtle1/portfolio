import { IconName } from '../shared/icon';

export interface NavItem {
  id: string;
  label: string;
}

export interface Service {
  icon: IconName;
  title: string;
  pitch: string;
  benefits: string[];
  featured?: boolean;
}

export interface CaseStudy {
  title: string;
  context: string;
  period: string;
  ongoing?: boolean;
  problem: string;
  solution: string;
  impact: string[];
  /** Schéma d'architecture simplifié, lu de gauche à droite. */
  flow: string[];
  stack: string[];
}

export interface MethodStep {
  icon: IconName;
  duration: string;
  title: string;
  text: string;
}

export interface SiteContent {
  lang: string;
  meta: { title: string; description: string };
  skipLink: string;
  nav: { items: NavItem[]; cta: string; switchLang: string; openMenu: string; closeMenu: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    subtitleStrong: string;
    pills: { icon: IconName; label: string; featured?: boolean }[];
    flow: { icon: IconName; label: string; featured?: boolean }[];
    ctaPrimary: string;
    ctaSecondary: string;
    contactCardTitle: string;
    stats: { value: string; label: string }[];
  };
  services: { eyebrow: string; title: string; intro: string; featuredBadge: string; items: Service[] };
  cases: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: { problem: string; solution: string; impact: string; architecture: string; ongoing: string; stack: string };
    items: CaseStudy[];
  };
  method: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: MethodStep[];
    firstVersion: { title: string; items: string[] };
    commitments: { icon: IconName; title: string; text: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    photoAlt: string;
    educationTitle: string;
    education: { title: string; school: string; years: string; note?: string }[];
    stackTitle: string;
    stackMain: { label: string; items: string[] };
    stackExtra: { label: string; items: string[] };
  };
  contact: { eyebrow: string; title: string; text: string; cta: string; orWrite: string; reassurance: string[] };
  footer: { tagline: string; rights: string };
}
