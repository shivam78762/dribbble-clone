"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaBookOpen,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileActive, setMobileActive] = useState(null);

  const menus = [
    { name: "Explore", key: "explore" },
    { name: "Hire Talent", key: "hire" },
    { name: "Get Hired", key: "getHired" },
    { name: "Community", key: "community" },
  ];

  const items = [
    {
      title: "Start Project Brief",
      desc: "Get recommendations and proposals",
      href: "/instantmatch",
    },
    {
      title: "Browse Profiles",
      desc: "Find and message talent directly",
      href: "/designers",
    },
    {
      title: "Explore Services",
      desc: "Hire quickly with pre-packaged services",
      href: "/services",
    },
  ];

  const toggleMenu = (key) => {
    setMobileActive((prev) => (prev === key ? null : key));
  };

  const socials = [
    { icon: <FaXTwitter />, href: "https://x.com" },
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaPinterest />, href: "https://pinterest.com" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={` mx-auto w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 bg-white shadow-md z-50" : "relative"
        }`}
      >
        <div 
          className={`px-4 lg:px-16 container mx-auto flex items-center justify-between ${
            isSticky ? "py-4" : "py-5"
          }`}
        >
          <div className="flex items-center gap-6 lg:gap-12">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>

            <Link href="/">
              <Image
                src="/images/svgviewer-png-output.png"
                alt="logo"
                width={100}
                height={40}
                className="object-contain cursor-pointer"
              />
            </Link>

            {isSticky && (
              <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[420px]">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent outline-none text-sm flex-1"
                />

                <span className="text-sm text-gray-600 mx-2 flex gap-2 items-center font-semibold">
                  Shots <ChevronDown size={16} />
                </span>

                <div className="bg-pink-500 text-white rounded-full p-2 cursor-pointer">
                  <Search size={18} />
                </div>
              </div>
            )}

            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-800">
              {menus.map((menu) => (
                <div
                  key={menu.key}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActive(menu.key)}
                >
                  <div className="flex items-center gap-1 hover:text-black">
                    {menu.name}
                    <ChevronDown size={16} />
                  </div>

                  {active === "explore" && menu.key === "explore" && (
                    <div
                      onMouseLeave={() => setActive(null)}
                      className="absolute top-10 left-0 w-60 bg-white rounded-xl border border-[#e7e7e980] shadow-xl py-5 px-3 z-50"
                    >
                      <div className="text-base font-medium">
                        <div className="flex items-center gap-3 p-2 cursor-pointer  hover:text-[#7b7194]">
                          <Sparkles size={16} /> Popular
                        </div>
                        <div className="flex items-center gap-3 p-2 cursor-pointer hover:text-[#7b7194]">
                          <Sparkles size={16} /> New and Noteworthy
                        </div>
                      </div>

                      <div className="border-t border-[#c8c8c8] my-3"></div>

                      <div className="text-sm text-gray-600">
                        {[
                          "Product Design",
                          "Web Design",
                          "Animation",
                          "Branding",
                          "Illustration",
                          "Animation",
                          "Branding",
                          "Illustration",
                        ].map((item, i) => (
                          <p
                            key={i}
                            className="p-2 cursor-pointer hover:text-[#7b7194]"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {active === "hire" && menu.key === "hire" && (
                    <div
                      onMouseLeave={() => setActive(null)}
                      className="absolute top-10 left-0 w-max bg-white rounded-xl border border-[#e7e7e980] shadow-xl py-5 px-5 z-50"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          {items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
                            >
                              <div className="">
                                <Sparkles size={16} />
                              </div>

                              <div>
                                <p className="font-semibold text-base">
                                  {item.title}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="flex flex-col gap-4 mt-5">
                          <Link
                            href="/design-agency"
                            className="font-medium  flex gap-3 items-center"
                          >
                            Browse Design Agencies <FaArrowRight />
                          </Link>

                          <Link
                            href="/jobs/new"
                            className=" font-medium  flex gap-3 items-center"
                          >
                            Post a Full-Time Job <FaArrowRight />
                          </Link>
                        </div>
                      </div>

                      <div className="border-t-2 border-t-[#c8c8c8] my-4"></div>

                      <Link
                        href="https://help.dribbble.com/articles/11083661"
                        target="_blank"
                        className="flex items-center gap-3 text-sm px-3 text-gray-500 hover:text-gray-600 font-normal"
                      >
                        <FaBookOpen />
                        <span>
                          Learn more about how hiring works on Dribbble →
                        </span>
                      </Link>
                    </div>
                  )}

                  {active === "getHired" && menu.key === "getHired" && (
                    <div
                      onMouseLeave={() => setActive(null)}
                      className="absolute top-10 left-0 w-max bg-white rounded-xl border border-[#e7e7e980] shadow-xl py-5 px-5 z-50"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          {items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
                            >
                              <div className="">
                                <Sparkles size={16} />
                              </div>

                              <div>
                                <p className="font-semibold text-base">
                                  {item.title}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="flex flex-col gap-4 mt-5">
                          <Link
                            href="/design-agency"
                            className="font-medium  flex gap-3 items-center"
                          >
                            Browse Design Agencies <FaArrowRight />
                          </Link>

                          <Link
                            href="/jobs/new"
                            className=" font-medium  flex gap-3 items-center"
                          >
                            Post a Full-Time Job <FaArrowRight />
                          </Link>
                        </div>
                      </div>

                      <div className="border-t-2 border-t-[#c8c8c8] my-4"></div>

                      <Link
                        href="https://help.dribbble.com/articles/11083661"
                        target="_blank"
                        className="flex items-center gap-3 text-sm px-3 text-gray-500 hover:text-gray-600 font-normal"
                      >
                        <FaBookOpen />
                        <span>
                          Learn more about how hiring works on Dribbble →
                        </span>
                      </Link>
                    </div>
                  )}

                  {active === "community" && menu.key === "community" && (
                    <div
                      onMouseLeave={() => setActive(null)}
                      className="absolute top-10 left-0 w-max bg-white rounded-xl border border-[#e7e7e980] shadow-xl py-5 px-5 z-50"
                    >
                      <div className="">
                        <div className="space-y-2">
                          {items.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 transition"
                            >
                              <div className="">
                                <Sparkles size={16} />
                              </div>

                              <div>
                                <p className="font-semibold text-base">
                                  {item.title}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="border-t-2 border-t-[#c8c8c8] my-4"></div>

                      <div className="flex gap-4 justify-start items-center">
                        <p className="text-gray-400">Follow Us :</p>
                        {socials.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            target="_blank"
                            className="hover:text-black text-base"
                          >
                            {item.icon}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="lg:hidden bg-[#0d0c22] text-white px-4 py-2 rounded-full text-sm">
              Log in
            </button>

            <div className="hidden lg:flex items-center gap-4">
              <button className="text-sm font-medium text-gray-800 hover:text-black">
                Sign up
              </button>

              <button className="bg-black text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-gray-800">
                Log in
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`mx-auto fixed top-0 left-0 w-full bg-[#f8f7f4] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 z-50 shadow-lg`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(false)}>
              <X size={26} />
            </button>
            <h1 className="text-xl font-semibold italic">Dribbble</h1>
          </div>

          <button className="bg-[#0d0c22] text-white px-5 py-2 rounded-full text-sm">
            Log in
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 text-lg font-semibold">
          {menus.map((menu) => (
            <div key={menu.key} className="border-b py-4">
              <div
                onClick={() => toggleMenu(menu.key)}
                className="flex justify-between items-center cursor-pointer"
              >
                {menu.name}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileActive === menu.key ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileActive === menu.key ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
              >
                {menu.key === "explore" && (
                  <div className="text-sm text-gray-600 flex flex-col gap-2">
                    <p className="hover:text-black cursor-pointer">Popular</p>
                    <p className="hover:text-black cursor-pointer">
                      New and Noteworthy
                    </p>

                    <div className="border-t my-2"></div>

                    {[
                      "Product Design",
                      "Web Design",
                      "Animation",
                      "Branding",
                    ].map((item, i) => (
                      <p key={i} className="hover:text-black cursor-pointer">
                        {item}
                      </p>
                    ))}
                  </div>
                )}

                {menu.key === "hire" && (
                  <div className="flex flex-col gap-3">
                    {items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="p-2 rounded-lg hover:bg-gray-100"
                      >
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </Link>
                    ))}

                    <div className="border-t my-2"></div>

                    <Link href="/design-agency" className="text-sm">
                      Browse Design Agencies →
                    </Link>
                    <Link href="/jobs/new" className="text-sm">
                      Post a Full-Time Job →
                    </Link>
                  </div>
                )}

                {menu.key === "getHired" && (
                  <div className="flex flex-col gap-3">
                    {items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="p-2 rounded-lg hover:bg-gray-100"
                      >
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}

                {menu.key === "community" && (
                  <div className="flex flex-col gap-3">
                    {items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="p-2 rounded-lg hover:bg-gray-100"
                      >
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </Link>
                    ))}

                    <div className="border-t my-2"></div>

                    <div className="flex gap-4">
                      {socials.map((item, i) => (
                        <Link key={i} href={item.href} target="_blank">
                          {item.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <button className="text-pink-500 mt-6 text-left">
            Start Project Brief
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
