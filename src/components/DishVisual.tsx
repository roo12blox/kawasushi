import React from 'react';
import { DishVisualType } from '../types/restaurant';

interface HeroVisualProps {
  lang: 'fr' | 'en';
  onQuickAddDuo: () => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ lang, onQuickAddDuo }) => {
  return (
    <div className="relative h-full min-h-[380px] lg:min-h-[500px] w-full overflow-hidden rounded-2xl bg-[#161614] border border-[#2A2926] flex flex-col justify-between p-6 sm:p-8 text-[#F7F7F5]">
      {/* Subtle architectural sumi-ink and slate texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 25%, rgba(185, 28, 28, 0.22), transparent 52%), radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.06), transparent 45%)',
        }}
      />

      {/* Top Caption Row */}
      <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <span className="text-xs tracking-wide uppercase text-stone-300">
          {lang === 'fr' ? 'Sélection du Chef · Meknès' : "Chef's Selection · Meknès"}
        </span>
        <span className="font-mono text-xs tabular-nums text-stone-300">
          28 PCS · 195 MAD
        </span>
      </div>

      {/* Center Artisanal SVG Platter Illustration */}
      <div className="relative z-10 my-auto py-6 flex items-center justify-center">
        <svg
          viewBox="0 0 520 300"
          className="w-full max-w-[460px] drop-shadow-2xl"
          role="img"
          aria-label={
            lang === 'fr'
              ? 'Illustration artistique du Plateau Duo Kawasushi avec sushis saumon, makis avocat et baguettes'
              : 'Artistic illustration of the Kawasushi Duo Platter with salmon nigiri, avocado rolls and chopsticks'
          }
        >
          {/* Dark slate serving board */}
          <rect x="44" y="42" width="380" height="214" rx="14" fill="#21201E" stroke="#3B3935" strokeWidth="1.5" />
          <rect x="54" y="52" width="360" height="194" rx="10" fill="#1A1917" stroke="#2D2C29" strokeWidth="1" />

          {/* Soy sauce ceramic dish */}
          <circle cx="458" cy="98" r="32" fill="#2A2825" stroke="#47443F" strokeWidth="1.5" />
          <circle cx="458" cy="98" r="22" fill="#120E0C" />
          <ellipse cx="452" cy="92" rx="6" ry="3" fill="#3F2D24" opacity="0.6" />

          {/* Chopsticks on ceramic rest */}
          <rect x="442" y="156" width="34" height="10" rx="3" fill="#B91C1C" />
          <line x1="398" y1="262" x2="488" y2="146" stroke="#D6C7B2" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="412" y1="268" x2="498" y2="152" stroke="#C5B39B" strokeWidth="4.5" strokeLinecap="round" />

          {/* Wasabi & Pickled Ginger accents */}
          <path d="M90 218 Q104 202 118 218 Q104 226 90 218 Z" fill="#6F8C46" />
          <path d="M128 216 Q142 204 152 214 Q142 224 128 216 Z" fill="#E9968A" opacity="0.9" />
          <path d="M136 220 Q150 208 158 219 Q148 228 136 220 Z" fill="#F2ACA2" opacity="0.85" />

          {/* Row 1: 4 Salmon Nigiri */}
          {[0, 1, 2, 3].map((idx) => {
            const x = 84 + idx * 78;
            return (
              <g key={`nigiri-${idx}`} transform={`translate(${x}, 78)`}>
                {/* Rice base */}
                <rect x="2" y="14" width="54" height="24" rx="10" fill="#F4F1EA" />
                {/* Salmon cut */}
                <path
                  d="M0 16 C6 2, 52 2, 58 16 C56 26, 4 26, 0 16 Z"
                  fill="#E46848"
                />
                {/* Salmon marbling lines */}
                <path d="M12 10 Q22 14 26 20" stroke="#F6B29E" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M26 8 Q36 13 40 20" stroke="#F6B29E" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M40 10 Q46 14 50 19" stroke="#F6B29E" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                {/* Nori band */}
                <rect x="25" y="6" width="8" height="31" rx="2" fill="#1C221E" />
              </g>
            );
          })}

          {/* Row 2: 4 Dragon & California Uramaki Rolls */}
          {[0, 1, 2, 3].map((idx) => {
            const cx = 114 + idx * 74;
            const cy = 158;
            const isAvocado = idx % 2 === 0;
            return (
              <g key={`maki-${idx}`} transform={`translate(${cx}, ${cy})`}>
                <circle cx="0" cy="0" r="26" fill="#F5F2EB" stroke={isAvocado ? '#6D8C3F' : '#D9B68C'} strokeWidth="4.5" />
                <circle cx="0" cy="0" r="19" fill="#1E2420" />
                <circle cx="-4" cy="-3" r="6" fill="#E46848" />
                <circle cx="5" cy="4" r="5" fill="#7EA64B" />
                <circle cx="4" cy="-5" r="4" fill="#F4EFE6" />
                {/* Sesame specks */}
                <circle cx="-18" cy="-14" r="1.3" fill="#D5A664" />
                <circle cx="17" cy="-15" r="1.3" fill="#D5A664" />
                <circle cx="18" cy="14" r="1.3" fill="#D5A664" />
              </g>
            );
          })}

          {/* Crispy Ebi Tempura Accents on bottom right of slate */}
          {[0, 1].map((idx) => {
            const cx = 266 + idx * 62;
            const cy = 216;
            return (
              <g key={`ebi-${idx}`} transform={`translate(${cx}, ${cy})`}>
                <ellipse cx="0" cy="0" rx="24" ry="15" fill="#D99B4E" stroke="#F0C782" strokeWidth="1.5" />
                <ellipse cx="0" cy="0" rx="16" ry="9" fill="#F4EFE6" />
                <circle cx="0" cy="0" r="5" fill="#DF6E52" />
              </g>
            );
          })}

          {/* Traditional Japanese Hanko Red Stamp */}
          <g transform="translate(362, 198)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="none" stroke="#B91C1C" strokeWidth="2.2" />
            <text
              x="17"
              y="23"
              textAnchor="middle"
              fill="#B91C1C"
              fontSize="17"
              fontFamily="serif"
              fontWeight="700"
            >
              河
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Interactive Feature Strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {lang === 'fr' ? 'Plateau Duo Kawasushi' : 'Kawasushi Duo Platter'}
          </p>
          <p className="text-xs text-stone-400">
            {lang === 'fr'
              ? 'Préparé minute · Livraison ou retrait en 20 min'
              : 'Prepared fresh to order · Delivery or 20 min pickup'}
          </p>
        </div>
        <button
          type="button"
          onClick={onQuickAddDuo}
          className="px-4 py-2 text-xs font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {lang === 'fr' ? '+ Ajouter · 195 MAD' : '+ Add · 195 MAD'}
        </button>
      </div>
    </div>
  );
};

