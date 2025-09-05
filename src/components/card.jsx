"use client";

import { motion } from "motion/react";
import React from "react";


const Card = ({ desc, title, id ,ref}) => {

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
        className="h-screen flex flex-col justify-center items-center bg-black w-[400px]"
      >
        <div className="p-4 bg-white/80 flex flex-col justify-center items-center gap-y-2 backdrop-blur-xs  rounded-2xl lg:w-[20vw] text-center">
          <p>{id}</p>
          <h1 className="text-3xl font-semibold text-[#604e84]">{title}</h1>
          <p className="font-medium">{desc}</p>
        </div>
        <div>
          <img src="/pin.svg" alt="pin" />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
