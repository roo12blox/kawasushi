import { useState } from 'react';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocationBookingSection } from './components/LocationBookingSection';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { MENU_ITEMS } from './data/menuData';
import { CartItem, FulfillmentMode, Language, MenuItem } from './types/restaurant';

const DUO_COMBO_ITEM: MenuItem = {
  id: 'formule-duo-kawa',
  category: 'assortiments',
  subCategory: { fr: 'Formule Duo', en: 'Duo Combo' },
  visual: 'assort_c',
  priceMad: 160,
  pieces: 20,
  name: {
    fr: 'Formule Duo Kawa (Assortiment C 20 pcs + 2 Sakura Fresh)',
    en: 'Kawa Duo Combo (20-pc Platter C + 2 Sakura Fresh)',
  },
  description: {
    fr: 'Assortiment C 20 pièces et 2 Mocktails Sakura Fresh.',
    en: '20-piece Platter C paired with 2 Sakura Fresh Mocktails.',
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [fulfillment, setFulfillment] = useState<FulfillmentMode>('delivery');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const totalCount = cart.reduce((sum, entry) => sum + entry.quantity, 0);

  const handleAddItem = (item: MenuItem, selectedBase?: string) => {
    const cartKey = selectedBase ? `${item.id}:${selectedBase}` : item.id;
    setCart((prev) => {
      const existing = prev.find((c) => c.cartKey === cartKey);
      if (existing) {
        return prev.map((c) =>
          c.cartKey === cartKey ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { cartKey, item, selectedBase, quantity: 1 }];
    });
  };

  const handleUpdateQty = (cartKey: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.cartKey === cartKey ? { ...c, quantity: c.quantity + delta } : c
        )
        .filter((c) => c.quantity > 0)
    );
  };

  const handleRemoveItem = (cartKey: string) => {
    setCart((prev) => prev.filter((c) => c.cartKey !== cartKey));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleQuickAddAssortimentC = () => {
    const assortC = MENU_ITEMS.find((m) => m.id === 'assortiment-c');
    if (assortC) {
      handleAddItem(assortC);
      setCartOpen(true);
    }
  };

  const handleAddDuoFormule = () => {
    handleAddItem(DUO_COMBO_ITEM);
    setCartOpen(true);
  };

  const handleScrollToBooking = () => {
    const el = document.getElementById('adresse');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#141413]">
      <Header
        lang={lang}
        cartCount={totalCount}
        onOpenCart={() => setCartOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          lang={lang}
          onQuickAddAssortimentC={handleQuickAddAssortimentC}
          onScrollToBooking={handleScrollToBooking}
        />

        <MenuSection
          lang={lang}
          cart={cart}
          fulfillment={fulfillment}
          onChangeFulfillment={setFulfillment}
          onAddItem={handleAddItem}
          onUpdateQty={handleUpdateQty}
          onAddDuoFormule={handleAddDuoFormule}
        />

        <ReviewsSection
          lang={lang}
          onScrollToBooking={handleScrollToBooking}
        />

        <LocationBookingSection lang={lang} />
      </main>

      <Footer lang={lang} onChangeLang={setLang} />

      <CartDrawer
        isOpen={cartOpen}
        lang={lang}
        cart={cart}
        fulfillment={fulfillment}
        onChangeFulfillment={setFulfillment}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onAddItem={handleAddItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
