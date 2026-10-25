# Direction — Garage Universel Auto Pièces (site 02)

## Angle
Le magasin de pièces ordonné : une casse de la route de Calais présentée comme un rayonnage de casiers numérotés à étiquettes kraft, pour montrer qu'une casse peut être propre, rangée et rapide.

## Palette
| Rôle | Hex |
|---|---|
| Papier / fond | `#EFE7D8` |
| Kraft (étiquettes, porte « pièce ») | `#CDAE7E` |
| Vert recyclage (porte « véhicule », titres, liens) | `#1F5C3A` |
| Vert foncé (texte sur kraft, fond pied de page) | `#123522` |
| Acier / gris bleuté (cadres de casiers, texte secondaire) | `#4B5C66` |
| Encre (texte courant) | `#1A1F1C` |
| Orange sécurité (pastille d'état, poignées, focus) | `#C2461A` |
| Blanc (champs de formulaire) | `#FFFFFF` |

## Polices
- Titres : IBM Plex Sans 600 (casse normale, pas de capitales forcées)
- Texte : IBM Plex Sans 400
- Références, numéros de casier, SIREN, horaires, téléphone : IBM Plex Mono 500

## Structure de l'accueil (ordre)
1. Bandeau fin : adresse + téléphone + statut Ouvert/Fermé (calculé, Europe/Paris)
2. H1 « Pièces auto d'occasion et centre VHU agréé à Groslay » + écran partagé en **deux portes égales** : à gauche porte kraft « Je cherche une pièce », à droite porte verte « Je me débarrasse de mon véhicule » (chacune avec ce qu'il faut préparer et le lien vers son formulaire)
3. **Grille de tiroirs** : le reste de l'accueil est un meuble à casiers. Chaque section est un tiroir avec sa plaque kraft de référence (A1, A2, B1…) et une poignée :
   - A1 Pourquoi l'occasion (+ l'équation signature « pièce réemployée = pièce non fabriquée »)
   - A2 Agrément & sérieux (VHU [À CONFIRMER], SIREN en mono, adresse)
   - B1 Avis Google (4 extraits, note 3,8/5)
   - B2 Infos pratiques (horaires en tableau mono, accès RN1, carte au clic)
   - C1 Questions fréquentes (extrait, lien FAQ)
4. Pied de page vert foncé : NAP, horaires, liens légaux.

## Élément graphique signature
La **plaque de casier** : un porte-étiquette acier vissé (deux rivets) avec une étiquette kraft en IBM Plex Mono (« CASIER A1 · RÉEMPLOI »), posé sur chaque tiroir-section, plus la poignée orange sécurité en bas du tiroir. Une seule pièce graphique répétée, rien d'autre de décoratif. Le bloc pédagogique « pièce réemployée = pièce non fabriquée » est composé comme une étiquette de pièce (référence, flèche de retour en boucle dessinée en SVG maison).

## Ce qui le distingue des 6 autres
- 01 MSA (même route) : jaune/noir signalétique, Barlow Condensed en capitales, panneau routier. Ici : kraft + vert, Plex Sans en casse normale, aucune bande jaune, aucun panneau ; le premier écran est une porte double, pas un formulaire.
- 03 Porte Bonheur : crème + rouge laque, Fraunces, menu à pointillés. Ici : pas de serif, pas de rouge, la numérotation renvoie à un emplacement de stock, pas à un plat.
- 04 Mon Auto : beige sable + bleu nuit, Sora, fiches carnet et « 5,0 » géant. Ici : pas de chiffre géant, la note est donnée petite et honnête (3,8).
- 05 O Conquistador : bleu cobalt, azulejos, italique. 06 De Grapp'En Verre : ardoise, affiches. 07 Bel Air : nuit + laiton, générique de film. Aucun de ces registres ici : pas de texture, pas de fond sombre plein écran, pas d'animation d'ouverture.
