/** Réglages globaux du site. */
export const SITE = {
  name: 'Camille Hayot',
  email: 'hayotcamille@gmail.com',
  /**
   * URL publique du site, sans « / » final (ex. 'https://www.mon-domaine.fr').
   * À renseigner une fois le nom de domaine choisi : active les balises canonical,
   * hreflang et og:url (référencement).
   */
  url: '',
  /** Liens externes : laisser vide pour les masquer. */
  links: {
    linkedin: 'https://www.linkedin.com/in/camille-hayot-a77589148/',
    malt: 'https://www.malt.fr/profile/camillehayot1',
    github: '',
  },
} as const;

/**
 * Bandeau « Ils m'ont fait confiance ».
 * Déposer les logos dans public/images/logos/ (SVG ou PNG à fond transparent) et indiquer le chemin
 * dans `logo`. Tant que `logo` est vide, le nom s'affiche en texte.
 * Ne pas ajouter l'employeur actuel sans accord explicite (voir CLAUDE.md).
 */
export const CLIENTS: { name: string; logo: string }[] = [
  { name: 'Free', logo: '' },
  { name: 'My Simply Agenda', logo: '' },
];

export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}
