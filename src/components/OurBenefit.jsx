import React from "react";
import SecurityProp from "./SecurityProp";

const data = [
  {
    header: "Competitive Compensation",
    body: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
    icon: "/b1.svg",
  },
  {
    header: "Health and Wellness",
    body: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
    icon: "/b2.svg",
  },
  {
    header: "Retirement Planning",
    body: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
    icon: "/b3.svg",
  },
  {
    header: "Work-Life Balance",
    body: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
    icon: "/b4.svg",
  },
];
const OurBenefit = () => {
  return (
    <div className="container mx-auto py-4">
      <h3 className="text-3xl font-bold" data-aos="fade-right">
        Our Benefits <span className="text-green-500">Benefits</span>
      </h3>
      <p
        className="font-extralight mt-4 text-[#B3B3B3]"
        data-aos="zoom-in-right"
      >
        At YourBank, our values form the foundation of our organization and
        guide our actions. We believe in upholding the highest standards of
        integrity, delivering exceptional service, and embracing innovation.
        These values define our culture and shape the way we work together to
        achieve our goals.
      </p>
      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4 rounded-xl   my-6">
        {data.map((e, i) => (
          <SecurityProp key={i} data={e} />
        ))}
      </div>
    </div>
  );
};

export default OurBenefit;
