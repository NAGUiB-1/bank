"use client";
import React, { useState } from "react";
import Faq from "./Faq";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const data = [
  {
    header: "How do I open an account with YourBank?",
    body: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
    header: "What documents do I need to provide to apply for a loan?",
    body: `The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.`,
  },
  {
    header: "How can I access my accounts online?",
    body: `Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`,
  },
  {
    header: "Are my transactions and personal information secure?",
    body: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
  },
  {
    header: " Lorem ipsum dolor sit amet consectetur.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet in pariatur corporis asperiores veniam cumque ducimus corrupti excepturi facilis! Lorem ipsum dolor sit amet. ",
  },
  {
    header: "Lorem ipsum dolor sit amet consectetur.",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis incidunt nostrum, corporis aliquid libero atque? Exercitationem eligendi asperiores nesciunt, sunt, soluta inventore doloribus eaque ab ratione dolore dolorem laudantium?",
  },
  {
    header: "Lorem ipsum dolor sit amet consectetur.",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis incidunt nostrum, corporis aliquid libero atque? Exercitationem eligendi asperiores nesciunt, sunt, soluta inventore doloribus eaque ab ratione dolore dolorem laudantium?",
  },
];

const FrequentlyAsked = () => {
  const [show, setShow] = useState(false);
  const [starter, setStarter] = useState(4);

  return (
    <div>
      <h3 className="text-3xl text-green-500 " data-aos="fade-right">
        Frequently Asked Questions
      </h3>
      <p className="my-4 opacity-70 font-extralight" data-aos="zoom-in">
        Still you have any questions? Contact our Team via support@yourbank.com
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.slice(0, starter).map((e, i) => (
          <Faq body={e} />
        ))}
      </div>
      {show ? (
        <button
          className=" flex justify-center items-center gap-1 px-4 py-1 bg-[#1c1c1c] rounded-full border mt-5"
          onClick={() => {
            setStarter(4);
            setShow(!show);
          }}
        >
          <span> Less ! </span>
          <IoIosArrowUp />
        </button>
      ) : (
        <button
          className=" flex justify-center items-center gap-1 px-4 py-1 bg-[#1c1c1c] rounded-full border mt-5"
          onClick={() => {
            setStarter(data.length);
            setShow(!show);
          }}
        >
          <span> Load all Faqs </span>
          <IoIosArrowDown />
        </button>
      )}
    </div>
  );
};

export default FrequentlyAsked;
