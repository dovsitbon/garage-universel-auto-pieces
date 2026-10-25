# Photos à prendre chez Garage Universel Auto Pièces

Aucune photo Google Maps / Facebook / Instagram ne doit être utilisée (droits des clients et du commerce). Le site fonctionne sans photo grâce aux blocs couleur (portes kraft/verte, casiers). Les photos ci-dessous viendront les enrichir.

Réglages communs : téléphone récent, mode photo standard (pas portrait), lumière du jour, pas de flash, horizon droit, fichiers JPEG d'origine (on convertit en AVIF/WebP au build via `astro:assets`). Pas de plaque d'immatriculation lisible, pas de visage sans accord.

| # | Sujet | Cadrage | Lumière | Format | Où elle ira |
|---|---|---|---|---|---|
| 1 | Rayonnage de pièces rangées (étagères, casiers, étiquettes) | De face, à hauteur d'yeux, rayonnage qui remplit le cadre | Matin, lumière diffuse | Paysage 3:2, ≥ 2400 px | Porte « Je cherche une pièce » (accueil) |
| 2 | Détail d'étiquette / référence sur une pièce (rétroviseur, phare) | Gros plan, étiquette nette, fond flou | Lumière douce latérale | Carré 1:1 | Casier A1 « réemploi » |
| 3 | Entrée du site depuis la route de Calais (portail, enseigne) | Depuis le trottoir d'en face, enseigne lisible | Après-midi, soleil dans le dos | Paysage 16:9 | Page Accès, casier B2 |
| 4 | Parking et entrée accessible (fauteuil) | Large, montre le cheminement de plain-pied | Lumière du jour | Paysage 3:2 | Page Accès, rubrique « Sur place » |
| 5 | Comptoir d'accueil / terminal CB | Plan moyen, comptoir rangé, sans personne ou avec accord | Intérieur, lumières allumées | Paysage 3:2 | Page Pièces (encart téléphone) |
| 6 | Aire de dépollution / démontage propre (VHU) | Plan large, sol propre, outillage rangé | Lumière du jour | Paysage 16:9 | Page Épave, en tête |
| 7 | Dépanneuse / plateau d'enlèvement (si enlèvement confirmé) | Trois-quarts avant, logo visible si existant | Extérieur, ciel couvert idéal | Paysage 3:2 | Page Épave, étape 2 |
| 8 | Le responsable (avec son accord écrit) | Buste, devant le rayonnage, regard caméra | Lumière douce | Portrait 4:5 | Casier B1 avis, ou A2 |

Déposer les fichiers dans `src/assets/photos/` (dossier à créer) et les intégrer avec le composant `<Image>` d'`astro:assets` (`loading="lazy"` sauf la première image visible).
