"use client";
import React from "react";
import CountUp from "react-countup";
import { FaUserGraduate, FaUserShield } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaBuildingColumns } from "react-icons/fa6";

const InfoSummery = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  return (
    <div
      style={{
        backgroundImage: "url(students.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="lg:h-[50vh] flex items-center relative "
    >
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-0"></div>
      <div
       ref={ref}
        className=" container  flex flex-col lg:flex-row mx-2 lg:mx-auto gap-5 z-1     "
      >
        
        
        <div className="flex flex-1 px-6 py-5 py-2 items-center gap-6  bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.1)]">
          <FaUserShield className="text-8xl   text-warning" />
          <div className="content-[''] h-full border-r "></div>
          <div className="text-white text-3xl font-semibold">
            <div>Faculty</div>
            <div className="text-warning">
              {inView ? <CountUp duration={3} end={27} /> : 0}
            </div>
          </div>
        </div>
        <div className="flex flex-1 px-6 py-5 py-2 items-center gap-6  bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.1)]">
          <FaUserShield className="text-8xl   text-warning" />
          <div className=" h-full border "></div>
          <div className="text-white text-3xl font-semibold">
            <div>Departments</div>
            <div className="text-warning">
              {inView ? <CountUp duration={3} end={14} /> : 0}
            </div>
          </div>
        </div>
        <div className="flex flex-1 px-6 py-5 py-2 items-center gap-6  bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.1)]">
          <FaUserGraduate className="text-8xl   text-warning" />
          <div className=" h-full border "></div>
          <div className="text-white text-3xl font-semibold">
            <div>Students</div>
            <div className="text-warning">
              {inView ? <CountUp duration={3} end={3000} /> : 0}+
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default InfoSummery;
