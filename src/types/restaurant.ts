export type Language = 'fr' | 'en';

export type MenuCategory = 'all' | 'sushi' | 'plateaux' | 'nouilles' | 'cocktails';

export type FulfillmentMode = 'delivery' | 'takeaway' | 'dinein';

export type DishVisualType =
  | 'california'
  | 'crispy'
  | 'dragon'
  | 'nigiri'
  | 'spicy_tuna'
  | 'box_solo'
  | 'plateau_duo'
  | 'plateau_famille'
  | 'nouilles_legumes'
  | 'nouilles_poulet'
  | 'nouilles_crevettes'
  | 'gyoza'
  | 'cocktail_fruits'
  | 'cocktail_exotique'
  | 'matcha_glace';

export interface MenuItem {
  id: string;
  category: Exclude<MenuCategory, 'all'>;
  visual: DishVisualType;
  priceMad: number;
  pieces?: number;
  popular?: boolean;
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
  item: MenuItem;
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
