import React from "react";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import {
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const liStyle = "flex justify-center items-center gap-1";
  const iconStyle =
    "w-10 h-10 flex justify-center items-center p-1 rounded-full bg-[#caff33]";
  return (
    <div className=" bg-[#1c1c1c]  py-10" data-aos="zoom-in-right">
      <div className="container flex flex-col justify-center items-center w-full gap-10 mx-auto">
        <div>
          <Image src="/logo.svg" width={100} height={100} />
        </div>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/security">Security</Link>
          </li>
        </ul>
        <hr className=" w-full opacity-30" />
        <ul className="flex gap-4 flex-wrap justify-center items-center">
          <li className={liStyle}>
            <IoMdMail size={22} fill="#caff33" />{" "}
            <span>hello@skillbirdge.com</span>
          </li>
          <li className={liStyle}>
            <BsFillTelephoneFill size={22} fill="#caff33" />{" "}
            <span>+91 91813 23 2309</span>
          </li>
          <li className={liStyle}>
            <FaLocationArrow size={22} fill="#caff33" />{" "}
            <span>Somewhere in the World</span>
          </li>
        </ul>
        <hr className=" w-full opacity-30 " />
        <div className="relative flex flex-col md:flex-row justify-between items-center w-full gap-4 bg-black p-2 md:rounded-full py-10 md:py-2 rounded-lg">
          <div className="flex gap-1 absolute md:static top-[-1.25rem]">
            <div className={iconStyle}>
              <FaFacebook size={18} fill="black" />
            </div>
            <div className={iconStyle}>
              <FaTwitter size={18} fill="black" />
            </div>
            <div className={iconStyle}>
              <FaLinkedin size={18} fill="black" />
            </div>
          </div>
          <p className="font-extralight text-sm">
            YourBank All Rights Reserved{" "}
          </p>
          <p className="font-extralight text-sm">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
