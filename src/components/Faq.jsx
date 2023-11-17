import React from "react";

const Faq = ({ body }) => {
  return (
    <div
      className="p-6 border-[#1c1c1c] border rounded-lg "
      data-aos="zoom-in-right"
    >
      <h5 className="">{body.header}</h5>
      <hr className="my-2 border-[#1c1c1c]" />
      <p className="font-extralight opacity-60">{body.body}</p>
    </div>
  );
};

export default Faq;
