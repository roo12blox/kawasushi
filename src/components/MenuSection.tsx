import React, { useMemo, useState } from 'react';
import { Minus, Plus, Search, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/menuData';
import { CartItem, FulfillmentMode, Language, MenuCategory, MenuItem } from '../types/restaurant';
import { DishArtCard } from './DishVisual';

interface MenuSectionProps {
  lang: Language;
  cart: CartItem[];
  fulfillment: FulfillmentMode;
  onChangeFulfillment: (mode: FulfillmentMode) => void;
  onAddItem: (item: MenuItem) => void;
  onUpdateQty: (itemId: string, delta: number) => void;
  onAddDuoFormule: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  lang,
  cart,
  fulfillment,
  onChangeFulfillment,
  onAddItem,
  onUpdateQty,
  onAddDuoFormule,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; labelFr: string; labelEn: string }[] = [
    { id: 'all', labelFr: 'Toute la carte', labelEn: 'All dishes' },
    { id: 'sushi', labelFr: 'Sushis & Makis', labelEn: 'Sushi & Maki' },
    { id: 'plateaux', labelFr: 'Plateaux & Box', labelEn: 'Platters & Boxes' },
    { id: 'nouilles', labelFr: 'Nouilles & Chaud', labelEn: 'Noodles & Warm' },
    { id: 'cocktails', labelFr: 'Cocktails & Thés', labelEn: 'Cocktails & Tea' },
  ];

  const categoryLabels: Record<Exclude<MenuCategory, 'all'>, { fr: string; en: string }> = {
    sushi: { fr: 'Sushis & Makis', en: 'Sushi & Maki' },
    plateaux: { fr: 'Plateaux & Box', en: 'Platters' },
    nouilles: { fr: 'Nouilles & Chaud', en: 'Noodles & Warm' },
    cocktails: { fr: 'Cocktails & Boissons', en: 'Drinks' },
  };

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCat) return false;
      if (!query) return true;
      const name = item.name[lang].toLowerCase();
      const desc = item.description[lang].toLowerCase();
      return name.includes(query) || desc.includes(query);
    });
  }, [activeCategory, searchQuery, lang]);

  const getItemQuantity = (id: string) => {
    const found = cart.find((c) => c.item.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/[0.08]">
      {/* Section Header & Fulfillment Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-medium text-[#575652] mb-2">
            {lang === 'fr'
              ? 'Carte préparée à la minute · Prix en Dirhams (MAD)'
              : 'Freshly prepared to order · Prices in MAD'}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413]">
            {lang === 'fr' ? 'La Carte & Commandes Directes' : 'Menu & Direct Ordering'}
          </h2>
        </div>

        {/* Fulfillment Mode Segmented Selector (kept cleanly inside menu workspace, never top bar) */}
        <div
          role="group"
          aria-label={lang === 'fr' ? 'Mode de commande' : 'Fulfillment mode'}
          className="inline-flex items-center p-1 bg-[#EFEFEC] border border-black/10 rounded-lg self-start lg:self-auto"
        >
          {(
            [
              { id: 'delivery', fr: 'Livraison Meknès', en: 'Delivery' },
              { id: 'takeaway', fr: 'À emporter (20 min)', en: 'Takeaway' },
              { id: 'dinein', fr: 'Sur place', en: 'Dine-in' },
            ] as const
          ).map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => onChangeFulfillment(mode.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                fulfillment === mode.id
                  ? 'bg-[#141413] text-white'
                  : 'text-[#575652] hover:text-[#141413]'
              }`}
            >
              {lang === 'fr' ? mode.fr : mode.en}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter Tabs + Search Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 min-h-[40px] text-xs font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#141413] text-white border-[#141413]'
                  : 'bg-transparent text-[#575652] border-black/10 hover:border-black/25 hover:text-[#141413]'
              }`}
            >
              {lang === 'fr' ? cat.labelFr : cat.labelEn}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64 shrink-0">
          <Search
            className="w-4 h-4 text-[#575652] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'fr' ? 'Rechercher un plat...' : 'Search dishes...'}
            aria-label={lang === 'fr' ? 'Rechercher un plat' : 'Search menu'}
            className="w-full pl-9 pr-3 py-2 min-h-[40px] text-sm bg-white border border-black/12 rounded-lg text-[#141413] placeholder:text-[#575652]/70 focus:outline-none focus:border-[#B91C1C]"
          />
        </div>
      </div>

      {/* Fulfillment Context Strip */}
      <div className="mb-8 py-3 px-4 rounded-lg bg-[#EFEFEC] border border-black/[0.07] flex flex-wrap items-center justify-between gap-3 text-xs text-[#575652]">
        <span>
          {fulfillment === 'delivery' &&
            (lang === 'fr'
              ? `Livraison directe à Meknès · Offerte dès ${BUSINESS_INFO.freeDeliveryThresholdMad} MAD d’achat (${BUSINESS_INFO.deliveryFeeMad} MAD sinon)`
              : `Direct delivery in Meknès · Free over ${BUSINESS_INFO.freeDeliveryThresholdMad} MAD (${BUSINESS_INFO.deliveryFeeMad} MAD otherwise)`)}
          {fulfillment === 'takeaway' &&
            (lang === 'fr'
              ? 'Retrait rapide sans attente au Riad Ismailia, Im. 508 Mag. 4 · Prêt en 20 minutes'
              : 'Fast pickup at Riad Ismailia, Im. 508 Mag. 4 · Ready in 20 minutes')}
          {fulfillment === 'dinein' &&
            (lang === 'fr'
              ? 'Préparation pour votre venue sur place · Service continu jusqu’à 00:00'
              : 'Prepared fresh for your table · Open continuously until 00:00')}
        </span>
        <span className="font-mono tabular-nums text-[#141413] font-medium">
          {filteredItems.length} {lang === 'fr' ? 'plats affichés' : 'items shown'}
        </span>
      </div>

      {/* Product Grid: 3-column uniform desktop grid */}
      {filteredItems.length === 0 ? (
        <div className="py-16 text-center border border-black/10 rounded-xl bg-white">
          <p className="text-base font-medium text-[#141413] mb-2">
            {lang === 'fr' ? 'Aucun plat trouvé pour cette recherche.' : 'No dishes match your search.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-2 px-4 py-2 text-xs font-semibold text-[#B91C1C] hover:underline cursor-pointer"
          >
            {lang === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => {
            const qty = getItemQuantity(item.id);
            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between bg-white border border-black/[0.08] rounded-xl overflow-hidden transition-transform duration-200 ease-settle hover:-translate-y-0.5"
              >
                <div>
                  {/* 4:3 Culinary Artwork */}
                  <DishArtCard visual={item.visual} title={item.name[lang]} />

                  <div className="p-5 pb-3">
                    {/* Quiet 12px Metadata Line (no pills!) */}
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#575652] mb-1.5">
                      <span>{categoryLabels[item.category][lang]}</span>
                      {item.pieces && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{item.pieces} pcs</span>
                        </>
                      )}
                      {item.tag && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#B91C1C] font-semibold">
                            {item.tag[lang]}
                          </span>
                        </>
                      )}
                    </div>

                    {/* 16px SemiBold Dish Name */}
                    <h3 className="text-base font-semibold text-[#141413] leading-snug mb-2">
                      {item.name[lang]}
                    </h3>

                    <p className="text-sm text-[#575652] leading-relaxed line-clamp-2">
                      {item.description[lang]}
                    </p>
                  </div>
                </div>

                {/* Price & Add/Stepper Row */}
                <div className="px-5 pb-5 pt-3 mt-auto flex items-center justify-between gap-4 border-t border-black/[0.05]">
                  <span className="font-mono text-[15px] font-semibold tabular-nums text-[#141413]">
                    {item.priceMad} MAD
                  </span>

                  {qty === 0 ? (
                    <button
                      type="button"
                      onClick={() => onAddItem(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] text-xs font-semibold text-[#141413] bg-[#EFEFEC] hover:bg-[#141413] hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{lang === 'fr' ? 'Ajouter' : 'Add'}</span>
                    </button>
                  ) : (
                    <div className="inline-flex items-center gap-1 bg-[#141413] text-white rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, -1)}
                        aria-label={lang === 'fr' ? `Retirer un ${item.name.fr}` : `Decrease ${item.name.en}`}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-mono font-semibold tabular-nums">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, 1)}
                        aria-label={lang === 'fr' ? `Ajouter un ${item.name.fr}` : `Increase ${item.name.en}`}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Conversion Upsell Strip: Formule Duo Meknès */}
      <div
        id="formules"
        className="mt-12 rounded-2xl bg-[#141413] text-[#F7F7F5] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-black/15"
      >
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-stone-300">
            <Sparkles className="w-3.5 h-3.5 text-[#EF4444]" aria-hidden="true" />
            <span>
              {lang === 'fr'
                ? 'Formule Duo Meknès · Économisez 20 MAD + Livraison offerte'
                : 'Meknès Duo Combo · Save 20 MAD + Free Delivery'}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            {lang === 'fr'
              ? 'Plateau Duo (28 pièces) + 2 Cocktails Aux Fruits Frais'
              : 'Duo Platter (28 pcs) + 2 Fresh Fruit Cocktails'}
          </h3>
          <p className="text-sm text-stone-300">
            {lang === 'fr'
              ? 'Nos deux incontournables réunis pour une soirée à deux réussie : 28 pièces de sushis signatures accompagnées de deux cocktails pressés minute.'
              : 'Our two guest favorites combined for two: 28 signature sushi pieces paired with two freshly pressed fruit cocktails.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
          <div className="text-left sm:text-right">
            <span className="block text-xs text-stone-400 line-through tabular-nums">
              265 MAD
            </span>
            <span className="font-mono text-xl font-semibold text-white tabular-nums">
              245 MAD
            </span>
          </div>
          <button
            type="button"
            onClick={onAddDuoFormule}
            className="px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {lang === 'fr' ? 'Ajouter la formule' : 'Add Duo Combo'}
          </button>
        </div>
      </div>
    </section>
  );
};
