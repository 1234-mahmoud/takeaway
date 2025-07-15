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

  const [show,setShow] = useState(false);
  const toggle = ()=>{
    setShow(!show)
  }

  return (
    <header className={`absolute top-0 left-0 z-10 w-full text-white`}>
      <div className={`container flex justify-between items-center h-14`}>
        <Link href={""} className="text-xl font-bold">
          Takeaway
        </Link>
        <nav className={`relative`}>
          <ul className={`flex gap-5
          transition-all duration-500 ease-in-out
              max-sm:flex-col max-sm:bg-gray-800 max-sm:h-lvh max-sm:w-[150px]
              max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:pt-[50px] px-[10px]
           z-10
              ${show?`
              max-sm:translate-x-0
              `:'translate-x-[150px]'}
            `}>
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
        <button className=" lg:hidden hover:text-amber-400 z-10" onClick={toggle}>
          <IoMenu size={30} />
        </button>

      </div>
        {show &&(
        <div
          className="fixed inset-0 "
          onClick={() => setShow(false)}
        />
      )}
    </header>
  );
}
