"use client";

import { useState } from "react";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";
import menu from "@/data/data";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

const categories = ["all", "burger", "pizza", "pasta", "fries"];

// Reusable category filter
function CategoryFilter({ activeCategory, onChange }) {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <nav
      className="flex flex-wrap justify-center gap-4 mb-12"
      role="tablist"
      aria-label="Menu categories"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          role="tab"
          aria-selected={activeCategory === category}
          aria-controls={`menu-${category}`}
          className={`px-5 py-2 rounded-full capitalize font-bold transition-all duration-300 shadow-md
            ${
              activeCategory === category
                ? "bg-[var(--primary)] text-white shadow-lg"
                : "hover:bg-[var(--primary)] hover:text-white hover:shadow-lg"
            }`}
        >
          {t.menu.categories[category]}
        </button>
      ))}
    </nav>
  );
}

// Reusable card for each menu item
function MenuCard({ item }) {
  const { addToCart } = useCart();
  const { lang } = useLanguage();

  const handleAddToCart = () => {
    addToCart(item);
  };

  // Use Arabic text if language is Arabic
  const title = lang === "ar" ? item.titleAr : item.title;
  const description = lang === "ar" ? item.descriptionAr : item.description;

  return (
    <article className="bg-[var(--surface-dark)] text-white rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-[var(--neutral-200)] p-10 flex justify-center items-center h-[220px] rounded-bl-4xl">
        <img
          src={item.image}
          alt={`${title} - ${description}`}
          className="w-[150px] group-hover:scale-110 duration-300"
          loading="lazy"
          width="150"
          height="150"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-[var(--neutral-300)]">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-semibold">${item.price}</p>
          <Button
            variant="secondary"
            className="py-3"
            onClick={handleAddToCart}
            aria-label={`Add ${title} to cart`}
          >
            <FaCartPlus size={18} />
          </Button>
        </div>
      </div>
    </article>
  );
}

// Main Menu component
export default function Menu() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menu
      : menu.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-24 px-4 bg-white text-black"
      aria-labelledby="menu-title"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          id="menu-title"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t.menu.title}
        </h2>

        <CategoryFilter
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
          id={`menu-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
        >
          {filteredItems.map((item, index) => (
            <MenuCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" className="font-bold px-8 py-2">
            {t.menu.viewMore}
          </Button>
        </div>
      </div>
    </section>
  );
}
