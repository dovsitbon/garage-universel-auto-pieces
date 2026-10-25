# Prompt Claude Code : site « Garage Universel Auto Pièces » (centre VHU agréé, Groslay)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet de **Garage Universel Auto Pièces**, casse automobile et **centre VHU agréé** sur la route de Calais à Groslay. Objectif business : deux flux de clients → (1) les particuliers et garagistes qui cherchent une **pièce d'occasion**, (2) les propriétaires qui veulent **se débarrasser d'une épave / faire racheter leur voiture** avec certificat de destruction. Le site doit aussi faire baisser la pression sur le téléphone (souvent saturé d'après les avis) grâce à des formulaires.

## Fiche d'identité (informations vérifiées)
- **Nom** : Garage Universel Auto Pièces (anciennement « Virus Automobiles Recyclage » selon un annuaire)
- **Type** : casse automobile / démantèlement d'épaves, vente de pièces détachées d'occasion, **centre VHU agréé par la préfecture** (n° d'agrément `[À CONFIRMER]` : les annuaires indiquent PR 95 00020 D ou PR 95 00024 D, à vérifier sur la liste préfectorale avant de l'afficher)
- **Adresse** : 8 route de Calais, 95410 Groslay
- **Téléphone** : 01 39 83 10 56
- **Horaires** : dimanche au vendredi : 09h00–18h00 · **samedi : fermé**
- **SIREN** : 812 263 341
- **Note Google** : 3,8/5 sur ~115 avis
- **Partenaires** : un client cite une prise en charge via **GoodbyeCar** (rachat de véhicule, crédité sur place, papiers faits dans la minute)
- **Accessibilité** : entrée et parking accessibles en fauteuil roulant
- **Paiements** : CB, sans contact
- **Schema.org** : `AutoPartsStore` + `RecyclingCenter`

## Ce que disent les clients
Positif : rapidité (« un coup de fil, un rétro changé »), prix ultra compétitifs, responsable sympathique et honnête, bons renseignements, prise en charge d'épave rapide avec papiers faits sur place. Négatif : accueil téléphonique, messagerie saturée.
→ Formulaires en ligne pour les deux flux + délai de réponse annoncé `[À CONFIRMER]`.

Extraits d'avis utilisables (« Avis Google ») :
- « Un coup de fil, un rétro changé, très rapide, super casse. Je recommande fortement. »
- « Équipe au top, professionnelle et honnête. Le responsable est super sympa, prix ultra compétitifs. »
- « Voiture prise en charge rapidement. Crédité directement sur place avec papiers administratifs faits dans la minute. »
- « Très bien reçu, bonne qualité du produit, prix très raisonnable et prestation très rapide. »

## Direction artistique
- Inspiration : **recyclage, économie circulaire, atelier de démontage ordonné** : casiers numérotés, étiquettes kraft, flèches de recyclage, vert et acier. Montrer qu'une casse peut être propre et organisée.
- Palette : vert profond « recyclage » (#1F5C3A ou proche), acier/gris bleuté, kraft, blanc ; accent orange sécurité.
- Typo : une sans technique (ex. IBM Plex Sans / Space Grotesk) + une mono pour les références, numéros, agrément.
- Idée signature : un **compteur visuel « pièce réemployée = pièce non fabriquée »** (texte pédagogique, sans chiffre inventé) et des sections présentées comme des **casiers numérotés** de magasin de pièces.

## Structure
1. **Accueil** : « Pièces auto d'occasion et centre VHU agréé à Groslay », deux gros boutons : « Je cherche une pièce » / « Je veux me débarrasser de mon véhicule », statut ouvert/fermé (rappel : fermé le samedi, ouvert le dimanche).
2. **Je cherche une pièce** : formulaire (marque, modèle, année, motorisation, pièce, téléphone, consentement RGPD) + bouton appel.
3. **Enlèvement d'épave / rachat de véhicule** : étapes, documents à fournir (carte grise, pièce d'identité, certificat de non-gage… `[À CONFIRMER]`), **certificat de destruction** délivré par un centre VHU agréé, enlèvement à domicile `[À CONFIRMER]`, formulaire (marque, modèle, état, roulant ou non, code postal, téléphone).
4. **Pourquoi l'occasion** : prix, rapidité, réemploi (pédagogique, sans chiffres inventés).
5. **Agrément & sérieux** : centre VHU agréé (numéro `[À CONFIRMER]`), SIREN, adresse.
6. **Avis** : 4 extraits.
7. **Infos pratiques** : horaires, accès route de Calais / RN1, carte.
8. **FAQ** : garantie, échange, test des pièces, paiement, enlèvement gratuit ? → `[À CONFIRMER]`.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
