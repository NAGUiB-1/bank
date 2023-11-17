"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Login from "@/components/Login";
import OurTestimonials from "@/components/OurTestimonials";
import React from "react";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <Login />
      <OurTestimonials />
    </div>
  );
};

export default page;
