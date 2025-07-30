"use client";

import { useSearch } from "@/contexts/SearchContext";
import { FaSearch, FaTimes, FaCartPlus } from "react-icons/fa";
import { useCart } from "@/contexts/CartContext";
import Button from "./Button";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

export default function SearchModal() {
  const {
    searchQuery,
    isSearchOpen,
    searchResults,
    handleSearch,
    closeSearch,
    clearSearch,
  } = useSearch();

  const { addToCart } = useCart();
  const { lang } = useLanguage();
  const t = translations[lang];

  // Handle ESC key to close search
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeSearch]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Header */}
        <div className="p-6 border-b border-[var(--neutral-200)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-[var(--primary)]">
              {lang === "ar" ? "البحث في القائمة" : "Search Menu"}
            </h2>
            <button
              onClick={closeSearch}
              className="p-2 hover:bg-[var(--neutral-100)] rounded-full transition-colors"
            >
              <FaTimes size={20} className="text-[var(--text-secondary)]" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={
                lang === "ar"
                  ? "ابحث عن برجر، بيتزا، باستا..."
                  : "Search for burgers, pizza, pasta..."
              }
              className="w-full pl-10 pr-4 py-3 border border-[var(--neutral-300)] rounded-lg focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <FaTimes size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto max-h-[60vh]">
          {searchQuery && searchResults.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-[var(--text-secondary)] text-lg">
                {lang === "ar" ? "لم يتم العثور على عناصر" : "No items found"}
              </p>
              <p className="text-[var(--text-muted)] mt-2">
                {lang === "ar"
                  ? "جرب البحث بكلمات مختلفة"
                  : "Try searching for different keywords"}
              </p>
            </div>
          ) : searchQuery && searchResults.length > 0 ? (
            <div className="p-6">
              <p className="text-[var(--text-secondary)] mb-4">
                {lang === "ar"
                  ? `تم العثور على ${searchResults.length} عنصر${
                      searchResults.length !== 1 ? "ات" : ""
                    }`
                  : `Found ${searchResults.length} item${
                      searchResults.length !== 1 ? "s" : ""
                    }`}
              </p>
              <div className="space-y-4">
                {searchResults.map((item) => {
                  // Use Arabic text if language is Arabic
                  const title = lang === "ar" ? item.titleAr : item.title;
                  const description =
                    lang === "ar" ? item.descriptionAr : item.description;
                  const category =
                    lang === "ar"
                      ? t.menu.categories[item.category]
                      : item.category;

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 border border-[var(--neutral-200)] rounded-lg hover:bg-[var(--neutral-50)] transition-all"
                    >
                      <div className="w-16 h-16 bg-[var(--neutral-200)] rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[var(--text-primary)]">
                          {title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                          {description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[var(--secondary)] font-bold">
                            ${item.price}
                          </span>
                          <span className="text-xs bg-[var(--primary)] text-white px-2 py-1 rounded-full capitalize">
                            {category}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="secondary"
                        onClick={() => handleAddToCart(item)}
                        className="flex-shrink-0"
                      >
                        <FaCartPlus size={16} />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <FaSearch
                size={48}
                className="mx-auto text-[var(--neutral-300)] mb-4"
              />
              <p className="text-[var(--text-secondary)] text-lg">
                {lang === "ar"
                  ? "ابحث عن أطباقك المفضلة"
                  : "Search for your favorite dishes"}
              </p>
              <p className="text-[var(--text-muted)] mt-2">
                {lang === "ar"
                  ? "جرب البحث عن برجر، بيتزا، باستا، أو بطاطس"
                  : "Try searching for burgers, pizza, pasta, or fries"}
              </p>
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-6 border-t border-[var(--neutral-200)] bg-[var(--neutral-50)]">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--text-muted)]">
              {lang === "ar" ? "اضغط" : "Press"}{" "}
              <kbd className="px-2 py-1 bg-[var(--neutral-200)] rounded text-xs">
                ESC
              </kbd>{" "}
              {lang === "ar" ? "للإغلاق" : "to close"}
            </p>
            <Button variant="outline" onClick={closeSearch}>
              {lang === "ar" ? "إغلاق البحث" : "Close Search"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
