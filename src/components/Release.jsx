import Image from "next/image";
import React from "react";

const Release = ({ data }) => {
  return (
    <div
      className="flex flex-col gap-4 w-full bg-[#1c1c1c] p-6 rounded-3xl"
      data-aos="zoom-in-up"
    >
      <Image className="w-full" src={data.img} height={100} width={100} alt='image'/>
      <h5 className="text-xl">{data.header}</h5>
      <ul className="flex gap-4">
        <li className="bg-black p-1 rounded-xl opacity-70">{data.location}</li>
        <li className="bg-black p-1 rounded-xl opacity-70">{data.date}</li>
      </ul>
      <p className="font-extralight">{data.body}</p>
    </div>
  );
};

export default Release;
