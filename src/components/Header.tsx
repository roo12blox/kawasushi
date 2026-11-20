import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Language } from '../types/restaurant';

interface HeaderProps {
  lang: Language;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, cartCount, onOpenCart }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#menu', label: lang === 'fr' ? 'Menu' : 'Menu' },
    { href: '#formules', label: lang === 'fr' ? 'Formules' : 'Combos' },
    { href: '#avis', label: lang === 'fr' ? 'Avis' : 'Reviews' },
    { href: '#adresse', label: lang === 'fr' ? 'Adresse' : 'Location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F7F5]/95 backdrop-blur-sm border-b border-black/[0.07]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#"
          className="font-display text-2xl sm:text-[26px] font-semibold tracking-tight text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B91C1C]"
        >
          Kawasushi
        </a>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav
          aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#575652]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#141413] hover:underline underline-offset-4 decoration-[#B91C1C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B91C1C]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] text-xs font-semibold text-white bg-[#141413] hover:bg-[#B91C1C] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]"
          >
            <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="tabular-nums">
              {cartCount > 0
                ? lang === 'fr'
                  ? `Panier · ${cartCount}`
                  : `Order · ${cartCount}`
                : lang === 'fr'
                ? 'Commander'
                : 'Order'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-black/10 text-[#141413] hover:bg-black/5 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Navigation mobile"
          className="md:hidden border-t border-black/[0.07] bg-[#F7F7F5] px-4 py-3 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-2 text-sm font-medium text-[#141413] hover:text-[#B91C1C] rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
