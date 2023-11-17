"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";
import OurTestimonials from "@/components/OurTestimonials";
import Products from "@/components/Products";
import UseCases from "@/components/UseCases";
import { useRef, useEffect } from "react";
import useScrollSnap from "react-use-scroll-snap";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  /*
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="container p-4  mx-auto">
        <Hero />
        <Products />
        <UseCases />
        <OurFeatures />
        <FrequentlyAsked />
        <OurTestimonials />
        <Banner />
      </div>
    </div>
  );
}
