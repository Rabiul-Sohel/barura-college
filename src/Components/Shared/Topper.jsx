import React from "react";
import { FaEnvelope, FaFacebook, FaFacebookSquare } from "react-icons/fa";

const Topper = () => {
  return (
    <div className="bg-main py-2">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center text-xs lg:text-sm">
            <FaEnvelope className="text-base lg:text-lg" />
            <span className="">office.bssgc@gmail.com</span>
          </div> <span> |</span>
          <button className="cursor-pointer hover:text-warning text-base lg:text-2xl transition duration-300">
            <FaFacebookSquare />
          </button>
        </div>
        <div>
            <button className="lg:py-1 text-sm lg:text-base rounded-base px-3 py-0  border cursor-pointer border-warning hover:bg-warning  duration-500 transition hover:text-black">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Topper;
