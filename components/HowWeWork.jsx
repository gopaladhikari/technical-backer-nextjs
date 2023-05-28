import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const HowWeWork = ({ title, text, icon }) => {
  return (
    <div className="flex flex-col gap-10 bg-[#F5F8FC] p-8 pb-16 rounded-lg hover:shadow-lg transition-all duration-300">
      <div className="text-4xl">{icon}</div>
      <div className="flex flex-col gap-7">
        <h5 className="text-lg font-semibold ">{title} </h5>
        <p> {text} </p>
        <Link
          href="/services"
          className="flex justify-center items-center gap-2 bg-[#157347] w-1/2 py-2 rounded-[60px] text-white font-medium"
        >
          Get Started <BsArrowRight />{" "}
        </Link>
      </div>
    </div>
  );
};

export default HowWeWork;
