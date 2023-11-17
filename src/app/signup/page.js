"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OurTestimonials from "@/components/OurTestimonials";
import Signup from "@/components/Signup";
import React from "react";

const signup = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <Signup />
      <OurTestimonials />
    </div>
  );
};

export default signup;
