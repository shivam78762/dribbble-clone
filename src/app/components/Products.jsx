"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaAngleDown,
  FaBookBookmark,
  FaEye,
  FaFilter,
  FaHeart,
  FaRegBookmark,
} from "react-icons/fa6";

const ExplorePage = () => {
  const categories = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product Design",
    "Typography",
    "Web Design",
  ];

  const allData = [
    {
      title: "Logo Design",
      category: "Branding",
      author: "John",
      likes: 80,
      views: "10k",
    },
    {
      title: "App UI",
      category: "Mobile",
      author: "Alex",
      likes: 65,
      views: "8k",
    },
    {
      title: "Typography Poster",
      category: "Typography",
      author: "Sam",
      likes: 40,
      views: "5k",
    },
    {
      title: "Website UI",
      category: "Web Design",
      author: "Lisa",
      likes: 90,
      views: "12k",
    },
    {
      title: "Illustration Art",
      category: "Illustration",
      author: "Emma",
      likes: 55,
      views: "6k",
    },
    {
      title: "Website UI",
      category: "Web Design",
      author: "Lisa",
      likes: 90,
      views: "12k",
    },
    {
      title: "Illustration Art",
      category: "Illustration",
      author: "Emma",
      likes: 55,
      views: "6k",
    },
    {
      title: "Website UI",
      category: "Web Design",
      author: "Lisa",
      likes: 90,
      views: "12k",
    },
    {
      title: "Illustration Art",
      category: "Illustration",
      author: "Emma",
      likes: 55,
      views: "6k",
    },
    {
      title: "Website UI",
      category: "Web Design",
      author: "Lisa",
      likes: 90,
      views: "12k",
    },
    {
      title: "Illustration Art",
      category: "Illustration",
      author: "Emma",
      likes: 55,
      views: "6k",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Discover");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Popular");

  const filteredData = allData
    .filter((item) =>
      activeCategory === "Discover" ? true : item.category === activeCategory,
    )
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "Popular" ? b.likes - a.likes : a.likes - b.likes,
    );

  const [open, setOpen] = useState(false);

  const options = ["Popular", "New & Noteworthy"];

  return (
    <div className="container mx-auto px-5 lg:px-24 py-5">
      <div className="flex items-center justify-between ">
        <div className="relative inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between gap-2 px-4 py-2 bg-white border border-[#e7e7e9e6] rounded-md text-sm shadow-sm min-w-35"
          >
            {sort}
            <span
              className={`text-xs transform transition-transform duration-200 ease-in-out ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaAngleDown />
            </span>
          </button>

          {open && (
            <div className="absolute mt-2 z-50 min-w-50 bg-white border border-[#e7e7e9e6] p-3 rounded-xl shadow-md overflow-hidden">
              <div className="">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSort(option);
                      setOpen(false);
                    }}
                    className={`flex justify-between items-center px-4 py-2 text-xs rounded cursor-pointer ${
                      sort === option
                        ? "bg-gray-100 font-medium"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {option}
                    {sort === option && <span>✓</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          {categories.map((item, i) => (
            <span
              key={i}
              onClick={() => setActiveCategory(item)}
              className={`cursor-pointer px-3 py-2 rounded-full transition ${
                activeCategory === item ? "bg-[#f8f7f4]" : "hover:bg-gray-100"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <button
          className="px-4 py-2 bg-white border border-[#eee] rounded-full text-sm  flex gap-2 items-center"
        >
        <FaFilter />  Filters
        </button>
      </div>

     

      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://cdn.dribbble.com/userupload/47087911/file/3d93731505e56fde1406a8b404c8db1b.jpg?resize=1504x1128&vertical=center"
                  alt="design"
                  className="w-full h-60 object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition duration-300">
                  <div className="bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-center">
                    <p className="text-white text-sm font-medium">
                      HTBSE Logo & Book...
                    </p>

                    <div className="flex justify-end gap-2">
                      <button className="bg-white rounded-full p-3 text-black text-sm shadow">
                        <FaRegBookmark />
                      </button>
                      <button className="bg-white rounded-full p-3 text-black text-sm shadow">
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/author.webp"
                    alt={item.author}
                    width={20}
                    height={20}
                    className="w-6 h-6 rounded-full object-cover"
                  />

                    <p className="font-medium text-sm leading-none">{item.title}</p>
                    <p className="text-[#524b63] text-[10px] rounded-md font-semibold bg-[#ecebf0] p-1 px-2 ">PRO</p>
                </div>

                <div className="text-gray-500 text-sm flex items-center font-medium gap-2">
                  <FaHeart /> {item.likes}
                  <FaEye /> {item.views}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No results found
          </p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
