"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import {Lobster } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Slider = () => {
  return (
    <div
      className={`w-full h-lvh bg-gradient-to-r from-black via-[#000000ce] to-[#5c5d5d] text-white relative
      mt-[60px]
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
          {Array.from({ length: 4 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-start items-start p-4">
                <h1 className={`text-xl md:text-2xl lg:text-4xl font-bold mb-2
                  ${lobster.className}
                  `}>
                  This Is Fast Food
                </h1>
                <p className="text-md text-left w-full max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  quia nesciunt magni explicabo deserunt molestias, sed sunt?
                  Dolorum consequatur harum nesciunt sunt eius iste ab maxime
                  vitae aspernatur eum. Perspiciatis laborum corporis id,
                  pariatur tempora animi fugiat quisquam aliquam error voluptate
                  suscipit quae at quam, non fuga dolorum cupiditate
                  consequatur!
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
        }
      `}</style>
    </div>
  );
};

export default Slider;
