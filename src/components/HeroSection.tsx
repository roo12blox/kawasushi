import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';
import { Language } from '../types/restaurant';
import { HeroVisual } from './DishVisual';

interface HeroSectionProps {
  lang: Language;
  onQuickAddAssortimentC: () => void;
  onScrollToBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onQuickAddAssortimentC,
  onScrollToBooking,
}) => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-14 sm:pt-12 sm:pb-20">
      {/* 2-Column Editorial Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Core Proposition */}
        <div className="lg:col-span-6 flex flex-col justify-between py-2">
          <div>
            {/* Clean Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#575652] mb-5">
              <span>Riad Ismailia, Meknès</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'fr' ? 'Ouvert jusqu’à 00:00' : 'Open until 00:00'}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums text-[#141413] font-semibold">
                4,9 ★ ({BUSINESS_INFO.reviewCount} {lang === 'fr' ? 'avis' : 'reviews'})
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-[clamp(2.35rem,4.2vw,3.85rem)] font-semibold leading-[1.06] tracking-tight text-[#141413] mb-5">
              {lang === 'fr'
                ? 'Kawa Sushi & Wok, l’art japonais au cœur de Meknès.'
                : 'Kawa Sushi & Wok, Japanese culinary craft in Meknès.'}
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-[17px] leading-relaxed text-[#575652] max-w-[54ch] mb-8">
              {lang === 'fr'
                ? 'Poke Bowls, Tartares, California & Special Kawa Rolls, Pizza Sushi, Wok Bowls personnalisés, Assortiments jusqu’à 100 pièces et Mocktails maison. Sur place, à emporter ou en livraison.'
                : 'Poke Bowls, Tartares, California & Special Kawa Rolls, Sushi Pizza, customizable Wok Bowls, Platters up to 100 pieces, and house Mocktails. Dine-in, takeaway, or delivery.'}
            </p>
          </div>

          {/* Action Block */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] text-sm font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]"
              >
                <span>{lang === 'fr' ? 'Commander sur la carte' : 'Order from menu'}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onScrollToBooking}
                className="inline-flex items-center justify-center px-5 py-3.5 min-h-[44px] text-sm font-semibold text-[#141413] border border-black/15 hover:border-black/35 bg-transparent rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]"
              >
                {lang === 'fr' ? 'Réserver une table' : 'Book a table'}
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#575652] pt-1">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 font-mono tabular-nums text-[#141413] hover:text-[#B91C1C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true">·</span>
              <span>
                {lang === 'fr'
                  ? 'Également disponible sur Glovo'
                  : 'Also available on Glovo'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Dominant Visual Anchor */}
        <div className="lg:col-span-6">
          <HeroVisual lang={lang} onQuickAddAssortimentC={onQuickAddAssortimentC} />
        </div>
      </div>

      {/* Full-Width 4-Column Verified Business Strip */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/10 rounded-xl bg-[#EFEFEC] divide-y sm:divide-y-0 sm:divide-x divide-black/10">
        <div className="p-5">
          <p className="text-xs font-medium text-[#575652] mb-1">
            {lang === 'fr' ? 'Horaires d’ouverture' : 'Opening hours'}
          </p>
          <p className="text-sm font-semibold text-[#141413]">
            {lang === 'fr' ? 'Ouvert · Ferme à 00:00' : 'Open daily · Closes 00:00'}
          </p>
        </div>

        <div className="p-5">
          <p className="text-xs font-medium text-[#575652] mb-1">
            {lang === 'fr' ? 'Budget moyen' : 'Average spend'}
          </p>
          <p className="text-sm font-semibold text-[#141413] tabular-nums">
            {lang === 'fr' ? '50–150 MAD par personne' : '50–150 MAD per guest'}
          </p>
        </div>

        <div className="p-5">
          <p className="text-xs font-medium text-[#575652] mb-1">
            {lang === 'fr' ? 'Modes de service' : 'Service options'}
          </p>
          <p className="text-sm font-semibold text-[#141413]">
            {lang === 'fr'
              ? 'Sur place · À emporter · Livraison'
              : 'Dine-in · Takeaway · Delivery'}
          </p>
        </div>

        <div className="p-5">
          <p className="text-xs font-medium text-[#575652] mb-1">
            {lang === 'fr' ? 'Adresse à Meknès' : 'Meknès address'}
          </p>
          <p className="text-sm font-semibold text-[#141413]">
            Riad Ismailia, Im. 508 Mag. 4
          </p>
        </div>
      </div>
    </section>
  );
};
