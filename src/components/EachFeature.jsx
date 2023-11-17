import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
const EachFeature = ({ body }) => {
  return (
    <div
      className="w-full bg-[#1c1c1c] p-6 rounded-lg border  cursor-default"
      data-aos="flip-left"
    >
      <h4 className="flex justify-between items-center text-xl mb-2">
        <span>{body.header}</span>
        <HiArrowUpRight className="text-green-500 font-bold" size={22} />
      </h4>
      <p className="opacity-70 font-extralight">{body.body}</p>
    </div>
  );
};

export default EachFeature;
