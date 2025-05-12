import React from "react";
import RoundButton from "@/Components/Buttons/RoundButton";
import Image from "next/image";
import collegeImage from "@/assets/images/banner1.jpeg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Notice = () => {
  return (
    <div className="bg-white py-5 px-5 lg:py-10">
      <div className="container   lg:mx-auto space-y-5 text-black">
        <div className="flex justify-between w-full ">
          <div className="flex flex-col">
            <h3 className="text-main text-xl lg:text-3xl ">Notice Board</h3>
            <span className="border-b border-main w-1/2 content-['']"></span>
          </div>
          <RoundButton name={"View All"} />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <div className="col-span-2 flex gap-3 ">
            <div className="flex-1 h-full group  grid grid-rows-[auto_auto_1fr] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="overflow-hidden">
                <Image
                  className="w-full transition group-hover:scale-110 duration-400 "
                  src={collegeImage}
                  alt="college image"
                  width={100}
                  height={100}
                />
              </div>

              <div className="p-4">
                <div className="float-left px-2 py-1 mr-2 space-y-1 text-white text-center bg-main">
                  <div className="text-3xl font-bold"> 24 </div>
                  <div> April </div>
                </div>
                <div className="">
                  <h className="text-gray-600 font-semibold text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </h>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero cumque nisi alias ut ipsam minima aspernatur corrupti
                    ducimus voluptatibus illo.
                  </p>
                </div>
              </div>
              <button className="items-center p-4 self-end text-main hover:underline transition duration-300 cursor-pointer h-auto flex ">
                {" "}
                Read More &#8594;{" "}
              </button>
            </div>
            <div className="flex-1 group h-full grid grid-rows-[auto_auto_1fr] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="overflow-hidden">
                <Image
                  className="w-full transition duration-400  group-hover:scale-110"
                  src={collegeImage}
                  alt="college image "
                  width={100}
                  height={100}
                />
              </div>

              <div className="p-4">
                <div className="float-left px-2 py-1 mr-2 space-y-1 text-white text-center bg-main">
                  <div className="text-3xl font-bold"> 24 </div>
                  <div> April </div>
                </div>
                <div className="">
                  <h4 className="text-gray-600 font-semibold text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </h4>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero cumque nisi alias ut ipsam minima aspernatur corrupti
                    ducimus voluptatibus illo. Vero cumque nisi alias ut ipsam
                    minima aspernatur corrupti ducimus voluptatibus illo.
                  </p>
                </div>
              </div>
              <button className="items-center p-4 self-end text-main hover:underline transition duration-300 cursor-pointer h-auto flex ">
                {" "}
                Read More &#8594;{" "}
              </button>
            </div>
          </div>
          <div className="col-span-1 shadow-[0_0_20px_rgba(0,0,0,0.5)] ">
            <div className="flex justify-between items-center px-4 py-3 bg-main">
              <div className="text-white text-2xl ">Recent Notice</div>
              <div className="space-x-1">
                <button><IoIosArrowDown className="bg-white text-xl text-main" /></button>
                <button><IoIosArrowUp className="bg-white text-xl text-main" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
