"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { usePathname } from "next/navigation";

const navLinks = [
  { text: "home", href: "/" },
  { text: "menu", href: "/menu" },
  { text: "about", href: "/about" },
  { text: "book table", href: "/booking" },
];

export default function Header() {
  const path = usePathname();

  return (
    <header>
      <div className={`container flex justify-between items-center h-14`}>
        <Link href={""} className="text-xl font-bold">
          Takeaway
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className={`uppercase hover:text-amber-400 duration-300
                              ${
                                path === link.href
                                  ? "text-amber-400"
                                  : undefined
                              }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex gap-3 *:hover:text-amber-400">
            <FaRegUser size={18} />
            <FaShoppingCart size={20} />
            <IoSearch size={20} />
          </div>
          <Button>Order Online</Button>
        </div>
        <button className=" lg:hidden hover:text-amber-400">
          <IoMenu size={30} />
        </button>
      </div>
    </header>
  );
}
