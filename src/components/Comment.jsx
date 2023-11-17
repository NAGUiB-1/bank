import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
const Comment = ({ body, setWidth, width }) => {
  let ref = useRef(null);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [width]);
  return (
    <div
      ref={ref}
      className="w-[100%] min-w-[100%] 
    md:w-[50%] md:min-w-[50%]
    lg:w-[33.3%] lg:min-w-[33.3%]
    
    "
      data-aos="fade-down"
    >
      <div className="flex justify-center items-center">
        <hr className="w-full" />
        <FaQuoteLeft size={100} fill="green" />
        <hr className="w-full" />
      </div>
      <p className="text-center">{body.content}</p>
      <p className="mt-8 text-center text-green-500">{body.author}</p>
    </div>
  );
};

export default Comment;
