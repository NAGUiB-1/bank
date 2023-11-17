import React from "react";
import SecurityProp from "./SecurityProp";

const data = [
  {
    header: "Secure Online Banking Platform",
    body: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
    icon: "/p1.svg",
  },
  {
    header: "Multi-Factor Authentication",
    body: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
    icon: "/p2.svg",
  },
  {
    header: "Fraud Monitoring",
    body: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
    icon: "/p3.svg",
  },
  {
    header: "Secure Mobile Banking",
    body: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
    icon: "/p4.svg",
  },
];
const Protect = () => {
  return (
    <div className="container mx-auto py-4">
      <h3 className="text-3xl font-bold" data-aos="fade-right">
        How We <span className="text-green-500">Protect You</span>
      </h3>
      <p className="font-extralight mt-4" data-aos='zoom-in'>
        At YourBank, we prioritize the security and confidentiality of your
        financial information. Our state-of-the-art encryption technology and
        stringent data protection measures ensure your assets and transactions
        are safeguarded at all times
      </p>
      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4 rounded-xl p-6 bg-[#333] my-6">
        {data.map((e, i) => (
          <SecurityProp key={i} data={e} />
        ))}
      </div>
    </div>
  );
};

export default Protect;
