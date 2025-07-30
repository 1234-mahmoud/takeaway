"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageWrapper = ({ children }) => {
  const { lang } = useLanguage();

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`${lang === "ar" ? "font-arabic" : ""}`}
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: lang === "ar" ? "right" : "left",
      }}
    >
      {children}
    </div>
  );
};
