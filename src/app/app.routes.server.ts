import { RenderMode, ServerRoute } from '@angular/ssr';
import { LANGS } from './site.config';

/** Toutes les pages sont pré-rendues à la compilation (HTML statique, une version par langue). */
export const serverRoutes: ServerRoute[] = [
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => LANGS.map((lang) => ({ lang })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
