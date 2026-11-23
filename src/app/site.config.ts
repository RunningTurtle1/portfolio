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
    linkedin: '',
    malt: '',
    github: '',
  },
} as const;

export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}
