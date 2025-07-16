"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { text: "home", href: "/" },
  { text: "menu", href: "/menu" },
  { text: "about", href: "/about" },
  { text: "book table", href: "/booking" },
];

export default function Header() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <header className="absolute top-0 left-0 z-10 w-full text-white">
      <div className="container flex justify-between items-center h-14">
        <Link href="/" className={`text-5xl font-bold
          bg-[url('/meal2.jpg')] bg-clip-text text-transparent
          `}>
          Takeaway
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-5">
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className={`uppercase hover:text-amber-400 duration-300 ${
                    path === link.href ? "text-amber-400" : ""
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Icons - Desktop Only */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex gap-3 *:hover:text-amber-400">
            <FaRegUser size={18} />
            <FaShoppingCart size={20} />
            <IoSearch size={20} />
          </div>
          <Button>Order Online</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden hover:text-amber-400 z-20" onClick={toggle}>
          <IoMenu size={30} />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`sm:hidden fixed top-0 right-0 h-full w-[150px] bg-gray-800 z-10 transition-transform duration-500 ease-in-out px-4 pt-[50px] ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className={`uppercase hover:text-amber-400 duration-300 ${
                  path === link.href ? "text-amber-400" : ""
                }`}
                onClick={() => setShow(false)}
              >
                {link.text}
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
