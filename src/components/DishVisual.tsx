import React from 'react';
import { DishVisualType } from '../types/restaurant';

interface HeroVisualProps {
  lang: 'fr' | 'en';
  onQuickAddAssortimentC: () => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ lang, onQuickAddAssortimentC }) => {
  return (
    <div className="relative h-full min-h-[380px] lg:min-h-[500px] w-full overflow-hidden rounded-2xl bg-[#102B1F] border border-[#1E4633] flex flex-col justify-between p-6 sm:p-8 text-[#F7F7F5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 25%, rgba(212, 168, 83, 0.2), transparent 52%), radial-gradient(circle at 18% 82%, rgba(255, 255, 255, 0.06), transparent 45%)',
        }}
      />

      {/* Top Caption Row */}
      <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <span className="text-xs tracking-wide uppercase text-stone-300">
          {lang === 'fr' ? 'Kawa Sushi & Wok · Sélection du Chef' : "Kawa Sushi & Wok · Chef's Selection"}
        </span>
        <span className="font-mono text-xs tabular-nums text-[#E8C57B]">
          20 PCS · 125 MAD
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
              ? 'Illustration artistique de l’Assortiment C Kawasushi (20 pièces)'
              : 'Artistic illustration of Kawasushi Platter C (20 pieces)'
          }
        >
          {/* Dark slate serving board */}
          <rect x="44" y="42" width="380" height="214" rx="14" fill="#171917" stroke="#36423A" strokeWidth="1.5" />
          <rect x="54" y="52" width="360" height="194" rx="10" fill="#121412" stroke="#28312B" strokeWidth="1" />

          {/* Soy sauce ceramic dish */}
          <circle cx="458" cy="98" r="32" fill="#222522" stroke="#475148" strokeWidth="1.5" />
          <circle cx="458" cy="98" r="22" fill="#100D0B" />
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
                <rect x="2" y="14" width="54" height="24" rx="10" fill="#F4F1EA" />
                <path d="M0 16 C6 2, 52 2, 58 16 C56 26, 4 26, 0 16 Z" fill="#E46848" />
                <path d="M12 10 Q22 14 26 20" stroke="#F6B29E" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M26 8 Q36 13 40 20" stroke="#F6B29E" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M40 10 Q46 14 50 19" stroke="#F6B29E" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <rect x="25" y="6" width="8" height="31" rx="2" fill="#1C221E" />
              </g>
            );
          })}

          {/* Row 2: 4 Special Kawa & California Rolls */}
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
                <circle cx="-18" cy="-14" r="1.3" fill="#D5A664" />
                <circle cx="17" cy="-15" r="1.3" fill="#D5A664" />
                <circle cx="18" cy="14" r="1.3" fill="#D5A664" />
              </g>
            );
          })}

          {/* Crispy Fry Roll Accents */}
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

          {/* Gold Kawa Seal */}
          <g transform="translate(362, 198)">
            <rect x="0" y="0" width="34" height="34" rx="4" fill="none" stroke="#E8C57B" strokeWidth="2" />
            <text
              x="17"
              y="23"
              textAnchor="middle"
              fill="#E8C57B"
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
            {lang === 'fr' ? 'Assortiment C (20 pièces)' : 'Platter C (20 pieces)'}
          </p>
          <p className="text-xs text-stone-300">
            {lang === 'fr'
              ? 'Yummy & Crispy, The Bomb, Aromaki Saumon & Maki Gambas'
              : 'Yummy & Crispy, The Bomb, Salmon Aromaki & Shrimp Maki'}
          </p>
        </div>
        <button
          type="button"
          onClick={onQuickAddAssortimentC}
          className="px-4 py-2 text-xs font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {lang === 'fr' ? '+ Ajouter · 125 MAD' : '+ Add · 125 MAD'}
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
    // 1. POKE BOWLS
    if (visual === 'poke_for_you' || visual === 'poke_kawa') {
      const isMango = visual === 'poke_kawa';
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <circle cx="160" cy="122" r="82" fill="#182C22" />
          <circle cx="160" cy="122" r="72" fill="#F4F1EA" />
          {/* Rice bed texture */}
          <circle cx="145" cy="135" r="24" fill="#EAE5DA" />
          {/* Fresh salmon cubes */}
          <rect x="108" y="84" width="24" height="20" rx="5" fill="#E46848" />
          <rect x="136" y="76" width="22" height="20" rx="5" fill="#EE7E5E" />
          <rect x="114" y="108" width="22" height="18" rx="5" fill="#DF5E3E" />
          {/* Mango or Surimi */}
          {isMango ? (
            <>
              <rect x="174" y="80" width="24" height="18" rx="5" fill="#F2B830" />
              <rect x="192" y="102" width="22" height="18" rx="5" fill="#EBA424" />
            </>
          ) : (
            <>
              <rect x="174" y="80" width="26" height="14" rx="4" fill="#F26C57" />
              <rect x="180" y="96" width="24" height="14" rx="4" fill="#F9EFEA" />
            </>
          )}
          {/* Avocado slices */}
          <path d="M164 142 Q196 122 212 152 Q188 176 164 142 Z" fill="#6F9444" />
          <path d="M174 148 Q196 136 206 156 Q188 170 174 148 Z" fill="#9AC264" />
          {/* Wakame seaweed & cucumber */}
          <path d="M104 142 Q122 132 134 150 Q116 168 104 142 Z" fill="#2E5B3A" />
          <circle cx="146" cy="164" r="13" fill="#7EA64B" stroke="#537A2F" strokeWidth="2.5" />
          <circle cx="164" cy="118" r="10" fill="#D54338" />
          {/* Sesame */}
          <circle cx="152" cy="108" r="2" fill="#242320" />
          <circle cx="168" cy="126" r="2" fill="#F7F7F5" />
          <circle cx="140" cy="128" r="2" fill="#242320" />
        </svg>
      );
    }

    // 2. TARTARE
    if (visual === 'tartare_saumon' || visual === 'tartare_gambas') {
      const isGambas = visual === 'tartare_gambas';
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <circle cx="160" cy="124" r="82" fill="#FFFFFF" stroke="#D8D4CA" strokeWidth="2" />
          {/* Cylindrical Tartare Tower */}
          {/* Bottom rice ring */}
          <ellipse cx="160" cy="156" rx="54" ry="18" fill="#EFEBE0" />
          <rect x="106" y="130" width="108" height="26" fill="#F5F2EA" />
          {/* Middle avocado layer */}
          <rect x="106" y="110" width="108" height="20" fill="#82AC4C" />
          <ellipse cx="160" cy="110" rx="54" ry="16" fill="#95BF5D" />
          {/* Top Salmon or Crispy Gambas crown */}
          {isGambas ? (
            <>
              <rect x="106" y="84" width="108" height="26" fill="#D88E3F" />
              <ellipse cx="160" cy="84" rx="54" ry="16" fill="#E6A556" />
              <circle cx="142" cy="84" r="8" fill="#E46848" />
              <circle cx="176" cy="86" r="8" fill="#E46848" />
            </>
          ) : (
            <>
              <rect x="106" y="84" width="108" height="26" fill="#E36949" />
              <ellipse cx="160" cy="84" rx="54" ry="16" fill="#EC7A5C" />
            </>
          )}
          {/* Tobiko pearls & chives */}
          <circle cx="152" cy="82" r="3" fill="#FF6B2B" />
          <circle cx="162" cy="80" r="3" fill="#FF6B2B" />
          <circle cx="168" cy="85" r="3" fill="#FF6B2B" />
          <line x1="146" y1="74" x2="174" y2="88" stroke="#4D7C32" strokeWidth="3" strokeLinecap="round" />
          <line x1="148" y1="88" x2="174" y2="74" stroke="#4D7C32" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    }

    // 3. SOUPES
    if (visual === 'soupe_poisson' || visual === 'soupe_chinoise') {
      const isPoisson = visual === 'soupe_poisson';
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <circle cx="160" cy="126" r="78" fill="#1C1B19" />
          <circle cx="160" cy="126" r="66" fill={isPoisson ? '#8C4C26' : '#D9A738'} />
          <circle cx="160" cy="126" r="60" fill={isPoisson ? '#A95D2D' : '#E8BA4C'} />
          {/* Noodles / vermicelli */}
          <path d="M120 116 Q150 96 184 120 T202 114" stroke="#F7ECCE" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M116 136 Q152 120 186 144" stroke="#F7ECCE" strokeWidth="4" fill="none" strokeLinecap="round" />
          {isPoisson ? (
            <>
              <circle cx="136" cy="108" r="10" fill="#E87454" />
              <circle cx="182" cy="134" r="11" fill="#F2E7D8" />
              <ellipse cx="144" cy="144" rx="11" ry="7" fill="#5A4535" />
            </>
          ) : (
            <>
              <rect x="132" y="102" width="22" height="12" rx="5" fill="#E2A466" />
              <rect x="166" y="132" width="22" height="12" rx="5" fill="#E2A466" />
              <circle cx="176" cy="106" r="9" fill="#3B6842" />
            </>
          )}
          {/* Scallions */}
          <circle cx="158" cy="124" r="3.5" fill="#70A348" />
          <circle cx="144" cy="126" r="3" fill="#70A348" />
          {/* Soup spoon */}
          <path d="M214 66 L252 40 L258 48 L220 74 Z" fill="#141413" />
        </svg>
      );
    }

    // 4. CROUSTY CHICKEN BOWL
    if (visual === 'crousty_chicken') {
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          {/* Kraft bowl */}
          <path d="M84 118 L236 118 L212 198 L108 198 Z" fill="#C7975E" stroke="#9B6E3A" strokeWidth="2" />
          <ellipse cx="160" cy="118" rx="76" ry="20" fill="#B68349" />
          {/* Kawa emblem on kraft bowl */}
          <circle cx="160" cy="162" r="16" fill="#141413" />
          <text x="160" y="167" textAnchor="middle" fill="#E8C57B" fontSize="11" fontFamily="serif" fontWeight="700">
            K
          </text>
          {/* Crispy chicken chunks mound */}
          {[
            { x: 118, y: 102, r: 15 },
            { x: 146, y: 92, r: 17 },
            { x: 176, y: 94, r: 16 },
            { x: 202, y: 104, r: 14 },
            { x: 136, y: 112, r: 15 },
            { x: 164, y: 110, r: 16 },
            { x: 188, y: 112, r: 14 },
          ].map((c, idx) => (
            <circle key={idx} cx={c.x} cy={c.y} r={c.r} fill={idx % 2 === 0 ? '#C96D2B' : '#DF8339'} stroke="#9A4C18" strokeWidth="1.5" />
          ))}
          {/* Japanese Mayo drizzle & crispy onions */}
          <path d="M112 104 Q138 86 162 104 T206 102" stroke="#FAF3D4" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <circle cx="152" cy="84" r="2.5" fill="#46732E" />
          <circle cx="172" cy="90" r="2.5" fill="#46732E" />
          <circle cx="160" cy="96" r="2.5" fill="#46732E" />
        </svg>
      );
    }

    // 5. WOK BOWLS
    if (visual.startsWith('wok_')) {
      const protein =
        visual === 'wok_boeuf'
          ? '#7B3F28'
          : visual === 'wok_gambas'
          ? '#E56D4E'
          : visual === 'wok_vege'
          ? '#65903E'
          : visual === 'wok_mixte'
          ? '#B85A34'
          : '#C97B42';
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <circle cx="160" cy="126" r="78" fill="#1E1D1B" />
          <circle cx="160" cy="126" r="68" fill="#2A2825" />
          <path d="M110 118 Q135 90 164 114 T214 112" stroke="#E6C27A" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M104 134 Q142 108 176 136 T216 128" stroke="#DFB668" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M116 148 Q154 126 186 152 T208 144" stroke="#E8C98B" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <rect x="130" y="98" width="22" height="6" rx="3" transform="rotate(-18 130 98)" fill="#E0633C" />
          <rect x="172" y="128" width="24" height="6" rx="3" transform="rotate(24 172 128)" fill="#6D9442" />
          <circle cx="144" cy="138" r="10" fill={protein} />
          <circle cx="184" cy="108" r="11" fill={protein} />
          {visual === 'wok_mixte' && <circle cx="162" cy="122" r="9" fill="#E56D4E" />}
          <circle cx="154" cy="104" r="3" fill="#82AE4E" />
          <circle cx="168" cy="144" r="3" fill="#82AE4E" />
          <line x1="210" y1="196" x2="278" y2="62" stroke="#181715" strokeWidth="4" strokeLinecap="round" />
          <line x1="224" y1="200" x2="288" y2="68" stroke="#2D2B27" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    }

    // 6. GOLDEN CRISPY
    if (visual.startsWith('crispy_')) {
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <ellipse cx="160" cy="124" rx="102" ry="72" fill="#1D1C1A" />
          {visual === 'crispy_boulettes' && (
            <g>
              <line x1="88" y1="168" x2="230" y2="82" stroke="#D6C29C" strokeWidth="4" strokeLinecap="round" />
              {[0, 1, 2, 3].map((i) => (
                <circle key={i} cx={116 + i * 30} cy={150 - i * 18} r="16" fill="#C9732A" stroke="#E5984E" strokeWidth="2" />
              ))}
            </g>
          )}
          {visual === 'crispy_nems' && (
            <g>
              <rect x="92" y="88" width="118" height="32" rx="14" transform="rotate(-14 92 88)" fill="#D99438" stroke="#F0BE68" strokeWidth="2" />
              <rect x="110" y="132" width="118" height="32" rx="14" transform="rotate(-10 110 132)" fill="#C9822C" stroke="#E8B258" strokeWidth="2" />
              <circle cx="218" cy="146" r="14" fill="#B91C1C" />
            </g>
          )}
          {visual === 'crispy_gambas' && (
            <g>
              {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(${86 + i * 44}, ${134 - (i % 2) * 20}) rotate(-28)`}>
                  <rect x="-12" y="-30" width="24" height="58" rx="11" fill="#DE8E35" stroke="#F4C068" strokeWidth="2" />
                  <path d="M-8 26 L0 38 L8 26 Z" fill="#E36246" />
                </g>
              ))}
            </g>
          )}
        </svg>
      );
    }

    // 7. SASHIMI
    if (visual.startsWith('sashimi_')) {
      const isFlambed = visual === 'sashimi_flambed';
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <rect x="44" y="64" width="232" height="112" rx="10" fill="#1B1A18" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${74 + i * 44}, 88) rotate(-14)`}>
              <rect x="0" y="0" width="38" height="64" rx="8" fill={isFlambed ? '#D46944' : '#EE7652'} />
              {isFlambed && <rect x="0" y="0" width="38" height="10" rx="4" fill="#63301F" opacity="0.7" />}
              <line x1="6" y1="18" x2="32" y2="28" stroke="#F8BCA6" strokeWidth="2" />
              <line x1="6" y1="36" x2="32" y2="46" stroke="#F8BCA6" strokeWidth="2" />
            </g>
          ))}
        </svg>
      );
    }

    // 8. PIZZA SUSHI
    if (visual.startsWith('pizza_')) {
      const topping =
        visual === 'pizza_mozza'
          ? '#F6EFE2'
          : visual === 'pizza_cuit'
          ? '#DF7E58'
          : '#E86949';
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <circle cx="160" cy="124" r="82" fill="#1C1B19" />
          {/* Crisp square rice base + sushi pizza layer */}
          <rect x="98" y="68" width="124" height="112" rx="10" fill="#D59A45" />
          <rect x="104" y="74" width="112" height="100" rx="8" fill="#F4F0E6" />
          <rect x="110" y="80" width="100" height="88" rx="6" fill={topping} />
          {/* 8-piece grid cuts */}
          <line x1="160" y1="74" x2="160" y2="174" stroke="#1C1B19" strokeWidth="2" />
          <line x1="104" y1="124" x2="216" y2="124" stroke="#1C1B19" strokeWidth="2" />
          <line x1="108" y1="78" x2="212" y2="170" stroke="#1C1B19" strokeWidth="1.5" opacity="0.5" />
          <line x1="212" y1="78" x2="108" y2="170" stroke="#1C1B19" strokeWidth="1.5" opacity="0.5" />
          {/* Tobiko & avocado accents */}
          <circle cx="138" cy="104" r="6" fill="#7EA64B" />
          <circle cx="182" cy="144" r="6" fill="#7EA64B" />
          <circle cx="160" cy="124" r="9" fill="#FF6B2B" />
        </svg>
      );
    }

    // 9. FRY ROLLS
    if (visual.startsWith('fry_')) {
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <rect x="44" y="58" width="232" height="124" rx="12" fill="#1E1D1B" />
          {[96, 138, 180, 222].map((x, idx) => (
            <g key={idx} transform={`translate(${x}, 120)`}>
              <circle cx="0" cy="0" r="21" fill="#D5923A" stroke="#F0BE68" strokeWidth="3.5" />
              <circle cx="0" cy="0" r="14" fill="#F4F0E6" />
              <circle cx="0" cy="0" r="7" fill={visual === 'fry_yummy' ? '#F2B830' : '#E46848'} />
            </g>
          ))}
          <path d="M84 102 Q160 88 236 106" stroke="#623418" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </svg>
      );
    }

    // 10. ASSORTIMENTS (PLATTERS)
    if (visual.startsWith('assort_')) {
      const cols =
        visual === 'assort_f'
          ? 6
          : visual === 'assort_e'
          ? 5
          : visual === 'assort_d'
          ? 4
          : visual === 'assort_c'
          ? 4
          : 3;
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <rect x="36" y="40" width="248" height="160" rx="12" fill="#182C22" stroke="#365242" strokeWidth="2" />
          {Array.from({ length: cols }).map((_, cIdx) => {
            const x = 64 + cIdx * (192 / Math.max(cols - 1, 1));
            return (
              <g key={cIdx}>
                <rect x={x - 14} y="62" width="28" height="16" rx="6" fill="#E46848" />
                <circle cx={x} cy="116" r="15" fill="#F5F2EB" stroke="#1E2420" strokeWidth="3" />
                <circle cx={x} cy="116" r="6" fill="#E46848" />
                <circle cx={x} cy="162" r="15" fill="#F5F2EB" stroke="#6E9142" strokeWidth="3" />
                <circle cx={x} cy="162" r="6" fill="#DF9E46" />
              </g>
            );
          })}
        </svg>
      );
    }

    // 11. DESSERTS
    if (visual.startsWith('dessert_')) {
      if (visual === 'dessert_nutella_banane') {
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <rect x="52" y="64" width="216" height="112" rx="14" fill="#FFFFFF" stroke="#DDD8CE" strokeWidth="2" />
            {[96, 138, 180, 222].map((x, idx) => (
              <g key={idx} transform={`translate(${x}, 120)`}>
                <circle cx="0" cy="0" r="20" fill="#EFE0BD" stroke="#C89F62" strokeWidth="3" />
                <circle cx="0" cy="0" r="12" fill="#F5D971" />
                <circle cx="0" cy="0" r="6" fill="#4A2816" />
              </g>
            ))}
            <path d="M84 104 Q160 132 236 102" stroke="#4A2816" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </svg>
        );
      }
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <circle cx="160" cy="130" r="76" fill="#FFFFFF" stroke="#DCD6CC" strokeWidth="2" />
          {/* Pie slice */}
          <path d="M98 150 L218 150 L204 104 L108 122 Z" fill="#C98E4A" />
          <path d="M104 122 L206 102 L204 90 L106 110 Z" fill="#8C5320" />
          <path d="M106 110 Q156 68 206 90 Z" fill="#FAF6ED" />
          <circle cx="156" cy="96" r="8" fill="#F5D971" />
          <path d="M126 98 Q160 88 186 98" stroke="#6E3E14" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    }

    // 12. MOCKTAILS & DRINKS
    if (visual.startsWith('mocktail_') || visual.startsWith('drink_')) {
      if (visual === 'drink_cafe') {
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <circle cx="160" cy="134" r="64" fill="#FFFFFF" stroke="#D5D0C5" strokeWidth="2" />
            <circle cx="160" cy="126" r="42" fill="#FBF9F4" stroke="#C5BEB2" strokeWidth="2" />
            <circle cx="160" cy="126" r="32" fill="#4E2D1A" />
            <ellipse cx="152" cy="118" rx="14" ry="8" fill="#A67449" opacity="0.6" />
          </svg>
        );
      }
      if (visual === 'drink_eau') {
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <rect x="134" y="44" width="52" height="16" rx="4" fill="#2563EB" />
            <rect x="122" y="60" width="76" height="136" rx="18" fill="#DCEEFB" stroke="#93C5FD" strokeWidth="2" />
            <rect x="122" y="106" width="76" height="44" fill="#143628" />
            <text x="160" y="132" textAnchor="middle" fill="#E8C57B" fontSize="12" fontFamily="serif" fontWeight="700">
              KAWA
            </text>
          </svg>
        );
      }
      if (visual === 'drink_soda') {
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
            <rect width="320" height="240" fill="#ECEAE4" />
            <rect x="122" y="54" width="76" height="138" rx="14" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="2" />
            <rect x="126" y="48" width="68" height="10" rx="4" fill="#D4D4D8" />
            <rect x="126" y="186" width="68" height="8" rx="4" fill="#D4D4D8" />
            <path d="M132 120 Q160 102 188 124" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" />
          </svg>
        );
      }

      const colorMap: Record<string, [string, string]> = {
        mocktail_sakura: ['#E11D48', '#FB7185'],
        mocktail_matcha: ['#4D7C0F', '#E7E5E4'],
        mocktail_citron_gingembre: ['#EAB308', '#FEF08A'],
        mocktail_mojito: ['#84CC16', '#ECFCCB'],
        mocktail_orange: ['#EA580C', '#FB923C'],
        drink_ice_latte: ['#78350F', '#F5E6D3'],
      };
      const [topC, botC] = colorMap[visual] ?? ['#E11D48', '#FB7185'];

      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
          <rect width="320" height="240" fill="#ECEAE4" />
          <ellipse cx="160" cy="196" rx="68" ry="12" fill="#DBD8D0" />
          <path d="M122 58 L198 58 L188 194 L132 194 Z" fill="#FFFFFF" fillOpacity="0.65" stroke="#C5C2B8" strokeWidth="2" />
          <defs>
            <linearGradient id={`grad-${visual}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={topC} />
              <stop offset="100%" stopColor={botC} />
            </linearGradient>
          </defs>
          <path d="M126 84 L194 84 L186 188 L134 188 Z" fill={`url(#grad-${visual})`} opacity="0.92" />
          <rect x="140" y="96" width="18" height="18" rx="4" transform="rotate(-12 140 96)" fill="#FFFFFF" fillOpacity="0.35" />
          <rect x="162" y="108" width="18" height="18" rx="4" transform="rotate(14 162 108)" fill="#FFFFFF" fillOpacity="0.35" />
          <circle cx="194" cy="64" r="16" fill={visual === 'mocktail_mojito' ? '#65A30D' : '#F2B830'} stroke="#F8E29B" strokeWidth="2.5" />
          <path d="M148 78 Q134 56 154 48 Q166 64 148 78 Z" fill="#4E7A38" />
          <line x1="158" y1="184" x2="132" y2="30" stroke="#1C1B19" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    }

    // 13. ROLLS, MAKIS & FUTOMAKI (every single flavor gets distinct interior colors!)
    const rollPalette: Record<string, { outer: string; fill1: string; fill2: string }> = {
      cali_spicy: { outer: '#E0603E', fill1: '#E46848', fill2: '#F5E7CE' },
      cali_flambee: { outer: '#C66742', fill1: '#7EA64B', fill2: '#F4EFE6' },
      cali_cream_cheese: { outer: '#FF6B2B', fill1: '#E46848', fill2: '#F4EFE6' },
      cali_saumon_avocat: { outer: '#D5B284', fill1: '#E46848', fill2: '#7EA64B' },
      cali_saumon_cheese: { outer: '#E5C48D', fill1: '#E46848', fill2: '#FAF6ED' },
      cali_ebi_fry: { outer: '#D99B4E', fill1: '#DF8E42', fill2: '#7EA64B' },
      cali_saumon_cuit: { outer: '#FF6B2B', fill1: '#D57858', fill2: '#7EA64B' },
      kawa_creamy_yuzu: { outer: '#6D8C3F', fill1: '#E46848', fill2: '#F5D971' },
      kawa_gambas: { outer: '#FF6B2B', fill1: '#DF8E42', fill2: '#7EA64B' },
      kawa_saumon_cuit: { outer: '#D5B284', fill1: '#D57858', fill2: '#F4EFE6' },
      maki_saumon: { outer: '#1C221E', fill1: '#E46848', fill2: '#E46848' },
      maki_avocat: { outer: '#1C221E', fill1: '#7EA64B', fill2: '#9AC264' },
      maki_gambas: { outer: '#1C221E', fill1: '#DF8E42', fill2: '#F2B868' },
      maki_mangue: { outer: '#1C221E', fill1: '#F2B830', fill2: '#F7D05E' },
      maki_surimi: { outer: '#1C221E', fill1: '#F26C57', fill2: '#FAF6ED' },
      maki_saumon_cheese: { outer: '#1C221E', fill1: '#E46848', fill2: '#FAF6ED' },
      maki_concombre: { outer: '#1C221E', fill1: '#538E3E', fill2: '#B6D99C' },
      maki_saumon_avocat: { outer: '#1C221E', fill1: '#E46848', fill2: '#7EA64B' },
      futo_saumon: { outer: '#1C221E', fill1: '#E46848', fill2: '#7EA64B' },
      futo_gambas: { outer: '#1C221E', fill1: '#DF8E42', fill2: '#7EA64B' },
      futo_vege: { outer: '#1C221E', fill1: '#7EA64B', fill2: '#B6D99C' },
    };

    const p = rollPalette[visual] ?? { outer: '#1C221E', fill1: '#E46848', fill2: '#7EA64B' };
    const isFutomaki = visual.startsWith('futo_');
    const isMaki = visual.startsWith('maki_');

    return (
      <svg viewBox="0 0 320 240" className="w-full h-full" role="img" aria-label={title}>
        <rect width="320" height="240" fill="#ECEAE4" />
        <rect x="46" y="58" width="228" height="124" rx="12" fill="#1C1B19" />
        {(isFutomaki
          ? [
              { x: 96, y: 120 },
              { x: 160, y: 120 },
              { x: 224, y: 120 },
            ]
          : isMaki
          ? [
              { x: 102, y: 94 },
              { x: 160, y: 94 },
              { x: 218, y: 94 },
              { x: 102, y: 146 },
              { x: 160, y: 146 },
              { x: 218, y: 146 },
            ]
          : [
              { x: 88, y: 120 },
              { x: 136, y: 120 },
              { x: 184, y: 120 },
              { x: 232, y: 120 },
            ]
        ).map((pos, idx) => (
          <g key={idx} transform={`translate(${pos.x}, ${pos.y})`}>
            <circle
              cx="0"
              cy="0"
              r={isFutomaki ? 26 : 20}
              fill="#F5F2EB"
              stroke={p.outer}
              strokeWidth={isMaki || isFutomaki ? 4 : 4}
            />
            <circle cx="0" cy="0" r={isFutomaki ? 17 : 12} fill="#1E2420" />
            <circle cx="-3" cy="-2" r={isFutomaki ? 7 : 5} fill={p.fill1} />
            <circle cx="4" cy="3" r={isFutomaki ? 6 : 4} fill={p.fill2} />
          </g>
        ))}
      </svg>
    );
  };

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECEAE4]">
      {renderArtwork()}
    </div>
  );
};
