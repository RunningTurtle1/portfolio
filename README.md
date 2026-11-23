# Portfolio · Camille Hayot

Angular 22 · SSR avec pré-rendu (HTML statique par langue) · Tailwind CSS v4 + SCSS · FR / EN.

## Commandes

| Commande        | Effet                                                        |
| --------------- | ------------------------------------------------------------ |
| `npm start`     | Serveur de développement sur http://localhost:4200           |
| `npm run build` | Build de production : `dist/portfolio/browser` (site statique) |

## Où modifier quoi

| Besoin                          | Fichier                                         |
| ------------------------------- | ----------------------------------------------- |
| Textes français / anglais       | `src/app/i18n/content.fr.ts`, `content.en.ts`   |
| Couleurs (seule source)         | `src/styles/_colors.scss`                       |
| Domaine, email, liens externes  | `src/app/site.config.ts`                        |
| Sections de la page             | `src/app/sections/*.ts`                         |
| Photo                           | `public/images/camille-hayot.webp`              |

## Fonctionnement

- Routes : `/fr` et `/en` (la racine `/` redirige vers `/fr`). Chaque langue est pré-rendue en HTML
  à la compilation : chargement immédiat et bon référencement.
- Couleurs : `_colors.scss` → propriétés CSS `--color-*` (dans `styles.scss`) → lues par Tailwind
  (`src/tailwind.css`). La palette par défaut de Tailwind est désactivée.
- Hébergement : déposer `dist/portfolio/browser` sur Netlify ou Cloudflare Pages (aucun serveur Node requis).
