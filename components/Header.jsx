"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useSearch } from "@/contexts/SearchContext";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

const navLinks = [
  { key: "home", href: "/" },
  { key: "menu", href: "/menu" },
  { key: "about", href: "/about" },
  { key: "bookTable", href: "/booking" },
  { key: "cart", href: "/cart" },
];

export default function Header() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const { getTotalItems } = useCart();
  const { openSearch } = useSearch();
  const { lang, toggleLang, setLanguage } = useLanguage();
  const t = translations[lang];

  return (
    <header className="absolute h-[60px] top-0 left-0 z-10 w-full bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] text-white shadow-lg">
      <div className="container flex justify-between items-center h-14">
        <Link
          href="/"
          className={`text-5xl font-bold
          bg-[url('/meal2.jpg')] bg-clip-text text-transparent
          `}
        >
          {t.brand}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-5">
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`uppercase hover:text-[var(--secondary)] duration-300 ${
                    path === link.href ? "text-[var(--secondary)]" : ""
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Icons - Desktop Only */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex gap-3 *:hover:text-[var(--secondary)]">
            <FaRegUser size={18} />
            <Link href="/cart" className="relative">
              <FaShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--secondary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              onClick={openSearch}
              className="hover:text-[var(--secondary)] transition-colors"
            >
              <IoSearch size={20} />
            </button>
          </div>
          <Button>{t.orderOnline}</Button>
          {/* Language Selector */}
          <select
            value={lang}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1 rounded bg-[var(--primary-light)] text-black font-bold border border-[var(--secondary)] focus:outline-none"
            style={{ direction: "ltr" }}
          >
            <option value="en">EN</option>
            <option value="ar">عربي</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-3">
          <Link href="/cart" className="relative">
            <FaShoppingCart size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--secondary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                {getTotalItems()}
              </span>
            )}
          </Link>
          <button
            onClick={openSearch}
            className="hover:text-[var(--secondary)] transition-colors"
          >
            <IoSearch size={20} />
          </button>
          {/* Language Selector Mobile */}
          <select
            value={lang}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1 rounded bg-[var(--primary-light)] text-black font-bold border border-[var(--secondary)] focus:outline-none"
            style={{ direction: "ltr" }}
          >
            <option value="en">EN</option>
            <option value="ar">عربي</option>
          </select>
          <button
            className="hover:text-[var(--secondary)] z-20"
            onClick={toggle}
          >
            <IoMenu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`sm:hidden fixed top-0 right-0 h-full w-[150px] bg-[var(--surface-dark)] z-10 transition-transform duration-500 ease-in-out px-4 pt-[50px] shadow-xl ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={`uppercase hover:text-[var(--secondary)] duration-300 ${
                  path === link.href ? "text-[var(--secondary)]" : ""
                }`}
                onClick={() => setShow(false)}
              >
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      {show && (
        <div
          className="fixed inset-0 z-[5] bg-black/30 backdrop-blur-sm"
          onClick={() => setShow(false)}
        />
      )}
    </header>
  );
}
