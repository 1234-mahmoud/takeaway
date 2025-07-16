"use client";

import { useState } from "react";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";

// Menu data
const menu = [
  {
    image: "f2.png",
    title: "Delicious Burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 15,
    category: "burger",
  },
  {
    image: "f7.png",
    title: "Tasty Burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 12,
    category: "burger",
  },
  {
    image: "f8.png",
    title: "Tasty Burger",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 14,
    category: "burger",
  },
  {
    image: "f1.png",
    title: "Delicious Pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 20,
    category: "pizza",
  },
  {
    image: "f3.png",
    title: "Delicious Pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 17,
    category: "pizza",
  },
  {
    image: "f6.png",
    title: "Delicious Pizza",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 15,
    category: "pizza",
  },
  {
    image: "f4.png",
    title: "Delicious Pasta",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 18,
    category: "pasta",
  },
  {
    image: "f9.png",
    title: "Delicious Pasta",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 10,
    category: "pasta",
  },
  {
    image: "f5.png",
    title: "French Fries",
    description:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 15,
    category: "fries",
  },
];

const categories = ["all", "burger", "pizza", "pasta", "fries"];

// Reusable category filter
function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-5 py-2 rounded-full capitalize font-bold transition-colors duration-300
            ${
              activeCategory === category
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// Reusable card for each menu item
function MenuCard({ item }) {
  return (
    <div className="bg-gray-800 text-white rounded-2xl overflow-hidden group">
      <div className="bg-gray-300 p-10 flex justify-center items-center h-[220px] rounded-bl-4xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-[150px] group-hover:scale-110 duration-300"
        />
      </div>
      <div className="p-6">
        <p className="font-bold text-xl mb-2">{item.title}</p>
        <p>{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <p>${item.price}</p>
          <Button className="py-3">
            <FaCartPlus size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main Menu component
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menu
      : menu.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-4 bg-white text-black">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Menu
        </h2>

        <CategoryFilter
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="font-bold text-white px-8 py-2">View More</Button>
        </div>
      </div>
    </section>
  );
}
