"use client";

import { motion } from "motion/react";
import React from "react";


const Card = ({ desc, title, id ,ref ,points}) => {

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          stiffness: 800,
        }}
        viewport={{
          once: false,
        }}
        className="h-screen flex flex-col justify-center items-center w-[400px]"
      >
        <div className="p-4 bg-white/80 flex flex-col justify-center items-center gap-y-2 backdrop-blur-xs  rounded-2xl lg:w-[20vw] text-center">
          <p className="text-neutral-800">{id}</p>
          <h1 className="text-3xl  font-semibold text-[#604e84]">{title}</h1>
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
        </div>
        <div>
          <img src="/logo/Invent-Tree logo Favicon-08.png" alt="pin" />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
