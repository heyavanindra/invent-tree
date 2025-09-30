"use client";
import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RotatedSVG from "./RotatedSVG";

const HomePage = ({ opacity }) => {
  return (
    <motion.div className="relative dark:bg-neutral-900 flex w-screen min-h-screen items-center overflow-hidden bg-no-repeat bg-cover">
      <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 hidden sm:block">
        <Image
          src={"/Home-Page-Illustration.png"}
          alt="image"
          width={500}
          height={500}
          className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
        />
      </div>

      <motion.div
        id="homePageScroll"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: opacity,
          backgroundColor: "black",
        }}
      ></motion.div>

      <div className="relative flex flex-col sm:flex-row w-full px-4 sm:ml-12 md:ml-24 lg:ml-24 sm:px-8 md:px-12 justify-center items-center gap-y-8 sm:gap-x-12 md:gap-x-20 lg:gap-x-[100px] py-12 sm:py-0">
        <div className="w-full sm:w-1/2 sm:h-[400px] mb-12 flex flex-col gap-y-1 items-center justify-center text-center">
          <p className="dark:text-neutral-400  w-full tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#4f2d91] px-4">
            Your objective is our goal
          </p>
          <span className="h-px w-32 sm:w-40 md:w-[200px] bg-neutral-600 mask-l-from-0 mask-r-from-0 my-2"></span>
          <h3 className="text-base sm:text-lg md:text-xl">Our Mission</h3>
        </div>

        <div className="flex flex-col sm:ml-8 md:ml-20 lg:ml-40 justify-center items-center w-full sm:w-auto">
          <div className="mb-6 sm:mb-0">
            <RotatedSVG 
              size={200}
              logoSize={55}
              className="sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]"
            />
          </div>

          <div className="w-full max-w-2xl">
            <ul className="text-left text-xs sm:text-sm md:text-base lg:text-lg p-4 space-y-2 sm:space-y-3 sm:leading-tight lg:leading-relaxed list-disc list-inside">
              <li>
                <span className="font-semibold text-[#4f2d91]">Trusted Data:</span>{" "}
                Our polls are conducted with rigorous standards to reflect true public sentiment.
              </li>
              <li>
                <span className="font-semibold text-[#4f2d91]">Expert Analysis:</span>{" "}
                Our team of seasoned analysts provides clear, actionable insights.
              </li>
              <li>
                <span className="font-semibold text-[#4f2d91]">Custom Solutions:</span>{" "}
                Tailored polling services to meet your campaign or policy needs.
              </li>
            </ul>

            <Link
              href={"/about"}
              className="inline-block rounded-lg ml-4 sm:ml-6 md:ml-8 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-400 font-semibold cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out text-xs sm:text-sm md:text-base text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;