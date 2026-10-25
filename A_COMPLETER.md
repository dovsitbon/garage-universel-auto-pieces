# À compléter avant mise en ligne définitive

Chaque point apparaît sur le site sous la forme d'un marqueur jaune `[À CONFIRMER]`. La plupart se changent dans `src/data/site.ts`.

## Obligatoire / légal
- [ ] **Numéro d'agrément VHU** (`site.vhuAgrement` dans `src/data/site.ts`). Les annuaires citent PR 95 00020 D ou PR 95 00024 D : vérifier sur la liste préfectorale du Val-d'Oise avant de l'afficher. Il apparaît sur l'accueil (casier A2), la page Épave et les mentions légales.
- [ ] **SIRET** (le SIREN 812 263 341 est affiché) : `src/pages/mentions-legales.astro`
- [ ] **Forme juridique** et **directeur de la publication** : `src/pages/mentions-legales.astro`
- [ ] **E-mail de contact** pour les demandes RGPD : `src/pages/confidentialite.astro`
- [ ] **Durée de conservation** des demandes (proposition : 12 mois) : `src/pages/confidentialite.astro`

## Formulaires
- [ ] **Clé Web3Forms** (`WEB3FORMS_KEY` dans `src/data/site.ts`). Créer une clé gratuite sur web3forms.com avec l'adresse e-mail du garage. Tant qu'elle n'est pas renseignée, les formulaires affichent « L'envoi en ligne n'est pas encore activé, appelez le 01 39 83 10 56 ».
- [ ] **Délai de réponse annoncé** (`site.responseDelay`), ex. « 24 h ouvrées ».

## Contenu commercial
- [ ] Tarifs / fourchettes de prix au comptoir (accueil, casier A1)
- [ ] Envoi postal des pièces : oui / non (page Pièces, étape 3)
- [ ] Garantie des pièces : durée et conditions (FAQ)
- [ ] Échange / retour : conditions (FAQ)
- [ ] Contrôle des pièces avant vente : méthode (FAQ)
- [ ] Autres moyens de paiement que CB / sans contact (FAQ)
- [ ] Enlèvement à domicile : oui / non, gratuit ou non, zone couverte (page Épave + FAQ)
- [ ] Barème ou principe du rachat de véhicule (page Épave + FAQ)
- [ ] Liste exacte des documents demandés pour une destruction (accueil + page Épave)
- [ ] Ouverture les jours fériés (page Accès)

## Partenaires
- [ ] **GoodbyeCar** : un avis client cite une prise en charge via GoodbyeCar. Le site ne le mentionne PAS. À ajouter seulement si le partenariat est confirmé par le garage.
- [ ] Ancien nom « Virus Automobiles Recyclage » (vu dans un annuaire) : non affiché. À confirmer avant de l'ajouter (utile pour le référencement si c'est exact).

## SEO / données structurées
- [ ] **Coordonnées GPS** (latitude/longitude) du 8 route de Calais : non inventées, donc absentes du JSON-LD (`src/layouts/Base.astro`, ajouter `geo`).
- [ ] **Réseaux sociaux / fiche Google** : URLs à mettre dans `site.sameAs` (`src/data/site.ts`).
- [ ] Note Google (3,8/5, ~115 avis) : à mettre à jour de temps en temps (`site.google`).
- [ ] Nom de domaine définitif : remplacer `garage-universel-auto-pieces.vercel.app` dans `astro.config.mjs`, `src/data/site.ts`, `public/robots.txt`, `public/llms.txt`.

## Photos
- [ ] Aucune photo n'est intégrée (voir `PHOTOS_A_PRENDRE.md`).
