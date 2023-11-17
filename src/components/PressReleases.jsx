import React from "react";
import Release from "./Release";
const data = [
  {
    header:
      "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    date: "Date: 06/11/2024",
    location: "Location: India",
    body: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
    img: "/r1.svg",
  },
  {
    header:
      "YourBank Expands Branch Network with Opening of New Location in Chennai",
    location: "Location: Paris",
    date: "Date: 12/1/2024",
    body: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
    img: "r2.svg",
  },
  {
    header:
      "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    location: "Location: Egypt",
    date: "Date: 24/10/2023",
    body: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    img: "r3.svg",
  },
  {
    header:
      "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
    location: "Location: London",
    date: "Date: 28/12/2022",
    body: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    img: "r4.svg",
  },
];
const PressReleases = () => {
  return (
    <div className="container mx-auto mb-6">
      <h3 className="text-3xl text-green-500 " data-aos="fade-right">
        Press Releases
      </h3>
      <p className="my-6 opacity-70" data-aos="zoom-in">
        Stay updated with the latest happenings and exciting developments at
        YourBank through our press releases.
      </p>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-4">
        {data.map((e, i) => (
          <Release key={i} data={e} />
        ))}
      </div>
    </div>
  );
};

export default PressReleases;
