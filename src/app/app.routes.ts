import { Routes } from '@angular/router';
import { DEFAULT_LANG, isLang } from './site.config';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_LANG },
  {
    path: ':lang',
    canMatch: [(_route: unknown, segments: { path: string }[]) => isLang(segments[0]?.path)],
    loadComponent: () => import('./pages/home/home-page').then((m) => m.HomePage),
  },
  { path: '**', redirectTo: DEFAULT_LANG },
];
