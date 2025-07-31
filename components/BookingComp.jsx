"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Lobster } from "next/font/google";
import Button from "./Button";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inputs = [
  {
    label: "Your Name",
    type: "text",
    name: "name",
    placeholder: "Enter your full name",
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
    placeholder: "Enter your phone number",
  },
  {
    label: "Your Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email address",
  },
  {
    label: "How Many Persons",
    type: "number",
    name: "persons",
    placeholder: "Number of guests",
  },
  {
    label: "Delivery Data and Time",
    type: "datetime-local",
    name: "address",
    placeholder: "Enter your delivery address",
  },
];

const BookingComp = () => {
  const mapRef = useRef(null);
  // Remove cart and orderPlaced state

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

  // Remove orderPlaced conditional rendering

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
        {/* Remove cart summary for checkout */}
        {/* --------------------------------------- */}

        <form
          action=""
          className={`w-full lg:w-[600px] flex flex-col gap-[20px]`}
          // Remove onSubmit handler for order placement
        >
          <p
            className={`${lobster.className} text-3xl uppercase text-[var(--primary)] mb-4`}
          >
            book a meal
          </p>

          <div className={`flex flex-col  gap-[20px] `}>
            {inputs.map((input) => (
              <fieldset
                key={input.placeholder}
                className={`w-full border border-[var(--neutral-300)] rounded-lg focus-within:border-[var(--primary)] focus-within:shadow-md`}
              >
                <legend className="text-[var(--text-secondary)] px-2">
                  {input.label}
                </legend>
                <input
                  type={input.type}
                  name={input.name}
                  id=""
                  className={`w-full p-4 pt-0.5 outline-0 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                  placeholder="Enter your full name"
                />
              </fieldset>
            ))}
          </div>
          <Button
            variant="primary"
            className="w-[150px] h-[40px] text-[16px] font-bold"
          >
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
