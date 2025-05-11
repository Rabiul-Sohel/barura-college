import { Comic_Neue } from "next/font/google";
import Link from "next/link";
import React from "react";
// import { roboto } from "./Shared/Navbar";
const roboto = Comic_Neue({
  subsets: ["latin"],
  weight: [  "300", "400", "700"],
});

const ScrollBox = () => {
  return (
    <div className="bg-main py-2 lg:py-0  ">
      <div className="flex container mx-auto overflow-hidden border-r ">
        <Link href='/notice' className={` border-x-2 hidden lg:block cursor-pointer hover:text-amber-500  transition duration-300  py-3 w-[250px] text-center font-bold uppercase overflow-hidden bg-blue-800 ${roboto.className}`}>
          Latest Notice
        </Link>
        <div className=" relative whitespace-nowrap flex items-center overflow-hidden ">
          <div className="scrollX-animation pl-[100%] inline-flex  gap-5 pause-animation  relative ">
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer  text-white  "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
           
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            <Link
              href="/about"
              className="hover:text-warning cursor-pointer text-white   "
            >
              This is scroll text
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBox;
