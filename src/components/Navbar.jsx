"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [show, setshow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-[#1C1C1C] rounded-full container py-2 px-4 mx-auto mt-4">
        <Image
          src="/logo.svg"
          width="100"
          height="100"
          alt="logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <ul className=" gap-1 hidden sm:flex ">
          <li
            className={`${
              pathname == "/" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              pathname == "/careers" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/careers">Careers</Link>
          </li>
          <li
            className={`${
              pathname == "/about" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${
              pathname == "/security" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/security">Security</Link>
          </li>
        </ul>
        <div className="hidden sm:block">
          <Link
            href="/signup"
            className={`${
              pathname == "/signup" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            Signup
          </Link>
          <Link
            href="/login"
            className={`${
              pathname == "/login" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full bg-green-600`}
          >
            Login
          </Link>
        </div>

        {/*Small Devices */}
        <div
          onClick={() => setshow(!show)}
          className="bg-green-500 p-2 rounded-full cursor-pointer sm:hidden"
        >
          {show ? <CiMenuFries size={25} /> : <CiMenuBurger size={25} />}
        </div>
      </div>

      <div
        className={`sm:hidden ${
          show ? "flex" : "hidden"
        } flex-col justify-center items-center py-2`}
      >
        <ul className=" gap-2 flex flex-col w-full text-center py-2 ">
          <li
            className={`${
              pathname == "/" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              pathname == "/careers" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/careers">Careers</Link>
          </li>
          <li
            className={`${
              pathname == "/about" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${
              pathname == "/security" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            <Link href="/security">Security</Link>
          </li>
        </ul>
        <div className="flex flex-col w-full text-center gap-2">
          <Link
            href="/signup"
            className={`${
              pathname == "/signup" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full`}
          >
            Signup
          </Link>
          <Link
            href="/login"
            className={`${
              pathname == "/login" ? "bg-[#262626]" : ""
            } py-2 px-3 rounded-full bg-green-600 `}
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
