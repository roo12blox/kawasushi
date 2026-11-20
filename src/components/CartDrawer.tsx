import React, { useState } from 'react';
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/menuData';
import { CartItem, FulfillmentMode, Language, MenuItem } from '../types/restaurant';

interface CartDrawerProps {
  isOpen: boolean;
  lang: Language;
  cart: CartItem[];
  fulfillment: FulfillmentMode;
  onChangeFulfillment: (mode: FulfillmentMode) => void;
  onClose: () => void;
  onUpdateQty: (cartKey: string, delta: number) => void;
  onRemoveItem: (cartKey: string) => void;
  onAddItem: (item: MenuItem, selectedBase?: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  lang,
  cart,
  fulfillment,
  onChangeFulfillment,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onAddItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [error, setError] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    total: number;
    summaryText: string;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, c) => sum + c.item.priceMad * c.quantity, 0);
  const needsDeliveryFee =
    fulfillment === 'delivery' &&
    subtotal > 0 &&
    subtotal < BUSINESS_INFO.freeDeliveryThresholdMad;
  const deliveryFee = needsDeliveryFee ? BUSINESS_INFO.deliveryFeeMad : 0;
  const total = subtotal + deliveryFee;

  const hasDrink = cart.some((c) => c.item.category === 'desserts_drinks');
  const suggestedMocktail = MENU_ITEMS.find((m) => m.id === 'mocktail-sakura-fresh');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const cleanedPhone = customerPhone.replace(/\s+/g, '');
    if (customerName.trim().length < 2) {
      setError(
        lang === 'fr'
          ? 'Veuillez saisir votre nom.'
          : 'Please enter your name.'
      );
      return;
    }
    if (!/^(\+212|0)[5-7]\d{8}$/.test(cleanedPhone) && cleanedPhone.length < 9) {
      setError(
        lang === 'fr'
          ? 'Veuillez indiquer un numéro de téléphone marocain valide.'
          : 'Please provide a valid phone number.'
      );
      return;
    }
    if (fulfillment === 'delivery' && deliveryAddress.trim().length < 4) {
      setError(
        lang === 'fr'
          ? 'Veuillez indiquer votre quartier et adresse à Meknès.'
          : 'Please enter your delivery address in Meknès.'
      );
      return;
    }

    setError('');
    const orderId = `KW-${Math.floor(1000 + Math.random() * 9000)}`;
    const modeLabel =
      fulfillment === 'delivery'
        ? 'Livraison Meknès'
        : fulfillment === 'takeaway'
        ? 'Vente à emporter'
        : 'Repas sur place';
    const lines = cart
      .map(
        (c) =>
          `• ${c.quantity}x ${c.item.name.fr}${c.selectedBase ? ` (${c.selectedBase})` : ''} — ${
            c.item.priceMad * c.quantity
          } MAD`
      )
      .join('\n');

    const summaryText = `Nouvelle commande Kawasushi #${orderId}\nMode : ${modeLabel}\nClient : ${customerName} (${customerPhone})${
      fulfillment === 'delivery' ? `\nAdresse : ${deliveryAddress}` : ''
    }\n\nArticles :\n${lines}\n\nTotal à régler : ${total} MAD (Espèces)`;

    setConfirmedOrder({ orderId, total, summaryText });
    onClearCart();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'fr' ? 'Votre commande Kawasushi' : 'Your Kawasushi order'}
    >
      <div className="relative w-full max-w-md bg-[#F7F7F5] h-full flex flex-col border-l border-black/15 shadow-2xl">
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-white border-b border-black/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-[#B91C1C]" aria-hidden="true" />
            <h2 className="font-display text-2xl font-semibold text-[#141413]">
              {lang === 'fr' ? 'Votre commande' : 'Your order'}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              setConfirmedOrder(null);
              onClose();
            }}
            aria-label={lang === 'fr' ? 'Fermer le panier' : 'Close cart'}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 text-[#141413] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {confirmedOrder ? (
            <div className="p-6 rounded-xl bg-white border border-black/10 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#141413] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-base font-semibold text-[#141413]">
                    {lang === 'fr'
                      ? `Commande #${confirmedOrder.orderId} confirmée`
                      : `Order #${confirmedOrder.orderId} confirmed`}
                  </p>
                  <p className="text-xs text-[#575652] mt-1">
                    {lang === 'fr'
                      ? 'Préparation estimée : 20–35 minutes · Paiement à la réception.'
                      : 'Estimated preparation: 20–35 minutes · Pay on receipt.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#EFEFEC] font-mono text-xs text-[#141413] whitespace-pre-line leading-relaxed">
                {confirmedOrder.summaryText}
              </div>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  confirmedOrder.summaryText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors"
              >
                {lang === 'fr'
                  ? 'Envoyer la commande par WhatsApp'
                  : 'Send order via WhatsApp'}
              </a>

              <button
                type="button"
                onClick={() => {
                  setConfirmedOrder(null);
                  onClose();
                }}
                className="w-full py-2.5 text-xs font-medium text-[#575652] hover:text-[#141413] cursor-pointer"
              >
                {lang === 'fr' ? 'Retour à la carte' : 'Return to menu'}
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-12 text-center space-y-4">
              <p className="text-base font-medium text-[#141413]">
                {lang === 'fr' ? 'Votre panier est vide.' : 'Your basket is empty.'}
              </p>
              <p className="text-sm text-[#575652] max-w-xs mx-auto">
                {lang === 'fr'
                  ? 'Ajoutez nos Poke Bowls, California Rolls, Wok Bowls ou Assortiments Kawa.'
                  : 'Add our Poke Bowls, California Rolls, Wok Bowls, or Kawa Platters.'}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 min-h-[40px] text-xs font-semibold text-white bg-[#141413] rounded-lg hover:bg-[#B91C1C] transition-colors cursor-pointer"
              >
                {lang === 'fr' ? 'Parcourir la carte' : 'Browse menu'}
              </button>
            </div>
          ) : (
            <>
              {/* Fulfillment Mode Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#EFEFEC] border border-black/10 rounded-lg">
                {(
                  [
                    { id: 'delivery', fr: 'Livraison', en: 'Delivery' },
                    { id: 'takeaway', fr: 'À emporter', en: 'Takeaway' },
                    { id: 'dinein', fr: 'Sur place', en: 'Dine-in' },
                  ] as const
                ).map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onChangeFulfillment(m.id)}
                    className={`py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      fulfillment === m.id
                        ? 'bg-[#141413] text-white'
                        : 'text-[#575652] hover:text-[#141413]'
                    }`}
                  >
                    {lang === 'fr' ? m.fr : m.en}
                  </button>
                ))}
              </div>

              {/* Cart Items List */}
              <div className="space-y-3">
                {cart.map(({ cartKey, item, selectedBase, quantity }) => (
                  <div
                    key={cartKey}
                    className="p-4 rounded-xl bg-white border border-black/[0.08] flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#141413] truncate">
                        {item.name[lang]}
                      </p>
                      {selectedBase && (
                        <p className="text-[11px] font-medium text-[#102B1F]">
                          {selectedBase}
                        </p>
                      )}
                      <p className="font-mono text-xs tabular-nums text-[#575652] mt-0.5">
                        {item.priceMad} MAD × {quantity} ={' '}
                        <span className="text-[#141413] font-semibold">
                          {item.priceMad * quantity} MAD
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="inline-flex items-center bg-[#EFEFEC] rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQty(cartKey, -1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/10 text-[#141413] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-semibold tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(cartKey, 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/10 text-[#141413] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(cartKey)}
                        aria-label={`Remove ${item.name[lang]}`}
                        className="w-8 h-8 flex items-center justify-center text-[#575652] hover:text-[#B91C1C] cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Smart Drink Upsell */}
              {!hasDrink && suggestedMocktail && (
                <div className="p-4 rounded-xl bg-[#EFEFEC] border border-black/[0.07] flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-[#141413]">
                      {lang === 'fr'
                        ? 'Ajouter un Mocktail Sakura Fresh'
                        : 'Add a Sakura Fresh Mocktail'}
                    </p>
                    <p className="font-mono text-xs text-[#575652] tabular-nums">
                      + {suggestedMocktail.priceMad} MAD
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAddItem(suggestedMocktail)}
                    className="px-3 py-2 text-xs font-semibold text-white bg-[#141413] hover:bg-[#B91C1C] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    + {lang === 'fr' ? 'Ajouter' : 'Add'}
                  </button>
                </div>
              )}

              {/* Customer Checkout Form */}
              <form id="checkout-form" onSubmit={handlePlaceOrder} noValidate className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#575652]">
                  {lang === 'fr' ? 'Vos coordonnées' : 'Customer details'}
                </p>

                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={lang === 'fr' ? 'Votre nom complet' : 'Full name'}
                  className="w-full px-3.5 py-2.5 min-h-[42px] text-sm bg-white border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                />

                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder={
                    lang === 'fr'
                      ? 'Téléphone (ex : 06 12 34 56 78)'
                      : 'Phone (e.g. 06 12 34 56 78)'
                  }
                  className="w-full px-3.5 py-2.5 min-h-[42px] text-sm font-mono bg-white border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                />

                {fulfillment === 'delivery' && (
                  <input
                    type="text"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder={
                      lang === 'fr'
                        ? 'Quartier & adresse à Meknès (ex : Hamria, Rue...)'
                        : 'Neighborhood & street in Meknès'
                    }
                    className="w-full px-3.5 py-2.5 min-h-[42px] text-sm bg-white border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                  />
                )}

                {error && (
                  <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                    {error}
                  </p>
                )}
              </form>
            </>
          )}
        </div>

        {/* Sticky Drawer Footer Totals */}
        {!confirmedOrder && cart.length > 0 && (
          <div className="px-6 py-4 bg-white border-t border-black/[0.08] space-y-3">
            <div className="space-y-1 text-xs text-[#575652]">
              <div className="flex justify-between">
                <span>{lang === 'fr' ? 'Sous-total' : 'Subtotal'}</span>
                <span className="font-mono tabular-nums text-[#141413]">
                  {subtotal} MAD
                </span>
              </div>
              {fulfillment === 'delivery' && (
                <div className="flex justify-between">
                  <span>
                    {lang === 'fr'
                      ? `Livraison Meknès (gratuite dès ${BUSINESS_INFO.freeDeliveryThresholdMad} MAD)`
                      : `Meknès delivery (free over ${BUSINESS_INFO.freeDeliveryThresholdMad} MAD)`}
                  </span>
                  <span className="font-mono tabular-nums text-[#141413]">
                    {deliveryFee === 0
                      ? lang === 'fr'
                        ? 'Offerte'
                        : 'Free'
                      : `${deliveryFee} MAD`}
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-black/[0.06] text-sm font-semibold text-[#141413]">
                <span>{lang === 'fr' ? 'Total à régler' : 'Total due'}</span>
                <span className="font-mono tabular-nums">{total} MAD</span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="w-full py-3.5 min-h-[44px] text-sm font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'fr'
                ? `Valider la commande · ${total} MAD`
                : `Place order · ${total} MAD`}
            </button>
            <p className="text-[11px] text-center text-[#575652]">
              {lang === 'fr'
                ? 'Paiement en espèces à la livraison ou sur place'
                : 'Cash payment upon delivery or at the restaurant'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
