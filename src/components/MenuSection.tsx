import React, { useMemo, useState } from 'react';
import { BookOpen, Minus, Plus, Search, Sparkles, X } from 'lucide-react';
import { BUSINESS_INFO, MENU_FLIER_SHEETS, MENU_ITEMS } from '../data/menuData';
import { CartItem, FulfillmentMode, Language, MenuCategory, MenuItem } from '../types/restaurant';
import { DishArtCard } from './DishVisual';

interface MenuSectionProps {
  lang: Language;
  cart: CartItem[];
  fulfillment: FulfillmentMode;
  onChangeFulfillment: (mode: FulfillmentMode) => void;
  onAddItem: (item: MenuItem, selectedBase?: string) => void;
  onUpdateQty: (cartKey: string, delta: number) => void;
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
  const [selectedBases, setSelectedBases] = useState<Record<string, string>>({});
  const [flierOpen, setFlierOpen] = useState(false);

  const categories: { id: MenuCategory; labelFr: string; labelEn: string }[] = [
    { id: 'all', labelFr: 'Toute la carte', labelEn: 'Full menu' },
    { id: 'poke_tartare', labelFr: 'Poke & Tartare', labelEn: 'Poke & Tartare' },
    { id: 'soupes_crispy', labelFr: 'Soupes & Crispy', labelEn: 'Soups & Crispy' },
    { id: 'rolls_maki', labelFr: 'Rolls & Makis', labelEn: 'Rolls & Maki' },
    { id: 'sashimi_pizza_fry', labelFr: 'Sashimi, Pizza & Fry', labelEn: 'Sashimi, Pizza & Fry' },
    { id: 'assortiments', labelFr: 'Assortiments', labelEn: 'Platters' },
    { id: 'wok', labelFr: 'Wok Bowls', labelEn: 'Wok Bowls' },
    { id: 'desserts_drinks', labelFr: 'Desserts & Mocktails', labelEn: 'Desserts & Drinks' },
  ];

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCat) return false;
      if (!query) return true;
      const name = item.name[lang].toLowerCase();
      const desc = item.description[lang].toLowerCase();
      const sub = item.subCategory[lang].toLowerCase();
      return name.includes(query) || desc.includes(query) || sub.includes(query);
    });
  }, [activeCategory, searchQuery, lang]);

  const getActiveBase = (item: MenuItem): string | undefined => {
    if (!item.baseOptions) return undefined;
    return selectedBases[item.id] ?? item.baseOptions[lang][0];
  };

  const getCartKey = (item: MenuItem): string => {
    const base = getActiveBase(item);
    return base ? `${item.id}:${base}` : item.id;
  };

  const getItemQuantity = (cartKey: string) => {
    const found = cart.find((c) => c.cartKey === cartKey);
    return found ? found.quantity : 0;
  };

  return (
    <section
      id="menu"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/[0.08]"
    >
      {/* Section Header & Fulfillment Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <p className="text-xs font-medium text-[#575652] mb-2">
            {lang === 'fr'
              ? `Carte complète Kawa Sushi & Wok · ${MENU_ITEMS.length} spécialités en MAD`
              : `Full Kawa Sushi & Wok Menu · ${MENU_ITEMS.length} specialties in MAD`}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413]">
            {lang === 'fr' ? 'La Carte & Commandes Directes' : 'Menu & Direct Ordering'}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Original Flier Viewer Button */}
          <button
            type="button"
            onClick={() => setFlierOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] text-xs font-medium text-[#141413] border border-black/15 hover:border-black/35 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#102B1F]" aria-hidden="true" />
            <span>{lang === 'fr' ? 'Fiches menu originales' : 'Original menu cards'}</span>
          </button>

          {/* Fulfillment Mode Segmented Selector */}
          <div
            role="group"
            aria-label={lang === 'fr' ? 'Mode de commande' : 'Fulfillment mode'}
            className="inline-flex items-center p-1 bg-[#EFEFEC] border border-black/10 rounded-lg"
          >
            {(
              [
                { id: 'delivery', fr: 'Livraison Meknès', en: 'Delivery' },
                { id: 'takeaway', fr: 'À emporter', en: 'Takeaway' },
                { id: 'dinein', fr: 'Sur place', en: 'Dine-in' },
              ] as const
            ).map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => onChangeFulfillment(mode.id)}
                className={`px-3 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
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
      </div>

      {/* Category Filter Tabs + Search Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-7">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 min-h-[40px] text-xs font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#102B1F] text-white border-[#102B1F]'
                  : 'bg-transparent text-[#575652] border-black/10 hover:border-black/25 hover:text-[#141413]'
              }`}
            >
              {lang === 'fr' ? cat.labelFr : cat.labelEn}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-64 shrink-0">
          <Search
            className="w-4 h-4 text-[#575652] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'fr' ? 'Saumon, wok, sakura...' : 'Salmon, wok, sakura...'}
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
            const activeBase = getActiveBase(item);
            const cartKey = getCartKey(item);
            const qty = getItemQuantity(cartKey);

            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between bg-white border border-black/[0.08] rounded-xl overflow-hidden transition-transform duration-200 ease-settle hover:-translate-y-0.5"
              >
                <div>
                  {/* 4:3 Dedicated Culinary Illustration per dish */}
                  <DishArtCard visual={item.visual} title={item.name[lang]} />

                  <div className="p-5 pb-3">
                    {/* Quiet 12px Metadata Line */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-wider text-[#575652] mb-1.5">
                      <span>{item.subCategory[lang]}</span>
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

                    <h3 className="text-base font-semibold text-[#141413] leading-snug mb-2">
                      {item.name[lang]}
                    </h3>

                    <p className="text-sm text-[#575652] leading-relaxed line-clamp-2">
                      {item.description[lang]}
                    </p>

                    {/* Base Selector for Wok Bowls & Crousty Chicken Bowl */}
                    {item.baseOptions && (
                      <div className="mt-3 pt-2.5 border-t border-black/[0.05]">
                        <p className="text-[11px] font-medium text-[#575652] mb-1.5">
                          {lang === 'fr' ? 'Base au choix :' : 'Choose base:'}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.baseOptions[lang].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() =>
                                setSelectedBases((prev) => ({ ...prev, [item.id]: opt }))
                              }
                              className={`px-2.5 py-1 text-[11px] font-medium rounded-md border transition-colors cursor-pointer ${
                                activeBase === opt
                                  ? 'bg-[#102B1F] text-white border-[#102B1F]'
                                  : 'bg-[#F7F7F5] text-[#575652] border-black/10 hover:text-[#141413]'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
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
                      onClick={() => onAddItem(item, activeBase)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] text-xs font-semibold text-[#141413] bg-[#EFEFEC] hover:bg-[#141413] hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{lang === 'fr' ? 'Ajouter' : 'Add'}</span>
                    </button>
                  ) : (
                    <div className="inline-flex items-center gap-1 bg-[#141413] text-white rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(cartKey, -1)}
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
                        onClick={() => onUpdateQty(cartKey, 1)}
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

      {/* Conversion Upsell Strip */}
      <div
        id="formules"
        className="mt-12 rounded-2xl bg-[#102B1F] text-[#F7F7F5] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#1E4633]"
      >
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-[#E8C57B]">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {lang === 'fr'
                ? 'Formule Duo Kawa · Économisez 15 MAD sur votre commande'
                : 'Kawa Duo Combo · Save 15 MAD on your order'}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            {lang === 'fr'
              ? 'Assortiment C (20 pièces) + 2 Mocktails Sakura Fresh'
              : 'Platter C (20 pcs) + 2 Sakura Fresh Mocktails'}
          </h3>
          <p className="text-sm text-stone-300">
            {lang === 'fr'
              ? 'Yummy & Crispy, The Bomb, Aromaki Saumon & Maki Gambas accompagnés de deux mocktails Sakura Fresh bien glacés.'
              : 'Yummy & Crispy, The Bomb, Salmon Aromaki & Shrimp Maki paired with two chilled Sakura Fresh mocktails.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
          <div className="text-left sm:text-right">
            <span className="block text-xs text-stone-400 line-through tabular-nums">
              175 MAD
            </span>
            <span className="font-mono text-xl font-semibold text-white tabular-nums">
              160 MAD
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

      {/* Original Menu Sheets Modal */}
      {flierOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'fr' ? 'Fiches originales du menu' : 'Original menu sheets'}
          onClick={(e) => {
            if (e.target === e.currentTarget) setFlierOpen(false);
          }}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F7F7F5] rounded-2xl overflow-hidden flex flex-col border border-black/15">
            <div className="px-6 py-4 bg-white border-b border-black/10 flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold text-[#141413]">
                {lang === 'fr' ? 'Menu Kawa Sushi & Wok (Fiches)' : 'Kawa Sushi & Wok Menu Cards'}
              </h3>
              <button
                type="button"
                onClick={() => setFlierOpen(false)}
                aria-label="Close"
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MENU_FLIER_SHEETS.map((sheet) => (
                <figure
                  key={sheet.id}
                  className="bg-white rounded-xl border border-black/10 overflow-hidden"
                >
                  <div className="relative min-h-[220px] bg-[#0E3923] flex items-center justify-center">
                    <img
                      src={sheet.src}
                      alt={sheet.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                      className="w-full h-auto object-contain bg-[#0E3923]"
                    />
                    <div
                      style={{ display: 'none' }}
                      className="p-6 text-center flex-col items-center justify-center gap-2 text-[#E8C57B]"
                    >
                      <BookOpen className="w-6 h-6" aria-hidden="true" />
                      <span className="text-xs font-medium">{sheet.title}</span>
                    </div>
                  </div>
                  <figcaption className="px-4 py-2.5 text-xs font-medium text-[#575652]">
                    {sheet.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
