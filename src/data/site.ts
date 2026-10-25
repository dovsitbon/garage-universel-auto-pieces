// Toutes les données du commerce au même endroit.
// Modifier ici = modifié partout (en-tête, pied de page, JSON-LD, pages).

export const TBC = '[À CONFIRMER]';

export const site = {
  name: 'Garage Universel Auto Pièces',
  shortName: 'Garage Universel',
  url: 'https://garage-universel-auto-pieces.vercel.app',
  street: '8 route de Calais',
  postalCode: '95410',
  city: 'Groslay',
  region: "Val-d'Oise",
  phone: '01 39 83 10 56',
  phoneHref: 'tel:+33139831056',
  phoneIntl: '+33 1 39 83 10 56',
  siren: '812 263 341',
  // Numéro d'agrément VHU : à vérifier sur la liste préfectorale avant de l'afficher.
  vhuAgrement: TBC,
  // Délai de réponse aux formulaires annoncé au client.
  responseDelay: TBC,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Garage+Universel+Auto+Pi%C3%A8ces+8+route+de+Calais+95410+Groslay',
  mapsEmbed:
    'https://www.google.com/maps?q=8+route+de+Calais,+95410+Groslay&output=embed',
  // Réseaux sociaux : aucun profil vérifié pour l'instant.
  sameAs: [] as string[],
  google: { rating: '3,8', count: '115' },
  payments: 'Carte bancaire, sans contact',
  accessibility: 'Entrée et parking accessibles en fauteuil roulant',
  neighbours: [
    'Montmorency',
    'Saint-Brice-sous-Forêt',
    'Sarcelles',
    'Deuil-la-Barre',
    'Montmagny',
    'Domont',
    'Ézanville',
  ],
};

// Clé Web3Forms (gratuite, https://web3forms.com). Tant qu'elle vaut TBC,
// les formulaires affichent un message invitant à appeler.
export const WEB3FORMS_KEY = TBC;

// Horaires. day : 0 = dimanche … 6 = samedi (convention JavaScript).
export const hours = [
  { day: 1, label: 'Lundi', open: '09:00', close: '18:00' },
  { day: 2, label: 'Mardi', open: '09:00', close: '18:00' },
  { day: 3, label: 'Mercredi', open: '09:00', close: '18:00' },
  { day: 4, label: 'Jeudi', open: '09:00', close: '18:00' },
  { day: 5, label: 'Vendredi', open: '09:00', close: '18:00' },
  { day: 6, label: 'Samedi', open: null, close: null },
  { day: 0, label: 'Dimanche', open: '09:00', close: '18:00' },
] as const;

export const reviews = [
  'Un coup de fil, un rétro changé, très rapide, super casse. Je recommande fortement.',
  'Équipe au top, professionnelle et honnête. Le responsable est super sympa, prix ultra compétitifs.',
  'Voiture prise en charge rapidement. Crédité directement sur place avec papiers administratifs faits dans la minute.',
  'Très bien reçu, bonne qualité du produit, prix très raisonnable et prestation très rapide.',
];

export const faq = [
  {
    q: 'Les pièces d’occasion sont-elles garanties ?',
    a: `Durée et conditions de garantie : ${TBC}. Demandez-les au comptoir ou par téléphone avant l’achat.`,
  },
  {
    q: 'Puis-je échanger une pièce qui ne convient pas ?',
    a: `Conditions d’échange ou de retour : ${TBC}. Gardez votre ticket et apportez la pièce dans l’état où vous l’avez reçue.`,
  },
  {
    q: 'Les pièces sont-elles testées avant la vente ?',
    a: `Méthode de contrôle des pièces : ${TBC}. Pour aller plus vite, donnez-nous la motorisation exacte (elle figure sur la carte grise, rubrique P).`,
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Carte bancaire et paiement sans contact. Autres moyens (espèces, virement pour les professionnels) : ' + TBC + '.',
  },
  {
    q: 'L’enlèvement de mon épave est-il gratuit ?',
    a: `Gratuité et zone d’enlèvement à domicile : ${TBC}. Décrivez le véhicule dans le formulaire « véhicule », on vous rappelle avec une réponse précise.`,
  },
  {
    q: 'Est-ce que vous rachetez ma voiture ?',
    a: `Oui, une voiture peut être reprise. Le montant dépend du véhicule (modèle, état, roulant ou non) : il vous est annoncé après description ou passage sur place. Barème : ${TBC}.`,
  },
  {
    q: 'Que se passe-t-il pour la carte grise après la destruction ?',
    a: 'Un centre VHU agréé vous remet un certificat de destruction et se charge de déclarer la destruction : le véhicule ne vous est plus imputable. Gardez ce certificat.',
  },
  {
    q: 'Êtes-vous ouverts le samedi ?',
    a: 'Non. Nous sommes fermés le samedi et ouverts le dimanche, de 9 h à 18 h, comme du lundi au vendredi.',
  },
];
