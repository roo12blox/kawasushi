import React from 'react';
import { Clock, Star } from 'lucide-react';
import { BUSINESS_INFO, RATING_DISTRIBUTION, REVIEWS } from '../data/menuData';
import { Language } from '../types/restaurant';

interface ReviewsSectionProps {
  lang: Language;
  onScrollToBooking: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang, onScrollToBooking }) => {
  return (
    <section
      id="avis"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/[0.08]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Owner Story, Quality Standards & Friday Peak Tip */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="text-xs font-medium text-[#575652] mb-2">
              {BUSINESS_INFO.ownerBrand}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413] mb-4">
              {lang === 'fr'
                ? 'Une table japonaise plébiscitée à Meknès'
                : 'A top-rated Japanese table in Meknès'}
            </h2>
            <p className="text-base text-[#575652] leading-relaxed">
              {lang === 'fr'
                ? '« Découvrez des saveurs uniques, des produits de qualité et une expérience japonaise authentique. Nous sommes ravis de vous accueillir et de partager avec vous notre passion pour la cuisine japonaise. »'
                : '“Discover unique flavors, quality ingredients, and an authentic Japanese experience. We are delighted to welcome you and share our passion for Japanese cuisine.”'}
            </p>
          </div>

          {/* Rating Breakdown Box */}
          <div className="p-6 rounded-xl bg-white border border-black/[0.08]">
            <div className="flex items-baseline justify-between gap-4 mb-5 pb-4 border-b border-black/[0.06]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-4xl font-semibold tabular-nums text-[#141413]">
                    4,9
                  </span>
                  <div className="flex items-center gap-0.5 text-[#B91C1C]" aria-label="4.9 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#575652] mt-1 tabular-nums">
                  {lang === 'fr'
                    ? `Basé sur ${BUSINESS_INFO.reviewCount} avis clients vérifiés`
                    : `Based on ${BUSINESS_INFO.reviewCount} verified customer reviews`}
                </p>
              </div>
              <span className="text-xs font-medium text-[#575652] tabular-nums">
                50–150 MAD
              </span>
            </div>

            <div className="space-y-2">
              {RATING_DISTRIBUTION.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-6 font-mono tabular-nums text-[#575652]">
                    {row.stars} ★
                  </span>
                  <div className="flex-1 h-2 bg-[#EFEFEC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#141413] rounded-full"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="w-7 text-right font-mono tabular-nums text-[#575652]">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Peak Hours Notice (from Maps listing) */}
          <div className="p-5 rounded-xl bg-[#EFEFEC] border border-black/[0.07] flex items-start gap-3.5">
            <Clock className="w-4 h-4 text-[#B91C1C] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-[#141413]">
                {lang === 'fr'
                  ? 'Affluence du vendredi soir (19h – 23h)'
                  : 'Friday evening peak hours (7 PM – 11 PM)'}
              </p>
              <p className="text-xs text-[#575652] leading-relaxed">
                {lang === 'fr'
                  ? 'La salle est particulièrement animée le vendredi soir. Réservez votre table à l’avance ou commandez en retrait sans attente.'
                  : 'Our dining room is lively on Friday evenings. Reserve your table ahead or place a takeaway order to skip the wait.'}
              </p>
              <button
                type="button"
                onClick={onScrollToBooking}
                className="text-xs font-semibold text-[#B91C1C] hover:underline cursor-pointer pt-0.5"
              >
                {lang === 'fr' ? 'Réserver pour ce soir →' : 'Reserve for tonight →'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Attributable Verified Testimonials */}
        <div className="lg:col-span-7 space-y-5">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="p-6 sm:p-8 rounded-xl bg-white border border-black/[0.08] space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-[#141413]">{review.author}</h3>
                  <p className="text-xs text-[#575652]">
                    {review.meta[lang]}
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    {review.date[lang]}
                  </p>
                </div>

                <div className="flex items-center gap-0.5 text-[#B91C1C]" aria-label="5 stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <blockquote className="text-[15px] sm:text-base leading-relaxed text-[#141413]">
                “{review.quote}”
              </blockquote>
            </article>
          ))}

          {/* Direct Social Proof Callout */}
          <div className="p-6 rounded-xl bg-[#EFEFEC] border border-black/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#141413]">
                {lang === 'fr'
                  ? 'Envie de découvrir Kawasushi ce soir ?'
                  : 'Ready to try Kawasushi tonight?'}
              </p>
              <p className="text-xs text-[#575652]">
                {lang === 'fr'
                  ? 'Commandez directement depuis la carte ou passez nous voir au Riad Ismailia.'
                  : 'Order directly from our menu or visit us at Riad Ismailia.'}
              </p>
            </div>
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-4 py-2.5 min-h-[40px] text-xs font-semibold text-white bg-[#141413] hover:bg-[#B91C1C] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'fr' ? 'Voir la carte' : 'Browse menu'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
