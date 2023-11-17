"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "@/components/Banner";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import OurBenefit from "@/components/OurBenefit";
import OurValue from "@/components/OurValue";
import ReusableHero from "@/components/ReusableHero";
import { useEffect } from "react";
const data = {
  header: "Welcome to YourBank Careers!",
  span: " YourBank Careers!",
  body: `Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.`,
  img: "/career-hero.svg",
};
const careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <ReusableHero data={data} />
      <OurValue />
      <OurBenefit />
      <div className="container mx-auto">
        <FrequentlyAsked />
        <Banner />
      </div>
    </div>
  );
};

export default careers;
