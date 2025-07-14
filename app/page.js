import Discount from "@/components/Discount";
import Slider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Slider />
      <Discount />
    </div>
  );
}
