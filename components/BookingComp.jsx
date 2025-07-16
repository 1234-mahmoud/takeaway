"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const BookingComp = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // store in .env
      version: "weekly",
    });

    loader.load().then(() => {
      new google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Change as needed
        zoom: 12,
      });
    });
  }, []);

  return (
    <div
      className={` container my-[50px] mx-auto h-full w-full flex flex-col  gap-[20px] py-[100px] max-md:py-0
    `}
    >
      <div
        className={`h-full w-full flex justify-center items-center  gap-[50px] 
    max-md:flex-col max-md:py-0
    `}
      >
        {/* --------------------------------------- */}

        <form
          action=""
          className={`w-full lg:w-[600px] flex flex-col  gap-[20px]`}
        >
          <p className={`${lobster.className} text-3xl uppercase`}>
            book a meal
          </p>

          <div className={`flex flex-col  gap-[20px] `}>
            <fieldset
              className={`w-full h-[60px] border rounded-md p-[10px] hover:bg-gray-100 transition-all duration-300 ease-in-out `}
            >
              <legend>Your Name</legend>
              <input
                type="text"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 `}
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border rounded-md p-[10px] hover:bg-gray-100 transition-all duration-300 ease-in-out `}
            >
              <legend>Phone Number</legend>
              <input
                type="text"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 `}
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border rounded-md p-[10px] hover:bg-gray-100 transition-all duration-300 ease-in-out `}
            >
              <legend>Your Email</legend>
              <input
                type="email"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 `}
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border rounded-md p-[10px] hover:bg-gray-100 transition-all duration-300 ease-in-out `}
            >
              <legend>How Many Persons</legend>
              <input
                type="number"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 `}
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border rounded-md p-[10px] hover:bg-gray-100 transition-all duration-300 ease-in-out `}
            >
              <legend>Delivary Date and Time</legend>
              <input
                type="datetime-local"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 `}
              />
            </fieldset>
          </div>
          <button
            className={`w-[150px] h-[40px] bg-yellow-500 text-white text-[16px]
            rounded-2xl hover:bg-amber-700 transition-all duration-500 ease-in-out
            `}
          >
            Book Now
          </button>
        </form>

        {/* ----------------------- */}
        <div
          className={`w-full md:w-[600px] lg:w-[400px] h-[380px] relative overflow-hidden rounded-md`}
        >
          <div ref={mapRef} className={`w-full h-full`} />
        </div>
      </div>
    </div>
  );
};

export default BookingComp;
