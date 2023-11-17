import Image from "next/image";
import React from "react";

const MissionVision = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-green-500" data-aos="fade-right">
        Mission & Vision
      </h3>
      <p className="my-6 font-extralight opacity-70" data-aos="zoom-in">
        We envision being a leading force in the industry, driven by innovation,
        integrity, and inclusivity, creating a brighter financial future for
        individuals and businesses while maintaining a strong commitment to
        customer satisfaction and community development
      </p>
      <div className="">
        {/* Mission */}
        <div
          className="flex lg:flex-row flex-col items-center gap-6 "
          data-aos="zoom-in-right"
        >
          <div className="min-h-full bg-black  w-full">
            <Image
              className="min-h-full h-full w-full"
              src="/mission.svg"
              width={100}
              height={100}
              alt='mission'
            />
          </div>
          <div className="relative sm:top-[-150px] sm:bg-[rgba(0,0,0,.8)] lg:top-0">
            <h5 className="text-xl font-semibold">Mission</h5>
            <p className="text-sm opacity-70">
              At YourBank, our mission is to empower our customers to achieve
              financial success. We are dedicated to delivering innovative
              banking solutions that cater to their unique needs. Through
              personalized services, expert guidance, and cutting-edge
              technology, we aim to build strong, lasting relationships with our
              customers. Our mission is to be their trusted partner, helping
              them navigate their financial journey and realize their dreams.
            </p>
          </div>
        </div>
        {/* Vision*/}

        <div
          className="flex lg:flex-row flex-col-reverse items-center gap-6 relative top-[-20px] mt-8 lg:mt-0"
          data-aos="zoom-in-down"
        >
          <div className="relative sm:top-[-150px] sm:bg-[rgba(0,0,0,.8)] lg:top-0 ">
            <h5 className="text-xl font-semibold">Vision</h5>
            <p className="text-sm opacity-70">
              Our vision at YourBank is to redefine banking by creating a
              seamless and personalized experience for our customers. We
              envision a future where banking is accessible, transparent, and
              tailored to individual preferences. Through continuous innovation
              and collaboration, we strive to be at the forefront of the
              industry, setting new standards for customer-centric banking. Our
              vision is to be the preferred financial institution, known for our
              unwavering commitment to excellence, trust, and customer
              satisfaction.
            </p>
          </div>
          <div className="min-h-full bg-black  w-full">
            <Image
              className="min-h-full h-full w-full"
              src="/vision.svg"
              width={100}
              height={100}
              alt='vision'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
