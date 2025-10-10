"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const Card = ({ desc, title, id, ref, points, position }) => {
  return (
    <div>
      <motion.div
        className={cn(
          "absolute  flex flex-col justify-center items-center ",
          position,
        )}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "0px -300px 0px -100px" }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          ref={ref}
          className=" bg-white/90 rounded-2xl overflow-hidden flex flex-col justify-center items-center gap-y-2 backdrop-blur-xs lg:w-[20vw] text-center w-xs"
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
            delay: 0.1,
          }}
        >
          <div className="bg-gradient-to-b from-[#DD1F3D] to-[#233A8D] p-2 w-full">
            <h1 className="text-3xl font-semibold text-neutral-50">{title}</h1>
          </div>
          <p className="font-medium dark:text-neutral-600">{desc}</p>
          <div className="pb-3">
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
