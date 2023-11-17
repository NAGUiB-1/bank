import React from "react";
import signup from "./../app/signup/page";
import EachFeature from "./EachFeature";

const data = [
  {
    header: "24/7 Account Access",
    body: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
  },
  {
    header: "Mobile Banking App",
    body: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
  },
  {
    header: "Secure Transactions",
    body: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
  },
  {
    header: "Bill Pay and Transfers",
    body: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
  },
];
const OurFeatures = () => {
  const buttonStyle = "p-2 rounded-full bg-black w-fit min-w-fit";
  const active = " text-green-500";
  return (
    <div>
      <h3 className="font-bold text-2xl" data-aos="fade-right">
        Our <span className="text-green-500">Features</span>
      </h3>
      <p className="opacity-70 font-extralight" data-aos="zoom-in">
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </p>
      <div className="flex flex-col md:flex-row gap-4 my-8">
        <div
          className="flex flex-row md:flex-col md:w-[20%] bg-[#1c1c1c] p-6 rounded-lg border h-fit gap-4 items-center justify-center overflow-x-auto "
          data-aos="flip-up"
        >
          <button className={buttonStyle + active}>Online Banking</button>
          <button className={buttonStyle}>Financial Tools</button>
          <button className={buttonStyle}>Customer Support</button>
        </div>
        <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 md:w-[80%]">
          {data.map((e, i) => (
            <EachFeature body={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
