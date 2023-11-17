import React from "react";
import Image from "next/image";

const ReusableHero = ({ data }) => {
  return (
    <div
      className="h-fit container mx-auto grid items-start grid-cols-1 md:grid-cols-6 md:grid-rows-2
     bg-[#1c1c1c] rounded-xl  p-6 my-8"
    >
      <div
        className="md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-4 bg-black  z-20 rounded-l-xl rounded-tr-xl md:rounded-tr-[0] rounded-br-xl  md:rounded-br-[60px] order-2 flex justify-center items-center flex-col p-6 gap-4"
        data-aos="fade-right"
      >
        <h3 className="text-3xl w-full">
          {data.header}
          <br />
          <span className="text-green-400">{data.span}</span>
        </h3>
        <p className="text-sm lg:text-lg font-extralight opacity-70">
          {data.body}
        </p>
      </div>
      <div
        className="md:row-start-1 md:row-end-3  md:col-start-3 md:col-end-7 z-10  w-full min-h-full overflow-hidden"
        data-aos="zoom-in"
      >
        <Image
          className="w-full min-h-full"
          src={data.img}
          width={100}
          height={100}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default ReusableHero;
