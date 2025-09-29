"use client";
import { motion } from "motion/react";
import React from "react";

const Card = ({ desc, title, id, ref, points }) => {
  return (
    <div ref={ref}>
      <motion.div 
        className="h-screen flex flex-col justify-center items-center w-[400px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "0px -300px 0px -100px" }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-center mb-3"
          initial={{
            y: -50,
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          viewport={{ margin: "0px -300px 0px -100px" }}
          transition={{
            type: "spring",
            stiffness: 900,
            damping: 15,
            mass: 0.8,
            delay: 0.1,
          }}
        >
          <div className="w-16 p-2 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10 bg-[#BED5E9]">
            <img src="/logo/Invent-Tree logo Favicon-08.png" alt="pin" />
          </div>
          <div className="mt-1 w-1 h-1 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#8777a9]"></div>
        </motion.div>

        <motion.div
          className="p-4 bg-white/80 flex flex-col justify-center items-center gap-y-2 backdrop-blur-xs rounded-2xl lg:w-[20vw] text-center"
          initial={{
            y: 30,
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          viewport={{ margin: "0px -300px 0px -100px" }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: 0.3, 
          }}
        >
          <h1 className="text-3xl font-semibold text-[#604e84]">{title}</h1>
          <p className="font-medium dark:text-neutral-600">{desc}</p>
          <div>
            {points?.length > 0 && (
              <ul className="list-disc list-inside text-left mt-2 space-y-1">
                {points.map((point, idx) => (
                  <li key={idx} className="text-sm dark:text-neutral-700">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;