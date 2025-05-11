"use client";
import React from "react";

import image1 from "@/assets/images/banner1.jpeg";
import image2 from "@/assets/images/banner2.png";
import image3 from "@/assets/images/banner-3.jpeg";
import image4 from "@/assets/images/banner-4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import { Autoplay, Navigation, Zoom } from "swiper/modules";

const HomeBanner = () => {
  const bannerImages = [
    {
      src: image1,
      alt: "Banner1",
      textTitle: "Barura's old and only govt. college.",
    },
    {
      src: image2,
      alt: "Banner2",
      textTitle: "Barura's old and only govt. college.",
    },
    {
      src: image3,
      alt: "Banner3",
      textTitle: "Barura's old and only govt. college.",
    },
    {
      src: image4,
      alt: "Banner4",
      textTitle: "Barura's old and only govt. college.",
    },
  ];
  return (
    <div className="relative overflow-hidden ">
      <Swiper
        spaceBetween={50}
        navigation={true}
        loop={true}
        zoom={true}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Autoplay, Zoom]}
        className="mySwiper h-screen"
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {bannerImages.map((image, idx) => (
          <SwiperSlide className="w-full h-screen" key={idx}>
            <div className="w-full h-screen relative overflow-hidden ">
              <Image
                className="w-full h-screen object-cover  scale-100 zoom-animation"
                width={300}
                height={300}
                alt={image.alt}
                src={image.src}
              />
              <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.0)] flex items-center text-white top-0 w-full h-full ">
                <div className="text-start ml-5 lg:ml-20 space-y-1 lg:space-y-3">
                  <h3 className="text-lg lg:text-5xl font-bold"> {image.textTitle} </h3>
                  <button className="lg:py-1 text-sm lg:text-base px-1  lg:px-3 py-0  border cursor-pointer border-warning hover:bg-warning  duration-500 transition hover:text-black ml-2 lg:ml-5">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Image className="w-full h-screen" alt="bannerImage" src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-screen" alt="bannerImage" src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Zoom>
            <Image className="w-full h-screen" alt="bannerImage" src={image3} />
          </Zoom>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-screen" alt="bannerImage" src={image4} />
        </SwiperSlide> */}
      </Swiper>
      <div className="bg-gradient-to-r  from-[rgba(0,0,0,0.0)] to-[rgba(51,23,245,0.8)] bottom-4 lg:bottom-12  right-4 lg:right-10 z-1  absolute py-4 text-center">
        <div className=" text-xl flex flex-col gap-3   font-bold text-white ">
          <div className="flex gap-3  justify-center items-center ">
            <span className="lg:w-52 w-36 text-sm lg:text-base text-right  ">{"Faculty Members: 27"}</span>
            <span>|</span>
            <span className="text-left text-sm lg:text-base w-32 lg:w-40 ">Departments: 4</span>
          </div>
          <div className="flex justify-center gap-1 lg:gap-3  ">
            <span className="w-36 lg:w-52 text-sm lg:text-base  text-right ">Students: 3000+</span>
            <span>|</span>
            <span className="text-left text-sm lg:text-base  w-32 lg:w-40  ">Founded: 1972</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
