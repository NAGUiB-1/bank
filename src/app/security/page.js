"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import React from "react";
import ReusableHero from "@/components/ReusableHero";
import Protect from "@/components/Protect";

const data = {
  header: "Your Security is Our",
  span: "Top Priority",
  body: `At YourBank, we understand the importance of keeping your financial
          information secure. We employ robust security measures and advanced
          technologies to protect your personal and financial data. Rest assured
          that when you bank with us, your security is our utmost priority.`,
  img: "/security-hero.svg",
};
const security = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <ReusableHero data={data} />

      <Protect />
      <div className="container mx-auto py-4 my-4">
        <FrequentlyAsked />
      </div>
    </div>
  );
};

export default security;
