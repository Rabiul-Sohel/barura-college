"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "@/assets/images/01.png";
import Link from "next/link";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";

const services = [
  {
    name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার)",
    image,
    submenus: [
      {
        name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার",
        path: "citizen-charter",
        image: image,
      },
      {
        name: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
        path: "focal-point",
        image: image,
      },
      {
        name: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার) সংকান্ত ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        path: "focal-point",
        image: image,
      },
    ],
  },
  {
    name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার)",
    image,
    submenus: [
      {
        name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার",
        path: "citizen-charter",
        image: image,
      },
      {
        name: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
        path: "focal-point",
        image: image,
      },
      {
        name: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার) সংকান্ত ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        path: "focal-point",
        image: image,
      },
    ],
  },
  {
    name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার)",
    image,
    submenus: [
      {
        name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার",
        path: "citizen-charter",
        image: image,
      },
      {
        name: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
        path: "focal-point",
        image: image,
      },
      {
        name: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার) সংকান্ত ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        path: "focal-point",
        image: image,
      },
      {
        name: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার) সংকান্ত ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        path: "focal-point",
        image: image,
      },
    ],
  },
  {
    name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার)",
    image: image,
    submenus: [
      {
        name: "সেবা প্রদান প্রতিশ্রুতি(সিটিজেন চার্টার",
        path: "citizen-charter",
      },
      {
        name: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
        path: "focal-point",
      },
      {
        name: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার) সংকান্ত ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        path: "focal-point",
      },
      {
        name: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার) সংকান্ত ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        path: "focal-point",
      },
    ],
  },
];
const Serveces = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    // skip: true
  });
  return (
    <div className=" relative px-5 lg:px-0 flex items-center relative py-10 ">
      <motion.div
        className="container  mx-auto  relative"
        ref={ref}
        initial={{ y: 60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        // viewport={{once:false}}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
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
          className="mySwiper grid shadow-[4px_8px_8px_8px_rgb(0,0,0,0.25)]  cursor-pointer  "
        >
          {services.map((service, idx) => (
            <SwiperSlide
              className=" h-full  shadow-[4px_8px_8px_8px_rgb(0,0,0,0.25)]"
              key={idx}
            >
              <div className="bg-white  w-full border p-2 lg:p-4 ">
                {/* <Image
                    className="mx-auto w-2/3 border border-gray-400 shadow-md"
                    width={500}
                    height={500}
                    alt="head's photo"
                    src={service.image}
                  /> */}

                <div className="  text-main  space-y-2 mt-2">
                  <h2 className="text-main  text-lg font-semibold">
                    {" "}
                    {service.name}{" "}
                  </h2>
                  <div className="flex gap-2 ">
                    <div className="w-1/3">
                      <Image
                        src={service.image}
                        width={200}
                        height={200}
                        alt="image"
                      />
                    </div>
                    <div className="text-main  w-2/3 space-y-2 text-sm ">
                      {service.submenus.map((menu, idx) => {
                        return (
                          <div key={idx} className="flex gap-1">
                            <BiSolidRightArrow className="text-lg"/>
                            <Link  href={menu.path}>
                              {" "}
                              {
                                menu.name.length > 40 ? menu.name.slice(0,45)+ "..." : menu.name
                              }
                              {/* {menu.name.slice(0,20)}{" "} */}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Serveces;