interface DishArtCardProps {
  visual: DishVisualType;
  title: string;
}

export const DishArtCard: React.FC<DishArtCardProps> = ({ visual, title }) => {
  const renderArtwork = () => {
    switch (visual) {
      case 'nouilles_legumes':
      case 'nouilles_poulet':
      case 'nouilles_crevettes': {
        const proteinColor =
          visual === 'nouilles_poulet'
            ? '#C97B42'
            : visual === 'nouilles_crevettes'
            ? '#E36B50'
            : '#6E8F43';
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            {/* Stoneware bowl */}
            <circle cx="160" cy="126" r="78" fill="#22211F" />
            <circle cx="160" cy="126" r="68" fill="#2D2B27" />
            {/* Wok noodle strands */}
            <path
              d="M110 118 Q135 90 164 114 T214 112"
              stroke="#E6C27A"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M104 134 Q142 108 176 136 T216 128"
              stroke="#DFB668"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M116 148 Q154 126 186 152 T208 144"
              stroke="#E8C98B"
              strokeWidth="5.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M122 104 Q158 134 198 102"
              stroke="#D5A655"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Crisp vegetables / toppings */}
            <rect x="132" y="100" width="22" height="6" rx="3" transform="rotate(-18 132 100)" fill="#E0633C" />
            <rect x="172" y="128" width="24" height="6" rx="3" transform="rotate(24 172 128)" fill="#6D9442" />
            <circle cx="144" cy="138" r="9" fill={proteinColor} />
            <circle cx="184" cy="108" r="10" fill={proteinColor} />
            <circle cx="162" cy="120" r="7" fill="#5A4535" />
            {/* Scallion & sesame specks */}
            <circle cx="154" cy="104" r="3" fill="#82AE4E" />
            <circle cx="168" cy="144" r="3" fill="#82AE4E" />
            <circle cx="136" cy="122" r="2" fill="#F3E5C8" />
            <circle cx="182" cy="136" r="2" fill="#F3E5C8" />
            {/* Chopsticks resting */}
            <line x1="210" y1="196" x2="278" y2="62" stroke="#181715" strokeWidth="4" strokeLinecap="round" />
            <line x1="224" y1="200" x2="288" y2="68" stroke="#2D2B27" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
      }

      case 'cocktail_fruits':
      case 'cocktail_exotique':
      case 'matcha_glace': {
        const liquidTop =
          visual === 'matcha_glace'
            ? '#749B4E'
            : visual === 'cocktail_exotique'
            ? '#E89B2D'
            : '#D94348';
        const liquidBottom =
          visual === 'matcha_glace'
            ? '#A9C77E'
            : visual === 'cocktail_exotique'
            ? '#F3C14B'
            : '#F09A43';
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            {/* Coaster stone */}
            <ellipse cx="160" cy="196" rx="68" ry="12" fill="#DBD8D0" />
            {/* Tall glass */}
            <path d="M122 58 L198 58 L188 194 L132 194 Z" fill="#FFFFFF" fillOpacity="0.65" stroke="#C5C2B8" strokeWidth="2" />
            <defs>
              <linearGradient id={`drink-${visual}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={liquidTop} />
                <stop offset="100%" stopColor={liquidBottom} />
              </linearGradient>
            </defs>
            <path d="M126 84 L194 84 L186 188 L134 188 Z" fill={`url(#drink-${visual})`} opacity="0.92" />
            {/* Ice cubes */}
            <rect x="140" y="96" width="18" height="18" rx="4" transform="rotate(-12 140 96)" fill="#FFFFFF" fillOpacity="0.35" />
            <rect x="162" y="108" width="18" height="18" rx="4" transform="rotate(14 162 108)" fill="#FFFFFF" fillOpacity="0.35" />
            {/* Citrus / fruit garnish */}
            <circle cx="194" cy="64" r="18" fill="#F2B830" stroke="#F8E29B" strokeWidth="3" />
            {/* Mint leaves */}
            <path d="M148 78 Q134 56 154 48 Q166 64 148 78 Z" fill="#4E7A38" />
            <path d="M154 78 Q170 58 176 72 Q166 84 154 78 Z" fill="#629448" />
            {/* Straw */}
            <line x1="158" y1="184" x2="132" y2="30" stroke="#1C1B19" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
      }

      case 'plateau_duo':
      case 'plateau_famille':
      case 'box_solo': {
        const cols = visual === 'plateau_famille' ? 4 : visual === 'plateau_duo' ? 3 : 2;
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <rect x="44" y="42" width="232" height="156" rx="12" fill="#1E1D1B" stroke="#363430" strokeWidth="2" />
            {Array.from({ length: cols }).map((_, cIdx) => {
              const x = cols === 4 ? 76 + cIdx * 54 : cols === 3 ? 88 + cIdx * 72 : 118 + cIdx * 84;
              return (
                <g key={cIdx}>
                  {/* Top row nigiri */}
                  <rect x={x - 18} y="66" width="36" height="18" rx="7" fill="#E46848" />
                  <rect x={x - 3} y="66" width="6" height="18" fill="#1C221E" />
                  {/* Middle row maki */}
                  <circle cx={x} cy="118" r="17" fill="#F5F2EB" stroke="#1E2420" strokeWidth="3.5" />
                  <circle cx={x} cy="118" r="7" fill="#E46848" />
                  {/* Bottom row green avocado roll */}
                  <circle cx={x} cy="164" r="17" fill="#F5F2EB" stroke="#6E9142" strokeWidth="3.5" />
                  <circle cx={x} cy="164" r="7" fill="#DF9E46" />
                </g>
              );
            })}
          </svg>
        );
      }

      case 'gyoza': {
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <ellipse cx="160" cy="126" rx="108" ry="66" fill="#232220" />
            <ellipse cx="160" cy="126" rx="96" ry="56" fill="#2D2B28" />
            {[
              { x: 112, y: 108, r: -18 },
              { x: 162, y: 100, r: 6 },
              { x: 206, y: 114, r: 24 },
              { x: 134, y: 146, r: -8 },
              { x: 184, y: 144, r: 16 },
            ].map((g, i) => (
              <g key={i} transform={`translate(${g.x}, ${g.y}) rotate(${g.r})`}>
                <path d="M-24 6 Q0 -22 24 6 Q0 16 -24 6 Z" fill="#E8C688" stroke="#C68740" strokeWidth="2" />
                <path d="M-16 8 Q0 14 16 8" stroke="#A65E24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </g>
            ))}
          </svg>
        );
      }

      case 'nigiri': {
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <rect x="44" y="64" width="232" height="112" rx="10" fill="#1F1E1C" />
            {[86, 160, 234].map((x, idx) => (
              <g key={idx} transform={`translate(${x - 26}, 96)`}>
                <rect x="2" y="14" width="48" height="20" rx="8" fill="#F4F1EA" />
                <path d="M0 15 C6 2, 46 2, 52 15 C50 24, 4 24, 0 15 Z" fill="#E46848" />
                <path d="M14 9 Q22 14 24 19" stroke="#F6B29E" strokeWidth="1.5" fill="none" />
                <path d="M30 9 Q38 14 40 19" stroke="#F6B29E" strokeWidth="1.5" fill="none" />
              </g>
            ))}
          </svg>
        );
      }

      default: {
        // California, Crispy, Dragon, Spicy Tuna rolls on matte ceramic plate
        const ringColor =
          visual === 'dragon'
            ? '#6D8C3F'
            : visual === 'crispy'
            ? '#D99B4E'
            : visual === 'spicy_tuna'
            ? '#B91C1C'
            : '#D5B284';
        const centerColor = visual === 'spicy_tuna' ? '#C83232' : '#E46848';
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <rect x="46" y="58" width="228" height="124" rx="12" fill="#201F1D" />
            {[
              { x: 102, y: 94 },
              { x: 160, y: 94 },
              { x: 218, y: 94 },
              { x: 102, y: 146 },
              { x: 160, y: 146 },
              { x: 218, y: 146 },
            ].map((pos, idx) => (
              <g key={idx} transform={`translate(${pos.x}, ${pos.y})`}>
                <circle cx="0" cy="0" r="21" fill="#F5F2EB" stroke={ringColor} strokeWidth="4" />
                <circle cx="0" cy="0" r="14" fill="#1E2420" />
                <circle cx="-3" cy="-2" r="5" fill={centerColor} />
                <circle cx="4" cy="3" r="4" fill="#7EA64B" />
              </g>
            ))}
          </svg>
        );
      }
    }
  };

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECEAE4]">
      {renderArtwork()}
    </div>
  );
};
