"use client";
import {
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

const contact = [
  {
    text: "Location",
    icon: <FaLocationArrow />,
    href: "",
  },
  {
    text: "Call +0123456789",
    icon: <FaPhone />,
    href: "tel:+123456789",
  },
  {
    text: "demo@gmail.com",
    icon: <FaMailBulk />,
    href: "mailto:demo@gmail.com",
  },
];

const socialMedia = [
  {
    icon: <FaFacebook />,
    href: "",
  },
  {
    icon: <FaTwitter />,
    href: "",
  },
  {
    icon: <FaLinkedin />,
    href: "",
  },
  {
    icon: <FaInstagram />,
    href: "",
  },
  {
    icon: <FaPinterest />,
    href: "",
  },
];

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const contact = [
    {
      text: t.footer.location,
      icon: <FaLocationArrow />,
      href: "",
    },
    {
      text: t.footer.call,
      icon: <FaPhone />,
      href: "tel:+123456789",
    },
    {
      text: t.footer.email,
      icon: <FaMailBulk />,
      href: "mailto:demo@gmail.com",
    },
  ];

  const socialMedia = [
    {
      icon: <FaFacebook />,
      href: "",
    },
    {
      icon: <FaTwitter />,
      href: "",
    },
    {
      icon: <FaLinkedin />,
      href: "",
    },
    {
      icon: <FaInstagram />,
      href: "",
    },
    {
      icon: <FaPinterest />,
      href: "",
    },
  ];

  return (
    <footer className="py-24 bg-[var(--surface-dark)] text-white w-full mt-auto shadow-xl">
      <div className="container">
        <div className=" grid md:grid-cols-3 gap-y-8">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-3">{t.footer.contactUs}</h3>
            <ul>
              {contact.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 hover:text-[var(--secondary)] duration-300 justify-center mb-2 transition-all"
                  >
                    <span>{link.icon}</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-xl mb-3">{t.footer.about}</h3>
            <p className="max-w-[400px] mx-auto">
              {t.footer.aboutText}
            </p>
            <ul className="mt-5 flex justify-center items-center gap-2">
              {socialMedia.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="bg-white p-2 inline-block text-[var(--primary)] text-xl rounded-full hover:text-[var(--secondary)] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-xl mb-3">{t.footer.openingHours}</h3>
            <p className="mb-6">{t.footer.everyday}</p>
            <p>{t.footer.hours}</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="mb-6">
            {t.footer.copyright}
          </p>
          <p>{t.footer.distributed}</p>
        </div>
      </div>
    </footer>
  );
}
