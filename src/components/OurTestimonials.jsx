"use client";
import React, { useState, useRef } from "react";
import Comment from "./Comment";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const comments = [
  {
    content:
      "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
    author: "John D",
  },
  {
    content: `I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.`,
    author: "Emily G",
  },
  {
    content: `YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.`,
    author: "Sara T",
  },
];

const OurTestimonials = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(null);
  console.log(width);

  const handleRightClick = () => {
    console.log("clicked");
    ref.current.scrollLeft += width + 17;
  };
  const handleLeftClick = () => {
    console.log("clicked");
    ref.current.scrollLeft -= width + 17;
  };

  return (
    <div className="my-10 container p-4  mx-auto ">
      <h3 className="text-3xl font-bold" data-aos="fade-right">
        Our
        <span className="text-green-500 "> Testimonials</span>
      </h3>
      <div className="flex flex-col md:flex-row gap-2 my-4">
        <p className="font-extralight opacity-70 " data-aos="zoom-in">
          Discover how YourBank has transformed lives with innovative digital
          solutions and personalized customer service. See why our clients trust
          us for a secure and prosperous financial journey
        </p>
        <div className="bg-[#1c1c1c] p-2 rounded-full flex gap-2 h-fit w-fit">
          <button className="px-2  w-[8rem] h-fit bg-green-500 rounded-full">
            For Individuals
          </button>
          <button className="px-2 w-[8rem] h-fit rounded-full">
            For Businesses
          </button>
        </div>
      </div>

      <div className="relative box">
        <div
          className="absolute h-fit w-fit left bg-[#1c1c1c] p-2 rounded-full"
          onClick={handleLeftClick}
        >
          <FaArrowLeft />
        </div>
        <div className=" flex overflow-hidden gap-4 relative" ref={ref}>
          {comments.map((com, i) => (
            <Comment setWidth={setWidth} width={width} key={i} body={com} />
          ))}
        </div>
        <div
          className=" absolute h-fit w-fit right bg-[#1c1c1c] p-2 rounded-full "
          onClick={handleRightClick}
        >
          <FaArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
