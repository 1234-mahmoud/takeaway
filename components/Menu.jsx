"use client";

import { useState } from "react";
import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";

const menu = [
  // Burger
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

  // Pizza
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

  // Pasta
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
  // Fries
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

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMeals = menu.filter(
    (cat) => activeCategory === "all" || cat.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-white text-black">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Menu
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize font-bold
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeals.map((meal, index) => (
            <div
              key={index}
              className={`bg-gray-800 text-white rounded-2xl overflow-hidden group`}
            >
              <div
                className={`bg-gray-300 p-10 flex justify-center items-center h-[220px] rounded-bl-4xl`}
              >
                <img
                  src={meal.image}
                  alt=""
                  className={`w-[150px] group-hover:scale-110 duration-300`}
                />
              </div>
              <div className="p-6">
                <p className="font-bold text-xl mb-2">{meal.title}</p>
                <p>{meal.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <p>${meal.price}</p>
                  <Button className="py-3">
                    <FaCartPlus size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className={`font-bold text-white px-8 py-2`}>
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
