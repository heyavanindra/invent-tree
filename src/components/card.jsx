"use client";

import { motion } from "motion/react";
import React from "react";


const Card = ({ desc, title, id ,ref ,points}) => {

  return (
    <div ref={ref}>
      <motion.div
       
       
        
        className="h-screen flex flex-col justify-center items-center w-[400px]"
      >
        <div className="p-4 bg-white/80 flex flex-col justify-center items-center gap-y-2 backdrop-blur-xs  rounded-2xl lg:w-[20vw] text-center">
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
        <motion.div
          initial={{
            y:-10,
            opacity:0.5
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.3,
            damping:300,
            
          }}
          
        >
          <img src="/logo/Invent-Tree logo Favicon-08.png" alt="pin" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
