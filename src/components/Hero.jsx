import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AOS } from "aos";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row my-10 gap-20 ">
      {/* Left / Top*/}
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-[#1c1c1c] flex justify-start items-center  w-fit p-2 rounded-full gap-2 text-xs">
          <Image
            src="/rm.svg"
            width="100"
            height="100"
            alt="logo"
            className="w-5"
          />
          <p>No LLC Required, No Credit Check.</p>
        </div>
        <h2 className="text-5xl sm:text-2xl lg:text-5xl" data-aos="fade-up">
          Welcome to YourBank <br />
          Empowering Your{" "}
          <span className="text-green-500">Financial Journey</span>{" "}
        </h2>
        <p className="text-sm opacity-80 " data-aos="fade-left">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers' needs.
        </p>
        <Link
          href="/signup"
          className="bg-green-500 font-bold rounded-full py-2 px-4 w-fit"
          data-aos="fade-down"
        >
          Open Account
        </Link>
      </div>

      {/* Right / Bottom*/}
      <div className="w-full relative h-full " data-aos="zoom-in">
        <Image
          src="/Hero.svg"
          height="100"
          width="100"
          className="w-[450px]"
          alt="hero"
        />
        <Image
          src="/heromark.svg"
          height="100"
          width="100"
          className="absolute top-0 right-10 w-[200px]"
          alt="mark"
        />
      </div>
    </div>
  );
};

export default Hero;
