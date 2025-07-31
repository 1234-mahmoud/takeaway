import AboutComp from "@/components/AboutComp";
import Discount from "@/components/Discount";
import Slider from "@/components/Slider";
import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Booking from "./booking/page";
import BookingComp from "@/components/BookingComp";

export const metadata = {
  title: "Home",
  description:
    "Welcome to Takeaway - Your premier destination for fresh, delicious food delivery and restaurant booking. Explore our menu featuring burgers, pizzas, pasta, and more.",
  keywords: [
    "home",
    "food delivery",
    "restaurant",
    "takeaway",
    "online ordering",
  ],
  openGraph: {
    title: "Takeaway - Fresh Food Delivery & Restaurant Booking",
    description:
      "Welcome to Takeaway - Your premier destination for fresh, delicious food delivery and restaurant booking.",
    url: "https://takeaway.com",
    images: [
      {
        url: "/meal2.jpg",
        width: 1200,
        height: 630,
        alt: "Takeaway Homepage",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="">
      <Slider />
      <Menu />
      <div className="w-full bg-gray-800">
        <AboutComp />
      </div>
      <div className="w-full">
        <BookingComp />
      </div>
      <Discount />
    </div>
  );
}
