"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { Comic_Neue, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuMinus, LuPlus } from "react-icons/lu";

const roboto = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMenus, setShowMenus] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState({});
  const pathname = usePathname();

  // this for automatic close menus after successful routing
  useEffect(() => {
    setShowMenus(false);
    setShowSubMenu({});
  }, [pathname]);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      submenus: [
        {
          name: "History of College",
          path: "/college-history",
        },

        {
          name: "Teachers Post Information",
          path: "/teacher-information",
        },
        {
          name: "College Information",
          path: "/college-information",
        },
        {
          name: "Organogram",
          path: "/organogram",
        },
        {
          name: "College Map",
          path: "/college-map",
        },
      ],
    },
    {
      name: "Departments",
      submenus: [
        {
          name: "Accounting",
          path: 'accounting'
        },
        {
          name: "Economics",
          path: 'economics'
        },
        {
          name: "Political Science",
          path: 'pol-science'
        },
        {
          name: "Social Work",
          path: 'social-work'
        },
        
      ]
    },
    {
      name: "HSC",
      submenus: [
        {
          name: "Admission",
          path: "/admission",
        },
        {
          name: 'Internal Examination',
          path: "https://bssgc.rabiulsohel.xyz/"
        },
        {
          name: "Form Fill Up",
          path: 'form-fillup'
        }
      ],
    },
    {
      name: "Facilities",
      submenus: [
        {
          name: "Hostel",
          path: "/hostel",
        },
        {
          name: "Library",
          path: "/library",
        },
      ],
    },
    {
      name: "Co-Curriculum",
      submenus: [
        {
          name: "BNCC",
          path: "/bncc",
        },

        {
          name: "Rover Scout",
          path: "/rover-scout",
        },
        {
          name: "Sports",
          path: "/sports",
        },
      ],
    },
    {
      name: "Gallery",
      submenus: [
        {
          name: "Image Gallery",
          path: "/image-gallery",
        },

        {
          name: "Video Gallery",
          path: "/video-gallery",
        },
      ],
    },
    {
      name: "Notice",
      path: "/notice",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const navMenus = navItems.map((item) => {
    if (item.path) {
      return (
        <li
          className="relative h-auto lg:h-20 flex items-start lg:items-center"
          key={item.path}
        >
          <Link
            className={` w-full  relative group uppercase`}
            href={item.path}
          >
            {" "}
            {item.name}{" "}
            <span
              className={`${pathname === item.path ? " w-full" : ""} ${
                isVisible ? "border-main" : "border-white"
              } group-hover:w-full  border-b-2 w-0   transition-all transform duration-300  content-[''] bottom-0  left-0 absolute`}
            ></span>
          </Link>
        </li>
      );
    } else {
      return (
        <li
          className="relative h-auto  lg:h-20 lg:flex items-start  lg:items-center"
          key={item.name}
        >
          <div className="relative h-full w-full  items-center flex cursor-pointer group">
            <div
              className={`${roboto.className} cursor-pointer w-full relative group uppercase`}
            >
              {" "}
              {item.name}{" "}
              <span
                className={`${pathname === item.path ? " w-full" : ""} ${
                  isVisible ? "border-main" : "border-white"
                } group-hover:w-full  border-b-2 w-0   transition-all transform duration-300  content-[''] bottom-0  left-0 absolute`}
              ></span>
            </div>
            <ul className=" hidden lg:block scale-y-0   group-hover:scale-y-100 transition-all duration-300 transform bg-white text-main absolute w-56 left-0 group-hover:opacity-100 top-20  origin-top font-light  z-1 overflow-hidden  p-2 shadow border-t-4 border-main space-y-1">
              {item.submenus?.map((submenu) => {
                return (
                  <li
                    className=" border-b pb-[6px] 
                   last:border-b-0 w-full border-gray-200 font-semibold "
                    key={submenu.path}
                  >
                    <div className="flex items-center gap-1 hover:transform-[translateX(8px)] transition duration-300">
                      <MdOutlineDoubleArrow />
                      <Link className="  " href={submenu.path}>
                        {" "}
                        {submenu.name}{" "}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      );
    }
  });
  const setSubMenu = (name, value) => {
    setShowSubMenu({
      [name]: value,
    });
  };

  return (
    <div
      className={` ${roboto.className} ${
        isVisible
          ? "sticky text-main transition duration-300 bg-[rgba(255,255,255,0.9)] z-90"
          : " sticky lg:absolute bg-white lg:bg-[rgba(0,0,0,0.2)]  text-white"
      } font-bold p-2  lg:p-0 w-full   `}
    >
      <div className="container justify-between items-center  flex mx-auto">
        <div className="">
          <Link href="/" className=" w-16  ">
            <Image height={64} width={64} alt="logo" src={logo} />
          </Link>
        </div>
        <div className=" hidden  lg:flex ">
          <ul className=" px-1 flex gap-4">{navMenus}</ul>
        </div>
        <div className="navbar-end flex lg:hidden">
          <div className=" ">
            <div
              onClick={() => setShowMenus(!showMenus)}
              tabIndex={0}
              role="button"
              className={`text-3xl text-black`}
            >
              <HiOutlineBars3 />
            </div>
            <ul
              tabIndex={0}
              className={` ${
                showMenus ? " scale-y-100" : " scale-y-0"
              } absolute  left-0 transition-all origin-top transform duration-300  z-60 bg-white text-main top-[76px] overflow-y-auto max-h-[60vh]  px-3 border-t border-gray-300  shadow w-full `}
            >
              {navItems.map((item) => {
                if (item.path) {
                  return (
                    <li
                      className="relative border-b border-gray-300 py-2 flex items-start lg:items-center"
                      key={item.path}
                    >
                      <Link
                        className={` w-full  relative group uppercase`}
                        href={item.path}
                      >
                        {" "}
                        {item.name}{" "}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={item.name}
                      className="py-2 border-b  border-gray-300 uppercase"
                    >
                      <div className="flex justify-between items-center">
                        {item.name}
                        <div className="text-2xl">
                          {showSubMenu[item.name] ? (
                            <LuMinus
                              onClick={() => setSubMenu(item.name, false)}
                            />
                          ) : (
                            <LuPlus
                              onClick={() => setSubMenu(item.name, true)}
                            />
                          )}
                        </div>
                      </div>
                      <ul
                        className={` ${
                          showSubMenu[item.name]
                            ? " opacity-100 scale-y-100"
                            : " hidden scale-y-0 "
                        }    transition-all duration-300 transform bg-white text-main  ml-12    origin-top font-extralight  z-1 overflow-hidden  p-2 pb-0 border-main space-y-1`}
                      >
                        {item.submenus?.map((submenu) => {
                          return (
                            <li
                              className=" border-b pb-[6px] last:border-b-0 w-full border-gray-200 font-semibold "
                              key={submenu.path}
                            >
                              <div className="flex items-center gap-1 hover:transform-[translateX(8px)] transition duration-300">
                                <MdOutlineDoubleArrow />
                                <Link className="  " href={submenu.path}>
                                  {" "}
                                  {submenu.name}{" "}
                                </Link>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
