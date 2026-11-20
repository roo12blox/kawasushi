import React from 'react';
import { BUSINESS_INFO } from '../data/menuData';
import { Language } from '../types/restaurant';

interface FooterProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onChangeLang }) => {
  return (
    <footer className="border-t border-black/[0.08] bg-[#EFEFEC]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <span className="font-display text-2xl font-semibold text-[#141413]">
            Kawasushi
          </span>
          <p className="text-xs text-[#575652]">
            {BUSINESS_INFO.address} · {BUSINESS_INFO.phoneDisplay} ·{' '}
            {lang === 'fr' ? BUSINESS_INFO.hoursFr : BUSINESS_INFO.hoursEn}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-[#575652]">
          <a href="#menu" className="hover:text-[#141413] transition-colors">
            {lang === 'fr' ? 'La Carte' : 'Menu'}
          </a>
          <a href="#formules" className="hover:text-[#141413] transition-colors">
            {lang === 'fr' ? 'Formules' : 'Combos'}
          </a>
          <a href="#avis" className="hover:text-[#141413] transition-colors">
            {lang === 'fr' ? 'Avis' : 'Reviews'}
          </a>
          <a href="#adresse" className="hover:text-[#141413] transition-colors">
            {lang === 'fr' ? 'Réserver' : 'Book'}
          </a>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#141413] transition-colors"
          >
            {BUSINESS_INFO.instagramHandle}
          </a>
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#141413] transition-colors"
          >
            Maps
          </a>

          {/* Clean Bilingual Switcher */}
          <div className="inline-flex items-center border border-black/15 rounded-md overflow-hidden">
            <button
              type="button"
              onClick={() => onChangeLang('fr')}
              className={`px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors ${
                lang === 'fr'
                  ? 'bg-[#141413] text-white'
                  : 'bg-transparent text-[#575652] hover:text-[#141413]'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors ${
                lang === 'en'
                  ? 'bg-[#141413] text-white'
                  : 'bg-transparent text-[#575652] hover:text-[#141413]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
