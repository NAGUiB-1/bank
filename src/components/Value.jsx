import React from "react";

const Value = ({ data }) => {
  return (
    <div
      className="flex flex-col gap-6 p-4 relative after:absolute after:h-full after:w-[2px] after:bg-green-500 after:top-0 after:left-0"
      data-aos="flip-down"
    >
      <h5 className="font-semibold text-3xl text-[#4C4C4D]">{data.header}</h5>
      <p className="text-[#B3B3B3] font-extralight">{data.body}</p>
    </div>
  );
};

export default Value;
