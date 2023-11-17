import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl text-green-500" data-aos="zoom-in">
        Our Products
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="opacity-70" data-aos="zoom-in-left">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
        </p>
        <div className="bg-[#1c1c1c] p-2 rounded-full flex gap-2 ">
          <button className="px-2  w-[8rem] bg-green-500 rounded-full">
            For Individuals
          </button>
          <button className="px-2 w-[8rem] rounded-full">For Businesses</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row cont gap-4 my-10">
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-up"
        >
          <div className="bg-green-500 p-4 rounded-full">
            <Image src="/Vector.svg" width="20" height="20" />
          </div>
          <h4>Checking Accounts</h4>
          <p>
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-down"
        >
          <div className="bg-green-500 p-4 rounded-full">
            <Image src="/Union.svg" width="20" height="20" />
          </div>
          <h4>Savings Accounts</h4>
          <p>
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether you're saving for a specific goal
            or want to grow your wealth over time, we have the right account for
            you.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="fade-up"
        >
          <div className="bg-green-500 p-4 rounded-full">
            <Image src="/Union2.svg" width="20" height="20" />
          </div>
          <h4>Loans and Mortgages</h4>
          <p>
            Realize your dreams with our flexible loan and mortgage options.
            From personal loans to home mortgages, our experienced loan officers
            are here to guide you through the application process and help you
            secure the funds you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
