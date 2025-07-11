import Image from "next/image";
import Link from "next/link";
import {Michroma } from 'next/font/google';

const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const AboutComp = () => {
  return (
    <div
      className={`w-full max-w-[1320px] h-full flex justify-center items-center gap-[40px]
    py-[100px] mx-auto
    max-md:flex-col max-md:p-0
    `}
    >
      <div className={`img relative overflow-hidden w-full max-w-[400px] h-[400px]`}>
        <Image src="/meal.jpg" alt="meal pic" fill className={`hover:scale-125 transition-all duration-500 ease-in-out`}/>
      </div>
      <div className={` w-full max-w-[400px] h-[400px] text-white
        flex flex-col gap-[30px] max-md:p-[10px]
        `}>
        <p className={`${michroma.className} text-3xl leading-[50px] lg:text-2xl lg:leading-[40px] tracking-widest
        
        `}>
          who are Takeaway?
        </p>
        <p className={`font-sans leading-[28px] tracking-wider`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          ducimus harum repudiandae vero reiciendis architecto qui, nam rerum,
          alias praesentium sit pariatur natus! Quos, natus amet quam non
          architecto ea.
        </p>
        <button
          className={`w-[150px] h-[40px] bg-yellow-500 text-white text-[16px]
            rounded-2xl hover:bg-amber-700 transition-all duration-500 ease-in-out
            `}
        >
          <Link href="/">Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutComp;
