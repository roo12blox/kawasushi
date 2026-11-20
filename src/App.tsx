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
  id: 'formule-duo-meknes',
  category: 'plateaux',
  visual: 'plateau_duo',
  priceMad: 245,
  pieces: 28,
  name: {
    fr: 'Formule Duo Meknès (Plateau 28 pcs + 2 Cocktails)',
    en: 'Meknès Duo Combo (28-pc Platter + 2 Cocktails)',
  },
  description: {
    fr: 'Plateau Duo 28 pièces et 2 Cocktails Aux Fruits Frais.',
    en: '28-piece Duo Platter paired with 2 Fresh Fruit Cocktails.',
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [fulfillment, setFulfillment] = useState<FulfillmentMode>('delivery');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const totalCount = cart.reduce((sum, entry) => sum + entry.quantity, 0);

  const handleAddItem = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQty = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.item.id === itemId ? { ...c, quantity: c.quantity + delta } : c
        )
        .filter((c) => c.quantity > 0)
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleQuickAddDuo = () => {
    const plateauDuo = MENU_ITEMS.find((m) => m.id === 'plateau-duo');
    if (plateauDuo) {
      handleAddItem(plateauDuo);
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
          onQuickAddDuo={handleQuickAddDuo}
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
