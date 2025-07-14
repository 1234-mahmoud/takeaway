import AboutComp from "@/components/AboutComp";
import Discount from "@/components/Discount";
import Slider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";
import Booking from "./booking/page";
import BookingComp from "@/components/BookingComp";
export default function Home() {
  return (
    <div>
      <Slider />
      <div className="w-full mt-[100px] bg-gray-800">
        <AboutComp />
      </div>
      <div className="w-full">
        <BookingComp/>
      </div>
      <Discount />
    </div>
  );
}
