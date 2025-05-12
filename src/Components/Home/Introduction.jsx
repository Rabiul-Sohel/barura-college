"use client";
import Image from "next/image";
import React from "react";
// import image from "../../assets/images/banner1.jpeg";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { CgPlayButtonO } from "react-icons/cg";
import { GoPlay } from "react-icons/go";
import Services from "@/Components/Home/Serveces";
import RoundButton from "@/Components/Buttons/RoundButton"

const Introduction = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div className="pt-4 lg:pt-8 bg-gray-200 space-y-5 relative">
      <div className=" min-h-[80vh]   overflow-hidden flex items-center py-4 lg:py-8 bg-gray-200">
        <div
          ref={ref}
          className="container mx-5 grid grid-cols-1 lg:grid-cols-7 justify-center items-center gap-5 w-full h-full pb-10  lg:mx-auto text-black "
        >
          <motion.div
            style={{
              backgroundImage: "url(banner1.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={`h-full min-h-[70vh] group col-span-3 relative flex  justify-center items-center  shadow-[6px_8px_6px_2px_rgba(0,0,0,0.5)]`}
          >
            {/* <Image
            className="w-full  h-full"
            width={300}
            height={300}
            alt="College Image"
            src={image}
          /> */}

            <GoPlay className="group-hover:text-white rounded-full group-hover:bg-main  text-8xl animate-play  cursor-pointer font-light  transition duration-400  text-main bg-white " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="h-[70vh] p-5 lg:p-12 shadow-[8px_8px_6px_2px_rgba(0,0,0,0.5)] col-span-4 space-y-4 bg-white"
          >
            <h1 className="text-xl lg:text-2xl font-bold text-main">
              Welcome to Barura Shahid Smriti Govt. College
            </h1>
            <div>
              <p className="text-justify">
                Ananda Mohan College, Mymensingh is one of the renowned college
                in Bangladesh. It was established 1901. Ananda Mohan Bose
                established this Institution in 1883 in his own family residence
                at Ram Babu Road. This institution was later renamed City
                Collegiate School. On 18 July 1901, it introduced a college
                branch as an affiliate of the Calcutta City College established
                by the Brahmo Samaj. The college section was closed in 1906
                after the death of Ananda Mohan Basu. Two years later, Mr.
                Blackwood, the district magistrate of Mymensingh took an
                initiative to reopen the college. In the process, the college
                was renamed Ananda Mohan College. Professor Baikuntha Kishor
                Chakravarty was appointed its first principal. The college was
                affiliated with Calcutta University....
              </p>
              <RoundButton name="Read More"/>
            </div>
          </motion.div>
        </div>
      </div>
      <Services/>
    </div>
  );
};

export default Introduction;
