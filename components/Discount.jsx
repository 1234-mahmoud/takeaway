"use client";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

const Discount = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const cards = [
    {
      image: "o1.jpg",
      title: lang === "ar" ? "خميس لذيذ" : "Tasty Thursdays",
      discount: "20",
    },
    {
      image: "o2.jpg",
      title: lang === "ar" ? "أيام البيتزا" : "Pizza Days",
      discount: "15",
    },
  ];

  return (
    <section className="py-24 bg-white text-white ">
      <div className="max-w-[1200px] mx-auto">
        <div className="container grid lg:grid-cols-2 gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-gray-800 p-8 flex gap-6 items-center rounded-md group flex-wrap justify-center`}
            >
              <div className="w-42 rounded-full overflow-hidden border-amber-400 border-4">
                <img
                  src={card.image}
                  alt=""
                  className="w-full group-hover:scale-110 duration-300"
                />
              </div>
              <div>
                <div className="font-bold text-2xl">{card.title}</div>
                <div className="text-5xl mt-2 mb-4">
                  {card.discount}%{" "}
                  <span className="text-2xl inline-block">
                    {lang === "ar" ? "خصم" : "off"}
                  </span>
                </div>
                <Button className="flex items-center gap-3">
                  {lang === "ar" ? "اطلب الآن" : "Order Now"} <FaShoppingCart />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discount;
