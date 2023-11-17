import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGoogle, FaApple } from "react-icons/fa";

const Signup = () => {
  const iconStyle =
    "w-10 h-10 flex justify-center items-center bg-[#333] cursor-pointer rounded-full";
  return (
    <div
      className="flex flex-col p-16 justify-center items-center container mx-auto my-10 bg- bg-no-repeat bg-cover bg-center rounded-xl"
      style={{ backgroundImage: 'url("/Login.svg")' }}
      data-aos="zoom-in"
    >
      <div>
        <h3 className="text-3xl text-center text-green-400 font-bold">
          Sign Up
        </h3>
        <p className="text-center font-etralight my-4">
          Join our community today! Create an account to unlock exclusive
          features and personalized experiences.
        </p>
      </div>
      <form className="w-[380px] md:w-[600px] text-center" data-aos="zoom-in">
        <div className="flex flex-col md:flex-row w-full gap-4 my-4 justify-center items-center flex-wrap">
          <input
            type="text"
            className="p-2 rounded-full bg-black w-full md:w-[48%]"
            placeholder="Enter First Name"
            data-aos="flip-up"
          />
          <input
            type="text"
            className="p-2 rounded-full bg-black w-full  md:w-[48%]"
            placeholder="Enter Last Name"
            data-aos="zoom-in"
          />
          <input
            type="text"
            className="p-2 rounded-full bg-black w-full  md:w-[48%]"
            placeholder="Enter your Email"
            data-aos="flip-down"
          />
          <input
            type="passowrd"
            className="p-2 rounded-full bg-black w-full  md:w-[48%]"
            placeholder="Enter your Password "
            data-aos="zoom-in"
          />
        </div>
        <p className="underline font-bold mb-4">Forgot Password?</p>
        <div data-aos="fade-down">
          <div className="flex flex-col w-[360px] justify-center items-center gap-4 mb-4 mx-auto">
            <button className="py-2 bg-green-500 w-full rounded-full text-black">
              Sign Up
            </button>
            <Link
              href="/login"
              className="py-2 bg-[#333] w-full rounded-full  text-white"
            >
              Login
            </Link>
          </div>
          <div
            className="flex flex-row justify-center items-center"
            data-aos="fade-up"
          >
            <hr className="w-full" />
            <span className="min-w-fit whitespace-pre"> Or Continue with </span>
            <hr className="w-full" />
          </div>
          <div className="flex gap-4 justify-center items-center mt-4">
            <div className={iconStyle}>
              <FaGoogle size={22} fill="#caff33" />
            </div>
            <div className={iconStyle}>
              <FaApple size={22} fill="#caff33" />
            </div>
            <div className={iconStyle}>
              <FaLinkedin size={22} fill="#caff33" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
