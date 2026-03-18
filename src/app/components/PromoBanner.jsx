"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="container mx-auto">
      <Link
        href=""
        className="mx-5 lg:mx-24 block bg-[#f8f8fc] rounded-xl px-4 py-6 lg:py-3 my-5 transition"
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-white border border-white hover:border-[#d1ceda] py-2 px-3 rounded-full relative flex items-center gap-1">
            <div className="p-2 text-[#956bcd]">
              <Sparkles size={16} />
            </div>

            <div className=" flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-gray-900">
                Start a Project Brief
              </span>

              <span className="text-[8px] text-white bg-[#ea4c89] absolute -top-1 -right-4  px-2 py-0.5 rounded-full uppercase font-medium">
                New
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 max-w-xl text-wrap lg:text-nowrap">
            Tell us what you need and instantly connect with world-class talent
            ready to work on your project.
          </p>
        </div>
      </Link>
    </div>
  );
}
