# Garage Universel Auto Pièces : site vitrine

Astro 7 + Tailwind CSS 4, site statique. Polices IBM Plex Sans / Plex Mono auto-hébergées.

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:4321
```

## Build et vérification
```bash
npm run build      # génère dist/
npm run preview    # sert dist/
npm run captures   # captures pleine page 390 px et 1440 px dans captures/ (port 4402)
npm run og         # régénère public/og.png (image de partage)
```

## Déployer
Projet Vercel importé depuis le dépôt Git : Astro statique est détecté automatiquement (aucun `vercel.json`). Chaque push sur `main` redéploie. Penser à mettre l'URL définitive dans `astro.config.mjs` (`site`) et `src/data/site.ts` (`url`).

## Où changer quoi
- **Nom, adresse, téléphone, SIREN, agrément VHU, délai de réponse, clé de formulaire, note Google** : `src/data/site.ts`
- **Horaires** (tableaux + statut Ouvert/Fermé + JSON-LD) : tableau `hours` dans `src/data/site.ts`
- **Avis et FAQ** : `reviews` et `faq` dans `src/data/site.ts`
- **Textes des pages** : `src/pages/*.astro` (accueil = `index.astro`)
- **Couleurs, polices** : `src/styles/global.css` (bloc `@theme`)
- **Photos** : voir `PHOTOS_A_PRENDRE.md`, à déposer dans `src/assets/photos/`
- **Formulaires** : envoi par Web3Forms (`src/scripts/forms.ts`), clé dans `src/data/site.ts`

Ce qui reste à confirmer : `A_COMPLETER.md`. Choix de design : `DIRECTION.md`.
