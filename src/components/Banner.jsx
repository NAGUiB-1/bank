import React from "react";
import Link from "next/link";
import Hero from "./Hero";

const Banner = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center p-10 bg-[#1c1c1c] gap-4 rounded-lg my-20"
      data-aos="flip-down"
    >
      <div className="">
        <h4 className="text-2xl" data-aos="fade-right">
          Start your financial journey with{" "}
          <span className="text-green-500">YourBank today!</span>
        </h4>
        <p className="opacity-70 font-extralight mt-3" data-aos="zoom-in-right">
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </p>
      </div>

      <Link
        className="px-4 py-1 bg-green-500 min-w-fit rounded-full"
        href="/login"
      >
        Open Account
      </Link>
    </div>
  );
};

export default Banner;
