"use client";
import { motion } from "motion/react";
// import Image from "next/image";
import React from "react";
import RoatedSVG from "./RotatedSVG";
import Link from "next/link";
import { useTheme } from "next-themes";

const HomePage = ({ opacity }) => {
  const { theme } = useTheme();
 
   const bgImage =
     theme === "dark"
       ? "url('/Home-Page-Invent-Tree-Dark.png')"
       : "url('/Home-Page-Invent-Tree.png')";

  return (
    <motion.div className="relative flex w-screen  h-screen items-center overflow-hidden bg-no-repeat bg-cover"
     style={{ backgroundImage: bgImage }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: opacity,
          backgroundColor: "black",
        }}
      ></motion.div>
      {/* <Image
        className="absolute bottom-10 left-10 -z-10"
        src={"/Home-Page-Illustration.png"}
        width={500}
        height={500}
        alt="logo"
      ></Image> */}

      <div className="flex ml-12 px-12 w-fit justify-end items-center gap-x-[100px]">
        <div className="h-[400px] w-1/3  flex flex-col gap-y-1 items-center">
          <p className="text-center tracking-tight sm:text-md lg:text-2xl font-semibold text-[#4f2d91]">
            To empower political leaders, candidates, and parties with
            strategic, data-driven consultancy and innovative digital tools that
            enhance voter engagement, streamline campaign management, and drive
            successful election outcomes.
          </p>
          <span className="h-px w-[200px]  bg-neutral-600 mask-l-from-0 mask-r-from-0"></span>
          <h3 className="">Our Mission</h3>
        </div>
        <div>
          <div className=" h-fit">
            <p className="max-w-xl text-center text-sm sm:leading-tight tracking-tight lg:text-lg p-4 lg:leading-relaxed">
              To provide accurate, transparent, and timely polling data that
              reflects the voice of the public, enabling informed decisions in
              the political landscape.
              
            </p>
            
          </div>
          <Link href={"/about"} className="rounded-lg ml-8 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 font-semibold cursor-pointer hover:scale-101 transition-transform duration-300 ease-in-out ">
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-[11vw]">
        <RoatedSVG></RoatedSVG>
      </div>
    </motion.div>
  );
};

export default HomePage;
