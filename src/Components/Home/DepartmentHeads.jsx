"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";

import teachersImage from "@/assets/images/sohel-formal.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const DepartmentHeads = () => {
  const [hovered, setHovered] = useState(false);
  // const ref = useRef();
  // const isInView = useInView(ref);
  const {ref, inView, entry} = useInView({
    threshold: 0.2,
    triggerOnce: true,
    // skip: true
  });
  // console.log(entry);
  // console.log(inview);
  // const hoverProperty = {
  //   display: "block",
  //   transitionDuration: "10s",
  // };

  const teachers = [
    {
      name: "Md. Rabiul Alam",
      department: "Bangla",
      image: teachersImage,
    },
    {
      name: "Md. Rabiul Alam",
      department: "Bangla",
      image: teachersImage,
    },
    {
      name: "Md. Rabiul Alam",
      department: "Bangla",
      image: teachersImage,
    },
    {
      name: "Md. Rabiul Alam",
      department: "Bangla",
      image: teachersImage,
    },
    {
      name: "Md. Rabiul Alam",
      department: "Bangla",
      image: teachersImage,
    },
  ];

  return (
    <div className=" bg-white min-h-[90vh] px-5 lg:px-0 flex items-center relative py-10 ">
      <motion.div
        className="container  mx-auto  relative"
        ref={ref}
        initial={{ y: 60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        // viewport={{once:false}}
        transition={{ duration: 0.5 }}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640:{
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768:{
              slidesPerView: 3,
              spaceBetween: 30
            }

          }}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            //   reverseDirection: true,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          // navigation={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // pagination={{
          //   clickable: true,
          // }}

          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper shadow-[4px_8px_8px_8px_rgb(0,0,0,0.25)]  cursor-pointer  "
        >
          {teachers.map((teacher, idx) => (
            <SwiperSlide className=" shadow-[4px_8px_8px_8px_rgb(0,0,0,0.25)]" key={idx}>
              <div className="bg-white w-full border p-4 lg:p-10 ">
               
                  <Image
                    className="mx-auto w-2/3 border border-gray-400 shadow-md"
                    width={500}
                    height={500}
                    alt="head's photo"
                    src={teacher.image}
                  />
               
                <div className=" text-center text-main space-y-1 mt-2">
                  <h2 className="text-main text-2xl font-semibold">
                    {" "}
                    {teacher.name}{" "}
                  </h2>
                  <p className="text-main ">Head of the Department</p>
                  <div className="text-lg text-gray-900">
                    {" "}
                    {teacher.department}{" "}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div
            style={{
              left: "0",
              height: "60px",
              opacity: hovered ? "100%" : "0%",
              transition: "1s",
            }}
            className="  swiper-button-prev swiper-button-disabled:opacity-30 swiper-button-disabled:cursor-not-allowed  bg-main  "
          >
            <MdKeyboardArrowLeft className="text-white" />
          </div>

          <div
            style={{
              right: "0",
              height: "60px",
              opacity: hovered ? "100%" : "0%",
              transition: "1s",
            }}
            className="  swiper-button-next swiper-button-disabled:opacity-30 swiper-button-disabled:cursor-not-allowed bg-main  text-white"
          >
            <MdKeyboardArrowRight className="text-white" />
          </div>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default DepartmentHeads;
