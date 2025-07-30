"use client";
import Image from "next/image";
import Link from "next/link";
import { Michroma } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const AboutComp = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <div
      className={`w-full max-w-[1320px] h-full  flex justify-center items-center gap-[40px]
    py-[100px] mx-auto
    max-md:flex-col max-md:p-0
    `}
    >
      <div
        className={`img relative overflow-hidden w-full max-w-[400px] h-[400px]`}
      >
        <Image
          src="/meal.jpg"
          alt="meal pic"
          fill
          className={`hover:scale-125 hover:rotate-12 transition-all duration-500 ease-in-out`}
        />
      </div>
      <div
        className={` w-full max-w-[400px] h-[400px] text-white
        flex flex-col gap-[30px] max-md:p-[10px]
        `}
      >
        <p
          className={`${michroma.className} text-3xl leading-[50px] lg:text-2xl lg:leading-[40px] tracking-widest
        
        `}
        >
          {t.about.title}
        </p>
        <p className={`font-sans leading-[28px] tracking-wider`}>
          {t.about.text}
        </p>
        <button
          className={`w-[150px] h-[40px] bg-yellow-500 text-white text-[16px]
            rounded-2xl hover:bg-amber-700 transition-all duration-500 ease-in-out
            `}
        >
          <Link href="/">{t.about.readMore}</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutComp;
