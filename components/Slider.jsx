"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full h-[400px] bg-gray-800 text-white flex justify-start items-start">
      <div className="w-full h-[400px] pl-[400px] max-xl:pl-[50px]">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          loop={true}
          className="mySwiper w-full h-[400px]"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-start items-start p-4">
                <h1 className="text-xl font-bold mb-2">this is the title of slide num {i + 1}</h1>
                <p className="text-sm text-left w-full max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  quia nesciunt magni explicabo deserunt molestias, sed sunt?
                  Dolorum consequatur harum nesciunt sunt eius iste ab maxime vitae
                  aspernatur eum. Perspiciatis laborum corporis id, pariatur tempora
                  animi fugiat quisquam aliquam error voluptate suscipit quae at
                  quam, non fuga dolorum cupiditate consequatur!
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
