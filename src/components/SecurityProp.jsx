import React from "react";
import Image from "next/image";

const SecurityProp = ({ data }) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 bg-[#1c1c1c] rounded-xl"
      data-aos="zoom-in"
    >
      <div className="flex justify-start items-center gap-2">
        <Image
          className="w-14 h-14"
          src={data.icon}
          width={100}
          height={100}
          alt="icon"
        />
        <h5 className="font-semibold text-lg">{data.header}</h5>
      </div>
      <p className="font-extralight opacity-70">{data.body}</p>
    </div>
  );
};

export default SecurityProp;
