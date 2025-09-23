"use client";
import { motion } from "motion/react";
import React from "react";
import RoatedSVG from "./RotatedSVG";
import Link from "next/link";
import Image from "next/image";
import RotatedSVG from "./RotatedSVG";

const HomePage = ({ opacity }) => {
  return (
    <motion.div className="relative dark:bg-neutral-900 flex w-screen h-screen items-center overflow-hidden bg-no-repeat bg-cover">
      <div className="absolute bottom-12 left-12">
        <Image
          src={"/Home-Page-Illustration.png"}
          alt="image"
          width={500}
          height={500}
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

      <div className="relative flex ml-96 px-12 w-fit justify-center items-center gap-x-[100px]">
        <div className="h-[400px] w-1/3 flex flex-col gap-y-1 items-center">
          <p className="dark:text-neutral-400 text-center tracking-tight sm:text-md lg:text-2xl font-semibold text-[#4f2d91]">
            To empower political leaders, candidates, and parties with
            strategic, data-driven consultancy and innovative digital tools that
            enhance voter engagement, streamline campaign management, and drive
            successful election outcomes.
          </p>
          <span className="h-px w-[200px] bg-neutral-600 mask-l-from-0 mask-r-from-0"></span>
          <h3 className="">Our Mission</h3>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <RotatedSVG size={300} logoSize={80} />
          </div>

          <div className="h-fit">
            <ul className="max-w-xl text-left text-sm lg:text-lg p-4 space-y-3 sm:leading-tight lg:leading-relaxed list-disc list-inside">
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
              className="rounded-lg ml-8 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 font-semibold cursor-pointer hover:scale-101 transition-transform duration-300 ease-in-out"
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
