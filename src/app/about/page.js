"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MissionVision from "@/components/MissionVision";
import PressReleases from "@/components/PressReleases";
import ReusableHero from "@/components/ReusableHero";
const data = {
  header: "Where Banking Meets",
  span: " Excellence!",
  body: `At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.`,
  img: "/about-hero.svg",
};
const about = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <ReusableHero data={data} />
      <MissionVision />
      <PressReleases />
    </div>
  );
};

export default about;
