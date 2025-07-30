"use client";
import { useCart } from "@/contexts/CartContext";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const mapRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    if (mapRef.current && window.google) {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
      });
    }
  }, []);

  if (orderPlaced) {
    return (
      <div className="container mx-auto my-24 p-8 bg-white rounded-2xl shadow-2xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          {t.checkout.thankYou}
        </h2>
        <p className="text-lg text-gray-700">{t.checkout.success}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-24 p-8 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary-light)] rounded-2xl shadow-2xl flex flex-col md:flex-row gap-12">
      {/* Cart Summary */}
      <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">
          {t.checkout.orderSummary}
        </h3>
        {items.length === 0 ? (
          <p className="text-gray-500">{t.checkout.empty}</p>
        ) : (
          <ul className="mb-4 divide-y divide-gray-200">
            {items.map((item) => {
              // Use Arabic text if language is Arabic
              const title = lang === "ar" ? item.titleAr : item.title;
              return (
                <li key={item.id} className="flex justify-between py-2">
                  <span>
                    {title} x {item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
        <div className="flex justify-between font-bold text-xl border-t pt-4">
          <span>{t.checkout.total}</span>
          <span className="text-[var(--secondary)]">
            ${getTotalPrice().toFixed(2)}
          </span>
        </div>
      </div>

      {/* Checkout Form */}
      <form
        className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-lg flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          setOrderPlaced(true);
          clearCart();
        }}
      >
        <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">
          {t.checkout.details}
        </h3>
        <input
          type="text"
          placeholder={t.checkout.fullName}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary)]"
        />
        <input
          type="tel"
          placeholder={t.checkout.phone}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary)]"
        />
        <input
          type="email"
          placeholder={t.checkout.email}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary)]"
        />
        <input
          type="number"
          placeholder={t.checkout.guests}
          min="1"
          max="20"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary)]"
        />
        <input
          type="datetime-local"
          placeholder={t.checkout.datetime}
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary)]"
        />
        <Button
          variant="primary"
          className="w-full py-3 text-lg font-bold"
          type="submit"
        >
          {t.checkout.placeOrder}
        </Button>
      </form>
    </div>
  );
}
