import React from "react";
import Link from "next/link";

const Cases = ({ casesObject, boxDetails, reverse }) => {
  return (
    <div
      className={`flex flex-col my-10 gap-8 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } `}
      data-aos="fade-right"
    >
      <div
        className={`grid grid-cols-2 grid-rows-2 p-6 w-full gap-6  bg-[#1c1c1c] rounded-xl order-1 `}
      >
        {casesObject.map((e, i) => (
          <div
            key={i}
            className=" rounded-xl w-full flex justify-start items-center flex-col  gap-2 bg-black p-4"
            data-aos="fade-up"
          >
            <img src={e.src} className="w-16" alt={e.title} />
            <p className=" text-center"> {e.title}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h4 className="text-lg mb-3 font-bold ">{boxDetails.header}</h4>
        <p className="my-4 opacity-80 font-extralight">
          {boxDetails.paragraph}
        </p>
        <div className="flex flex-col md:flex-row">
          {boxDetails.percentage.map((e, i) => (
            <div
              key={i}
              className="w-full text-center md:text-left"
              data-aos="fade-down"
            >
              <p className="text-4xl text-green-400 my-4 font-extrabold">
                {e.per}%
              </p>
              <p className="opacity-80 font-extralight">{e.des}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 rounded-full py-2 px-4 border bg-[#1c1c1c]">
          <Link href="/about">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default Cases;
