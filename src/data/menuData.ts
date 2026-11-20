import { CustomerReview, MenuItem } from '../types/restaurant';

export const BUSINESS_INFO = {
  name: 'Kawasushi',
  ownerBrand: 'Kawa Sushi – Meknès',
  rating: '4,9',
  ratingNumeric: 4.9,
  reviewCount: 21,
  priceRange: '50–150 MAD',
  address: 'TR/A 50050, Riad Ismailia, Im. 508 Mag. 4, Meknès 50000',
  plusCode: 'VC5M+2P Meknès',
  phoneDisplay: '07 19 26 02 51',
  phoneHref: 'tel:+212719260251',
  whatsappNumber: '212719260251',
  hoursFr: 'Ouvert tous les jours · Ferme à 00:00',
  hoursEn: 'Open daily · Closes at 00:00',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kawasushi+Riad+Ismailia+Meknes+VC5M%2B2P',
  glovoUrl: 'https://glovoapp.com',
  freeDeliveryThresholdMad: 200,
  deliveryFeeMad: 15,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'nouilles-legumes',
    category: 'nouilles',
    visual: 'nouilles_legumes',
    priceMad: 65,
    popular: true,
    tag: { fr: 'Plat populaire', en: 'Popular dish' },
    name: {
      fr: 'Nouilles Sautées Aux Légumes',
      en: 'Stir-Fried Vegetable Noodles',
    },
    description: {
      fr: 'Nouilles fraîches sautées au wok, julienne de légumes croquants de saison, shiitakés, sauce soja artisanale et sésame grillé.',
      en: 'Fresh wok-tossed noodles with crisp seasonal vegetables, shiitake mushrooms, artisan soy glaze, and toasted sesame.',
    },
  },
  {
    id: 'cocktail-fruits',
    category: 'cocktails',
    visual: 'cocktail_fruits',
    priceMad: 35,
    popular: true,
    tag: { fr: 'Boisson populaire', en: 'Popular drink' },
    name: {
      fr: 'Cocktail Aux Fruits Frais',
      en: 'Fresh Fruit Cocktail',
    },
    description: {
      fr: 'Assemblage pressé minute de fruits de saison, mangue, fraise, agrumes et feuilles de menthe fraîche.',
      en: 'Freshly pressed blend of seasonal fruits, mango, strawberry, citrus, and crisp garden mint.',
    },
  },
  {
    id: 'plateau-duo',
    category: 'plateaux',
    visual: 'plateau_duo',
    priceMad: 195,
    pieces: 28,
    popular: true,
    tag: { fr: 'Idéal à partager', en: 'Best for sharing' },
    name: {
      fr: 'Plateau Duo Kawasushi',
      en: 'Kawasushi Duo Platter',
    },
    description: {
      fr: '28 pièces préparées à la minute : 8 Dragon Rolls, 8 Crispy Ebi Tempura, 8 California Saumon et 4 Nigiri Saumon.',
      en: '28 pieces made to order: 8 Dragon Rolls, 8 Crispy Ebi Tempura, 8 Salmon California, and 4 Salmon Nigiri.',
    },
  },
  {
    id: 'california-saumon',
    category: 'sushi',
    visual: 'california',
    priceMad: 65,
    pieces: 8,
    name: {
      fr: 'California Saumon Avocat',
      en: 'Salmon Avocado California',
    },
    description: {
      fr: 'Saumon frais, avocat fondant, fromage frais et graines de sésame dorées sur riz vinaigré.',
      en: 'Fresh salmon, ripe avocado, cream cheese, and toasted sesame seeds over seasoned sushi rice.',
    },
  },
  {
    id: 'crispy-ebi',
    category: 'sushi',
    visual: 'crispy',
    priceMad: 75,
    pieces: 8,
    tag: { fr: 'Croustillant', en: 'Crispy favorite' },
    name: {
      fr: 'Crispy Ebi Tempura',
      en: 'Crispy Ebi Tempura Roll',
    },
    description: {
      fr: 'Crevette tempura dorée, avocat, concombre croquant, enrobage croustillant et sauce teriyaki maison.',
      en: 'Golden shrimp tempura, avocado, crisp cucumber, crunchy panko coating, and house teriyaki glaze.',
    },
  },
  {
    id: 'dragon-roll',
    category: 'sushi',
    visual: 'dragon',
    priceMad: 85,
    pieces: 8,
    tag: { fr: 'Signature', en: 'Signature' },
    name: {
      fr: 'Dragon Roll Avocat Crevette',
      en: 'Avocado Shrimp Dragon Roll',
    },
    description: {
      fr: 'Crevette panée et fromage frais, drapé de fines tranches d’avocat, sauce unagi et sésame.',
      en: 'Crispy shrimp and cream cheese topped with thin avocado slices, unagi glaze, and sesame.',
    },
  },
  {
    id: 'nigiri-saumon',
    category: 'sushi',
    visual: 'nigiri',
    priceMad: 70,
    pieces: 6,
    name: {
      fr: 'Nigiri Saumon Frais',
      en: 'Fresh Salmon Nigiri',
    },
    description: {
      fr: 'Six tranches généreuses de saumon frais découpées au couteau sur coussin de riz tiède assaisonné.',
      en: 'Six hand-sliced cuts of fresh salmon resting over gently seasoned sushi rice.',
    },
  },
  {
    id: 'spicy-tuna',
    category: 'sushi',
    visual: 'spicy_tuna',
    priceMad: 70,
    pieces: 8,
    name: {
      fr: 'Spicy Tuna Maki',
      en: 'Spicy Tuna Maki',
    },
    description: {
      fr: 'Thon rouge frais, mayonnaise épicée japonaise, ciboulette fine et pointe de sriracha.',
      en: 'Fresh tuna, Japanese spicy mayo, finely chopped chives, and a balanced chili kick.',
    },
  },
  {
    id: 'box-solo',
    category: 'plateaux',
    visual: 'box_solo',
    priceMad: 110,
    pieces: 14,
    name: {
      fr: 'Box Découverte Solo',
      en: 'Solo Discovery Box',
    },
    description: {
      fr: '14 pièces équilibrées : 6 California saumon avocat, 4 Crispy Ebi et 4 Nigiri saumon, avec gingembre et wasabi.',
      en: '14 balanced pieces: 6 Salmon Avocado California, 4 Crispy Ebi, and 4 Salmon Nigiri with ginger and wasabi.',
    },
  },
  {
    id: 'plateau-famille',
    category: 'plateaux',
    visual: 'plateau_famille',
    priceMad: 290,
    pieces: 44,
    tag: { fr: 'Grand format', en: 'Family size' },
    name: {
      fr: 'Grand Plateau Famille',
      en: 'Grand Family Platter',
    },
    description: {
      fr: '44 pièces pour 3 à 4 personnes : assortiment complet de makis signatures, rolls croustillants, nigiris et sashimis.',
      en: '44 pieces for 3–4 guests: complete selection of signature rolls, crispy makis, nigiri, and sashimi.',
    },
  },
  {
    id: 'nouilles-poulet',
    category: 'nouilles',
    visual: 'nouilles_poulet',
    priceMad: 80,
    name: {
      fr: 'Nouilles Sautées Poulet Teriyaki',
      en: 'Teriyaki Chicken Noodles',
    },
    description: {
      fr: 'Émincé de poulet mariné caramélisé au teriyaki, nouilles udon sautées, poivrons, carottes et oignons verts.',
      en: 'Caramelized teriyaki chicken strips tossed with udon noodles, bell peppers, carrots, and scallions.',
    },
  },
  {
    id: 'nouilles-crevettes',
    category: 'nouilles',
    visual: 'nouilles_crevettes',
    priceMad: 95,
    name: {
      fr: 'Nouilles Sautées Crevettes & Gingembre',
      en: 'Ginger Shrimp Noodles',
    },
    description: {
      fr: 'Crevettes saisies au wok avec gingembre frais, ail doux, légumes croquants et sauce huître-soja.',
      en: 'Wok-seared shrimp with fresh ginger, sweet garlic, crisp vegetables, and savory soy reduction.',
    },
  },
  {
    id: 'gyoza-poulet',
    category: 'nouilles',
    visual: 'gyoza',
    priceMad: 55,
    pieces: 6,
    name: {
      fr: 'Gyoza Poulet Grillés',
      en: 'Pan-Seared Chicken Gyoza',
    },
    description: {
      fr: 'Six raviolis japonais dorés à la poêle, farce poulet et ciboulette, servis avec sauce ponzu sésame.',
      en: 'Six crisp pan-seared Japanese dumplings filled with chicken and chives, served with sesame ponzu.',
    },
  },
  {
    id: 'cocktail-exotique',
    category: 'cocktails',
    visual: 'cocktail_exotique',
    priceMad: 40,
    name: {
      fr: 'Cocktail Exotique Mangue Passion',
      en: 'Mango Passion Exotic Cocktail',
    },
    description: {
      fr: 'Purée de mangue mûre, pulpe de fruit de la passion et zeste de citron vert sur glace pilée.',
      en: 'Ripe mango purée, passionfruit pulp, and fresh lime zest over crushed ice.',
    },
  },
  {
    id: 'matcha-glace',
    category: 'cocktails',
    visual: 'matcha_glace',
    priceMad: 30,
    name: {
      fr: 'Thé Vert Matcha Glacé Citron',
      en: 'Iced Yuzu-Lemon Matcha',
    },
    description: {
      fr: 'Infusion fraîche de thé vert japonais matcha battu, filet de citron jaune et sirop léger de canne.',
      en: 'Cold whisked Japanese green matcha tea balanced with fresh lemon juice and light cane syrup.',
    },
  },
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'maha-review',
    author: 'Maha jaouhari tissafi',
    meta: { fr: '6 avis · 4 photos', en: '6 reviews · 4 photos' },
    date: { fr: 'Il y a 2 mois', en: '2 months ago' },
    rating: 5,
    quote:
      'Une magnifique expérience ! Tout était parfait : la nourriture, la qualité des plats et le service. Les personnes sont très accueillantes, gentilles et professionnelles. Un vrai plaisir, je recommande vivement !',
  },
  {
    id: 'nezha-review',
    author: 'Nezha Lymani',
    meta: { fr: '1 avis · 3 photos', en: '1 review · 3 photos' },
    date: { fr: 'Il y a 1 mois', en: '1 month ago' },
    rating: 5,
    quote:
      "Meilleur restaurant de sushi à Meknès ! J'ai testé Kawasushi et je suis conquise. Produits très frais, goût exquis et carte variée. Le rapport qualité / prix est excellent. L'équipe est professionnelle et aux petits soins. Une adresse incontournable à Meknès, j'y reviendrai avec plaisir !",
  },
];

export const RATING_DISTRIBUTION = [
  { stars: 5, percent: 95, count: 20 },
  { stars: 4, percent: 5, count: 1 },
  { stars: 3, percent: 0, count: 0 },
  { stars: 2, percent: 0, count: 0 },
  { stars: 1, percent: 0, count: 0 },
];
