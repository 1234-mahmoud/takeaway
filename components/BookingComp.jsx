"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Lobster } from "next/font/google";
import Button from "./Button";

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
      className={`container my-[100px] mx-auto h-full w-full flex flex-col gap-[20px] py-[100px] max-md:py-0 bg-[var(--surface)] rounded-2xl shadow-xl p-8
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
          className={`w-full lg:w-[600px] flex flex-col gap-[20px]`}
        >
          <p className={`${lobster.className} text-3xl uppercase text-[var(--primary)] mb-4`}>
            book a meal
          </p>

          <div className={`flex flex-col  gap-[20px] `}>
            <fieldset
              className={`w-full h-[60px] border border-[var(--neutral-300)] rounded-lg p-[10px] hover:bg-[var(--neutral-50)] transition-all duration-300 ease-in-out focus-within:border-[var(--primary)] focus-within:shadow-md`}
            >
              <legend className="text-[var(--text-secondary)] px-2">Your Name</legend>
              <input
                type="text"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                placeholder="Enter your full name"
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border border-[var(--neutral-300)] rounded-lg p-[10px] hover:bg-[var(--neutral-50)] transition-all duration-300 ease-in-out focus-within:border-[var(--primary)] focus-within:shadow-md`}
            >
              <legend className="text-[var(--text-secondary)] px-2">Phone Number</legend>
              <input
                type="tel"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                placeholder="Enter your phone number"
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border border-[var(--neutral-300)] rounded-lg p-[10px] hover:bg-[var(--neutral-50)] transition-all duration-300 ease-in-out focus-within:border-[var(--primary)] focus-within:shadow-md`}
            >
              <legend className="text-[var(--text-secondary)] px-2">Your Email</legend>
              <input
                type="email"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                placeholder="Enter your email address"
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border border-[var(--neutral-300)] rounded-lg p-[10px] hover:bg-[var(--neutral-50)] transition-all duration-300 ease-in-out focus-within:border-[var(--primary)] focus-within:shadow-md`}
            >
              <legend className="text-[var(--text-secondary)] px-2">How Many Persons</legend>
              <input
                type="number"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                placeholder="Number of guests"
                min="1"
                max="20"
              />
            </fieldset>
            <fieldset
              className={`w-full h-[60px] border border-[var(--neutral-300)] rounded-lg p-[10px] hover:bg-[var(--neutral-50)] transition-all duration-300 ease-in-out focus-within:border-[var(--primary)] focus-within:shadow-md`}
            >
              <legend className="text-[var(--text-secondary)] px-2">Delivery Date and Time</legend>
              <input
                type="datetime-local"
                name=""
                id=""
                className={`w-full indent-4 focus:outline-0 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                placeholder="Select date and time"
              />
            </fieldset>
          </div>
          <Button variant="primary" className="w-[150px] h-[40px] text-[16px] font-bold">
            Book Now
          </Button>
        </form>

        {/* ----------------------- */}
        <div
          className={`w-full md:w-[600px] lg:w-[400px] h-[380px] relative overflow-hidden rounded-lg shadow-lg border border-[var(--neutral-200)]`}
        >
          <div ref={mapRef} className={`w-full h-full`} />
        </div>
      </div>
    </div>
  );
};

export default BookingComp;
