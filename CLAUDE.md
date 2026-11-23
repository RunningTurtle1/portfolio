# Projet : site portfolio freelance de Camille Hayot

## Objectif du site
Site vitrine / portfolio personnel pour développer mon activité freelance.
Cible principale : **dirigeants de PME et responsables métier** (pas des recruteurs techniques).
Le site doit les convaincre de me confier un projet au **forfait**, en **100 % remote**.

Inspiration visuelle : https://tahatoufik.dev/fr (design épuré, sections claires, site multilingue).
Ne pas copier le contenu ni le design à l'identique : s'en inspirer pour la structure et l'ambiance.

## Qui je suis
- Développeur Full Stack indépendant, plus de 7 ans d'expérience
- Spécialité : **applications métier sur mesure** et **automatisation** de processus
  (moins d'erreurs, moins de tâches manuelles, gain de temps mesurable)
- Services proposés, par ordre de priorité : automatisation, refonte de site web, optimisation
- Accords au masculin en français (« développeur indépendant »)

## Stack technique (mes compétences, à afficher sur le site)
- Confirmée : Angular, TypeScript, Node.js, Vue.js, PHP, Laravel, MySQL/MariaDB
- Complémentaire : NestJS, Express, Docker, PostgreSQL

## Expériences phares (à transformer en études de cas)
1. **Plateforme SaaS de communication** (depuis fév. 2022) : intégrations CRM, connecteurs CTI,
   intégration de paiement. Projet phare : module de paiement en fonctions Lambda Node.js,
   relié au CRM et aux API des prestataires de paiement.
   Impact : encaissements facilités, plusieurs jours de travail économisés pour le service financier.
2. **My Simply Agenda** (mai 2021 – avr. 2022) : responsable technique, modernisation d'une
   plateforme SaaS de prise de rendez-vous.
3. **Free / Pôle sécurité** (avr. 2019 – mai 2021) : application métier construite de zéro
   pour remplacer des processus papier et Excel (dématérialisation d'audits).

Pas de captures d'écran disponibles (projets internes) : présenter ces projets en **études de cas
textuelles** (problème → solution → impact), avec schémas d'architecture ou démos anonymisées.

## Formation
- Titre RNCP niveau III « Développeur web junior », OpenClassrooms (2018–2019)
- Licence AES, parcours comptabilité / contrôle de gestion, Université Paris Nanterre (2013–2016)
  → atout à valoriser : je comprends les enjeux de gestion et de finance des clients.

## Arguments commerciaux
- Première version utilisable livrée en **2 à 3 semaines** (préciser ce que contient une « première version »)
- Missions au forfait, périmètre et budget fixés
- 100 % remote, en français ou en anglais
- Missions de quelques jours à quelques mois
- Client propriétaire de sa solution après livraison
- Suivi de maintenance optionnel

## Ton et rédaction
- Messages courts, directs, centrés sur l'**impact métier**, sans jargon technique dans les sections destinées aux clients
- La stack technique apparaît, mais en second plan (après les résultats)
- Site en français et en anglais

## Code couleur
Couleurs extraites de ma bannière LinkedIn et de ma photo de profil
(`assets/branding/banniere-linkedin.png` et `assets/branding/photo-profil.jpg`).
Le site doit avoir le même style que la bannière : fond blanc, titres bleu marine très gras,
pastille verte pour le service principal, panneau bleu très clair avec motif de points,
cartes blanches arrondies avec ombre douce.

Toutes les couleurs passent par des **variables SCSS**, définies dans un seul fichier
`src/styles/_colors.scss`. Aucune couleur en dur ailleurs dans le code (ni hexadécimal, ni rgb, ni nom de couleur) :
pour changer le code couleur du site, il doit suffire de modifier ce fichier.

```scss
// src/styles/_colors.scss — seule source des couleurs du site

// Palette de marque
$color-primary:          #0b2540; // bleu marine : titres, bouton principal
$color-primary-hover:    #152e47; // survol du bouton principal
$color-secondary:        #1d6fe0; // bleu vif : liens, icônes, email
$color-secondary-dark:   #1550a8; // texte des badges sur fond bleu clair
$color-accent:           #2dd4a0; // vert menthe : pastille « Automatisation », coches, indicateurs
$color-accent-light:     #abedd9; // halo autour des points verts, fonds légers
$color-accent-dark:      #065f46; // texte vert lisible (« En cours »)

// Neutres
$color-background:       #ffffff; // fond principal
$color-background-alt:   #e4f1fd; // panneau bleu très clair (sections alternées, motif de points)
$color-surface:          #ffffff; // cartes
$color-text:             #1e293b; // texte courant
$color-text-muted:       #475569; // sous-titres, texte secondaire, intitulés en majuscules
$color-border:           #e2e8f0; // séparateurs des cartes (valeur proposée, à ajuster)

// Dégradé du fond de la photo (pour un éventuel arrière-plan de section « À propos »)
$color-gradient-blue:    #bddcf0;
$color-gradient-mint:    #bfece7;

// États
$color-success:          $color-accent;
$color-error:            #dc2626; // absent de la bannière, valeur proposée
```

Contraste : texte bleu marine sur la pastille verte = OK ; **texte blanc sur le vert = illisible, à éviter**.
Le vert sert aux pastilles et indicateurs, pas au texte (utiliser `$color-accent-dark` pour du texte vert).

Règles :
- Les composants importent ce fichier (`@use 'styles/colors' as *;`) ; pas de nouvelle couleur sans l'ajouter ici d'abord.
- Exposer aussi ces variables en propriétés CSS (`:root { --color-primary: #{$color-primary}; ... }`)
  pour pouvoir ajouter un mode sombre plus tard sans tout réécrire.
- Vérifier le contraste texte/fond (niveau WCAG AA minimum).
- Si Tailwind est utilisé, sa configuration doit lire ces mêmes valeurs (via les propriétés CSS), jamais les redéfinir.

## Sections attendues
Accueil (accroche + appel à l'action), Services, Études de cas, Méthode de travail
(cadrage → première version en 2–3 semaines → itérations), À propos, Contact.

## Choix techniques
- À décider avec moi au démarrage : Next.js + Tailwind (comme le site d'inspiration)
  ou Angular (ma stack principale). Proposer les deux options avec leurs avantages avant de coder.
- Hébergement : **pas Vercel**. Options : Netlify, Cloudflare Pages ou VPS avec Docker.
- Site statique si possible (rapide, peu coûteux), bon référencement (SEO), responsive.

## À compléter par moi
- [ ] Nom de domaine
- [ ] Lien LinkedIn / Malt / GitHub
- [x] Email de contact : hayotcamille@gmail.com (bouton principal « Contactez-moi, on discute »)
- [ ] Autres moyens de contact (formulaire, WhatsApp) ?

## Contact
Mobile : 0695698274
email : hayotcamille@gmail.com
linkedin : https://www.linkedin.com/in/camille-hayot-a77589148/
matl : https://www.malt.fr/profile/camillehayot1