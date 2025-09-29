import React from "react";
import Link from "next/link";
import RotatedSVG from "./../RotatedSVG";

const HomepageMobile = () => {
  return (
    <>
      <div className="flex flex-col bg-violet-100 dark:bg-neutral-900 justify-center items-center min-h-screen px-4 py-8">
        {/* Rotated SVG Logo */}
        <div className="mb-6">
          <RotatedSVG size={150} logoSize={45} />
        </div>

        {/* Main Heading */}
        <div className="p-6">
          <h1 className="text-[#4f2d91] dark:text-neutral-400 font-semibold text-2xl text-center tracking-tight leading-tight">
            Your objective is our goal
          </h1>
        </div>

        {/* Divider */}
        <span className="h-px mt-2 w-[50vw] bg-neutral-600 dark:bg-neutral-500 mask-r-from-0% mask-l-from-0%"></span>
        
        {/* Our Mission Label */}
        <span className="text-lg font-medium mt-3 mb-4 dark:text-neutral-300">Our Mission</span>

        {/* Features List */}
        <div className="px-6 pb-4">
          <ul className="text-left text-sm space-y-3 list-disc list-inside text-black dark:text-neutral-300">
            <li>
              <span className="font-semibold text-[#4f2d91] dark:text-purple-400">Trusted Data:</span>{" "}
              Our polls are conducted with rigorous standards to reflect true public sentiment.
            </li>
            <li>
              <span className="font-semibold text-[#4f2d91] dark:text-purple-400">Expert Analysis:</span>{" "}
              Our team of seasoned analysts provides clear, actionable insights.
            </li>
            <li>
              <span className="font-semibold text-[#4f2d91] dark:text-purple-400">Custom Solutions:</span>{" "}
              Tailored polling services to meet your campaign or policy needs.
            </li>
          </ul>
        </div>

        {/* Learn More Button */}
        <Link
          href={"/about"}
          className="rounded-lg px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    </>
  );
};

export default HomepageMobile;