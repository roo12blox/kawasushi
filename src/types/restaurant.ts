export type Language = 'fr' | 'en';

export type MenuCategory =
  | 'all'
  | 'poke_tartare'
  | 'soupes_crispy'
  | 'rolls_maki'
  | 'sashimi_pizza_fry'
  | 'assortiments'
  | 'wok'
  | 'desserts_drinks';

export type FulfillmentMode = 'delivery' | 'takeaway' | 'dinein';

export type DishVisualType =
  | 'poke_for_you'
  | 'poke_kawa'
  | 'tartare_saumon'
  | 'tartare_gambas'
  | 'soupe_poisson'
  | 'soupe_chinoise'
  | 'cali_spicy'
  | 'cali_flambee'
  | 'cali_cream_cheese'
  | 'cali_saumon_avocat'
  | 'cali_saumon_cheese'
  | 'cali_ebi_fry'
  | 'cali_saumon_cuit'
  | 'kawa_creamy_yuzu'
  | 'kawa_gambas'
  | 'kawa_saumon_cuit'
  | 'maki_saumon'
  | 'maki_avocat'
  | 'maki_gambas'
  | 'maki_mangue'
  | 'maki_surimi'
  | 'maki_saumon_cheese'
  | 'maki_concombre'
  | 'maki_saumon_avocat'
  | 'sashimi_saumon'
  | 'sashimi_flambed'
  | 'futo_saumon'
  | 'futo_gambas'
  | 'futo_vege'
  | 'pizza_mozza'
  | 'pizza_cuit'
  | 'pizza_frais'
  | 'fry_yummy'
  | 'fry_salmon'
  | 'fry_pop'
  | 'crispy_boulettes'
  | 'crispy_nems'
  | 'crispy_gambas'
  | 'assort_fresh'
  | 'assort_fry'
  | 'assort_b'
  | 'assort_c'
  | 'assort_d'
  | 'assort_e'
  | 'assort_f'
  | 'wok_poulet'
  | 'wok_boeuf'
  | 'wok_gambas'
  | 'wok_mixte'
  | 'wok_vege'
  | 'crousty_chicken'
  | 'dessert_nutella_banane'
  | 'dessert_banoffee'
  | 'mocktail_citron_gingembre'
  | 'mocktail_sakura'
  | 'mocktail_matcha'
  | 'mocktail_mojito'
  | 'mocktail_orange'
  | 'drink_soda'
  | 'drink_eau'
  | 'drink_cafe'
  | 'drink_ice_latte';

export interface MenuItem {
  id: string;
  category: Exclude<MenuCategory, 'all'>;
  subCategory: {
    fr: string;
    en: string;
  };
  visual: DishVisualType;
  priceMad: number;
  pieces?: number;
  popular?: boolean;
  baseOptions?: {
    fr: string[];
    en: string[];
  };
  tag?: {
    fr: string;
    en: string;
  };
  name: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
}

export interface CartItem {
  cartKey: string;
  item: MenuItem;
  selectedBase?: string;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  meta: {
    fr: string;
    en: string;
  };
  date: {
    fr: string;
    en: string;
  };
  rating: number;
  quote: string;
}
