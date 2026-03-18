"use client";

import { useRef, useState } from "react";
import { Search, User } from "lucide-react";
import { Play, Pause } from "lucide-react";

export default function Hero() {
  const [type, setType] = useState("shots");
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const trending = {
    shots: ["dashboard", "landing page", "e-commerce", "logo", "card", "icons"],
    designers: ["app design", "web design", "logo design", "animation"],
    services: ["branding", "mobile app", "illustration", "animation"],
  };

  return (
    <section className="container  py-6  mx-auto px-5 lg:px-24 flex flex-col md:flex-row items-center gap-28">
      <div className="flex-1 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold">
          Discover the <br /> World’s Top Designers
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Explore work from the most talented and accomplished designers ready
          to take on your next project.
        </p>

        <div className="flex gap-2  rounded-full mt-8 p-1">
          {["shots", "designers", "services"].map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`px-4 py-2 rounded-full text-sm flex gap-2 items-center  font-semibold capitalize ${
                type === item
                  ? "bg-[#3a3546]  text-white"
                  : "text-gray-600 hover:bg-[#faf9fb]"
              }`}
            >
              <User size={16} />
              {item}
            </button>
          ))}
        </div>

        <div className="mt-5 bg-[#f1f1f4]  rounded-full border-3  border-[#f1f1f4]  py-1 px-2 flex flex-col md:flex-row items-center gap-2 focus-within:bg-white focus-within:border-[#faebf9] transition">
          <div className="flex items-center flex-1 w-full">
            <input
              type="text"
              placeholder="What type of design are you interested in?"
              className="flex-1 px-4 py-2 outline-none text-sm bg-transparent"
            />

            <button className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
          <span className=" font-semibold">Popular:</span>

          {trending[type].map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white border border-[#e7e7e9] text-xs rounded-full cursor-pointer hover:bg-[#faf9fb]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 hidden lg:block relative group">
        <video
          ref={videoRef}
          src="https://cdn.dribbble.com/uploads/67235/original/027c92561de73b87bd2c96512c068255.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-xl shadow-lg"
        />

        <button
          onClick={toggleVideo}
          className="hidden group-hover:block absolute bottom-4 left-4 bg-white backdrop-blur p-2 rounded-full shadow"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow">
          <img
            src="https://cdn.dribbble.com/users/6848313/avatars/normal/0fc82952cfd3b6d1e496259ff75acadf.png"
            alt="designer"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm font-medium">ThreeDee</span>
        </div>
      </div>
    </section>
  );
}
