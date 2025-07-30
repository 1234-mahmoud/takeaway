"use client";

import { useCart } from "@/contexts/CartContext";
import Button from "./Button";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

// Cart item card component
function CartItemCard({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="bg-[var(--surface-dark)] text-white rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-[var(--neutral-200)] p-6 flex justify-center items-center h-[180px] rounded-bl-4xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-[120px] group-hover:scale-110 duration-300"
        />
      </div>
      <div className="p-6">
        <p className="font-bold text-xl mb-2">{item.title}</p>
        <p className="text-[var(--neutral-300)] mb-3">{item.description}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold">${item.price}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="bg-[var(--secondary)] hover:bg-[var(--secondary-light)] text-white p-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FaMinus size={12} />
            </button>
            <span className="px-3 py-1 bg-[var(--neutral-600)] rounded-full font-bold">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="bg-[var(--secondary)] hover:bg-[var(--secondary-light)] text-white p-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[var(--secondary)]">
            Total: ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={handleRemove}
            className="bg-[var(--error)] hover:bg-red-600 text-white p-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <FaTrash size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Cart component
export default function Cart() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const handleClearCart = () => {
    clearCart();
  };

  if (items.length === 0) {
    return (
      <section className="py-24 px-4 bg-white text-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t.cart.title}
          </h2>
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">{t.cart.empty}</p>
            <Button className="font-bold text-white px-8 py-2">
              {t.cart.continue}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-white text-black">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.cart.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="bg-[var(--surface-dark)] text-white rounded-2xl p-6 max-w-md mx-auto shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">{t.cart.totalItems}</span>
            <span className="text-xl">
              {items.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">{t.cart.totalPrice}</span>
            <span className="text-2xl font-bold text-[var(--secondary)]">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          <div className="flex gap-4">
            <Button variant="accent" className="flex-1 font-bold py-3" onClick={() => router.push('/checkout')}>
              {t.cart.proceed}
            </Button>
            <Button
              onClick={handleClearCart}
              variant="outline"
              className="font-bold py-3 border-[var(--error)] text-[var(--error)] hover:bg-[var(--error)] hover:text-white"
            >
              {t.cart.clear}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 