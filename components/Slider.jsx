"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Lobster } from "next/font/google";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Slider = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const slides = [
    {
      title: lang === "ar" ? "هذا طعام سريع" : "This Is Fast Food",
      description:
        lang === "ar"
          ? "نقدم أفضل الوجبات السريعة الطازجة والمشوية على الفحم. طعامنا مصنوع من مكونات طازجة وعالية الجودة لضمان تجربة طعام استثنائية."
          : "We serve the best fresh and charcoal-grilled fast food. Our food is made with fresh, high-quality ingredients to ensure an exceptional dining experience.",
    },
    {
      title: lang === "ar" ? "طعام لذيذ" : "Delicious Food",
      description:
        lang === "ar"
          ? "اكتشف قائمة متنوعة من الأطباق اللذيذة المصنوعة من أفضل المكونات. كل وجبة مصممة لتجلب لك تجربة طعام لا تُنسى."
          : "Discover a diverse menu of delicious dishes made with the finest ingredients. Every meal is designed to bring you an unforgettable dining experience.",
    },
    {
      title: lang === "ar" ? "خدمة سريعة" : "Fast Service",
      description:
        lang === "ar"
          ? "نفخر بتقديم خدمة سريعة ومهنية. فريقنا متخصص في تقديم طعامك ساخناً وطازجاً في أسرع وقت ممكن."
          : "We pride ourselves on fast and professional service. Our team is dedicated to serving your food hot and fresh as quickly as possible.",
    },
    {
      title: lang === "ar" ? "جودة عالية" : "High Quality",
      description:
        lang === "ar"
          ? "نستخدم فقط أفضل المكونات الطازجة لضمان أعلى جودة في كل وجبة. التزامنا هو تقديم طعام صحي ولذيذ لعملائنا."
          : "We use only the finest fresh ingredients to ensure the highest quality in every meal. Our commitment is to serve healthy and delicious food to our customers.",
    },
  ];

  return (
    <div
      className={`w-full h-lvh bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] text-white relative shadow-2xl
        `}
    >
      <div
        className={` absolute bottom-0 right-0 
          w-full md:w-[600px] lg:w-[1200px] h-[300px] md:h-[400px] lg:h-[600px]  overflow-hidden brightness-80`}
      >
        <Image src="/mealbg.png" fill alt="meal pic" />
      </div>
      <div
        className={`w-full h-lvh pl-[400px] max-xl:pl-[50px]
        flex justify-center items-center
        `}
      >
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          className="mySwiper w-full h-[400px]"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-start items-start p-4">
                <h1
                  className={`text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-[var(--secondary)]
                  ${lobster.className}
                  `}
                >
                  {slide.title}
                </h1>
                <p className="text-md text-left w-full max-w-[400px] text-[var(--neutral-200)]">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Style pagination bullets */}
      <style jsx>{`
        :global(.swiper-pagination) {
          display: flex;
          justify-content: flex-start !important;
          padding-left: 1rem;
           direction: ltr !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
