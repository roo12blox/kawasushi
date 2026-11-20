import React, { useState } from 'react';
import { CheckCircle2, ExternalLink, MapPin, Navigation, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';
import { Language } from '../types/restaurant';

interface LocationBookingSectionProps {
  lang: Language;
}

export const LocationBookingSection: React.FC<LocationBookingSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('20:30');
  const [guests, setGuests] = useState('2');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/\s+/g, '');
    if (name.trim().length < 2) {
      setError(
        lang === 'fr'
          ? 'Veuillez indiquer votre nom complet.'
          : 'Please enter your full name.'
      );
      return;
    }
    if (!/^(\+212|0)[5-7]\d{8}$/.test(cleanedPhone) && cleanedPhone.length < 9) {
      setError(
        lang === 'fr'
          ? 'Veuillez saisir un numéro de téléphone valide (ex: 07 19 26 02 51).'
          : 'Please enter a valid phone number (e.g. 07 19 26 02 51).'
      );
      return;
    }

    setError('');
    const ref = `RES-KW-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
  };

  const whatsappBookingUrl = bookingRef
    ? `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
        `Bonjour Kawasushi Meknès, je souhaite confirmer ma réservation (${bookingRef}) :\n• Nom : ${name}\n• Téléphone : ${phone}\n• Date : ${date} à ${time}\n• Personnes : ${guests}${
          note ? `\n• Précision : ${note}` : ''
        }`
      )}`
    : '#';

  return (
    <section
      id="adresse"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/[0.08]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Address, Hours, Maps & Glovo Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="text-xs font-medium text-[#575652] mb-2">
              {lang === 'fr' ? 'Visiter ou commander' : 'Visit or order'}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413] mb-3">
              {lang === 'fr'
                ? 'Nous trouver à Riad Ismailia'
                : 'Find us in Riad Ismailia'}
            </h2>
            <p className="text-sm sm:text-base text-[#575652] leading-relaxed">
              {lang === 'fr'
                ? 'Accueil chaleureux sur place, commandes à emporter prêtes en 20 minutes ou livraison rapide sur Meknès.'
                : 'Warm dine-in service, takeaway ready in 20 minutes, or fast delivery across Meknès.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-black/[0.08] space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#B91C1C] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-[#575652] mb-0.5">
                  {lang === 'fr' ? 'Adresse complète' : 'Street address'}
                </p>
                <p className="text-sm font-semibold text-[#141413]">
                  {BUSINESS_INFO.address}
                </p>
                <p className="font-mono text-xs text-[#575652] mt-1">
                  Plus Code : {BUSINESS_INFO.plusCode}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-black/[0.06]">
              <Phone className="w-4 h-4 text-[#B91C1C] shrink-0 mt-1" aria-hidden="true" />
              <div className="space-y-1">
                <p className="text-xs font-medium text-[#575652]">
                  {lang === 'fr' ? 'Téléphone, WhatsApp & Instagram' : 'Phone, WhatsApp & Instagram'}
                </p>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="font-mono text-sm font-semibold tabular-nums text-[#141413] hover:text-[#B91C1C] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="text-[#575652]" aria-hidden="true">·</span>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#141413] hover:text-[#B91C1C] transition-colors"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </div>
                <p className="text-xs text-[#575652]">
                  {lang === 'fr' ? BUSINESS_INFO.hoursFr : BUSINESS_INFO.hoursEn}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex flex-wrap gap-2.5">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] text-xs font-semibold text-white bg-[#141413] hover:bg-[#B91C1C] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{lang === 'fr' ? 'Itinéraire Maps' : 'Directions'}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] text-xs font-semibold text-[#141413] border border-black/15 hover:border-black/35 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{lang === 'fr' ? 'Commander sur WhatsApp' : 'WhatsApp Order'}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={BUSINESS_INFO.glovoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[40px] text-xs font-semibold text-[#141413] border border-black/15 hover:border-black/35 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Glovo</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Table Reservation Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-black/[0.08]">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-semibold text-[#141413]">
                {lang === 'fr' ? 'Réserver une table' : 'Book a table'}
              </h3>
              <p className="text-sm text-[#575652] mt-1">
                {lang === 'fr'
                  ? 'Confirmation rapide pour vos dîners en couple, entre amis ou en famille.'
                  : 'Quick reservation request for couples, friends, or family dinners.'}
              </p>
            </div>

            {bookingRef ? (
              <div className="p-6 rounded-xl bg-[#EFEFEC] border border-black/10 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#141413] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-[#141413]">
                      {lang === 'fr'
                        ? `Demande enregistrée · Réf. ${bookingRef}`
                        : `Reservation request saved · Ref. ${bookingRef}`}
                    </p>
                    <p className="text-xs text-[#575652] mt-1">
                      {name} · {guests} {lang === 'fr' ? 'personne(s)' : 'guest(s)'} · {date}{' '}
                      {lang === 'fr' ? 'à' : 'at'} {time}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 min-h-[40px] text-xs font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    {lang === 'fr'
                      ? 'Confirmer par WhatsApp (07 19 26 02 51)'
                      : 'Confirm via WhatsApp (07 19 26 02 51)'}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingRef(null);
                      setNote('');
                    }}
                    className="px-4 py-2.5 min-h-[40px] text-xs font-medium text-[#575652] hover:text-[#141413] cursor-pointer"
                  >
                    {lang === 'fr' ? 'Nouvelle réservation' : 'New booking'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-medium text-[#141413] mb-1.5"
                    >
                      {lang === 'fr' ? 'Nom complet' : 'Full name'}
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'fr' ? 'Ex : Salma Benali' : 'e.g. Salma Benali'}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-[#F7F7F5] border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-medium text-[#141413] mb-1.5"
                    >
                      {lang === 'fr' ? 'Téléphone' : 'Phone number'}
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07 19 26 02 51"
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm font-mono bg-[#F7F7F5] border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-medium text-[#141413] mb-1.5"
                    >
                      {lang === 'fr' ? 'Date' : 'Date'}
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm font-mono bg-[#F7F7F5] border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-medium text-[#141413] mb-1.5"
                    >
                      {lang === 'fr' ? 'Heure' : 'Time'}
                    </label>
                    <select
                      id="res-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm font-mono bg-[#F7F7F5] border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                    >
                      {[
                        '12:30',
                        '13:30',
                        '19:00',
                        '19:30',
                        '20:00',
                        '20:30',
                        '21:00',
                        '21:30',
                        '22:00',
                        '22:30',
                        '23:00',
                      ].map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-medium text-[#141413] mb-1.5"
                    >
                      {lang === 'fr' ? 'Convives' : 'Guests'}
                    </label>
                    <select
                      id="res-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm font-mono bg-[#F7F7F5] border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                    >
                      {['1', '2', '3', '4', '5', '6', '8+'].map((g) => (
                        <option key={g} value={g}>
                          {g} {lang === 'fr' ? (g === '1' ? 'personne' : 'personnes') : 'guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="res-note"
                    className="block text-xs font-medium text-[#141413] mb-1.5"
                  >
                    {lang === 'fr' ? 'Précision (optionnel)' : 'Special requests (optional)'}
                  </label>
                  <input
                    id="res-note"
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={
                      lang === 'fr'
                        ? 'Anniversaire, table calme, allergies...'
                        : 'Birthday, quiet corner, allergies...'
                    }
                    className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-[#F7F7F5] border border-black/12 rounded-lg text-[#141413] focus:outline-none focus:border-[#B91C1C]"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                    {error}
                  </p>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[#575652]">
                    {lang === 'fr'
                      ? 'Aucune carte bancaire requise'
                      : 'No prepayment required'}
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]"
                  >
                    {lang === 'fr' ? 'Confirmer la réservation' : 'Request reservation'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
