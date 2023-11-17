import React from "react";
import Cases from "./Cases";

const UseCases = () => {
  let boxOneDetails = {
    header: "For Individuals",
    paragraph:
      "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
    percentage: [
      {
        per: "78",
        des: "Secure Retirement Planning",
      },
      {
        per: "63",
        des: "Manageable Debt Consolidation",
      },
      {
        per: "91",
        des: "Reducing financial burdens",
      },
    ],
  };

  let boxTwoDetails = {
    header: "For Business",
    paragraph:
      "For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
    percentage: [
      {
        per: "65",
        des: "Cash Flow Management",
      },
      {
        per: "70",
        des: "Drive Business Expansion",
      },
      {
        per: "45",
        des: "Streamline payroll processing",
      },
    ],
  };
  let casesObject1 = [
    {
      title: "Managing Personal Finances",
      src: "/c1.svg",
    },
    {
      title: "Saving for the Future",
      src: "/c2.svg",
    },
    {
      title: "Homeownership",
      src: "/c3.svg",
    },
    {
      title: "Education Funding",
      src: "/c4.svg",
    },
  ];

  let casesObject2 = [
    {
      title: "Startups and Entrepreneurs",
      src: "/c5.svg",
    },
    {
      title: "Cash Flow Management",
      src: "/c6.svg",
    },
    {
      title: "Business Expansion",
      src: "/c7.svg",
    },
    {
      title: "Payment Solutions",
      src: "/c8.svg",
    },
  ];

  return (
    <div className="my-10">
      <h3
        className="text-green-500 text-3xl font-bold my-2"
        data-aos="fade-right"
      >
        Use Cases
      </h3>
      <p className="opacity-70" data-aos="zoom-in-right">
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </p>
      <Cases
        casesObject={casesObject1}
        boxDetails={boxOneDetails}
        reverse={false}
      />
      <Cases
        casesObject={casesObject2}
        boxDetails={boxTwoDetails}
        reverse={true}
        data-aos="fade-left"
      />
    </div>
  );
};

export default UseCases;
