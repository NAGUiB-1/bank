import React from "react";
import Value from "./Value";

const data = [
  {
    header: "Integrity",
    body: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
  },
  {
    header: "Customer Centricity",
    body: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
  },
  {
    header: "Collaboration",
    body: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
  },
  {
    header: "Innovation",
    body: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
  },
];

const OurValue = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold" data-aos="fade-down">
        Our <span className="text-greeen-500">Values</span>
      </h3>
      <p className="font-extralight opacity-70" data-aos="zoom-in">
        At YourBank, our values form the foundation of our organization and
        guide our actions. We believe in upholding the highest standards of
        integrity, delivering exceptional service, and embracing innovation.
        These values define our culture and shape the way we work together to
        achieve our goals.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
        {data.map((e, i) => (
          <Value data={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default OurValue;
