"use client";
import scenes from "@/constants/scene";
import { ScrollContext } from "@/context/scrollcontext";
import { AnimatePresence, motion } from "motion/react";

import React, { useContext, useEffect } from "react";

const RotatingScene = () => {
  const { activeScene } = useContext(ScrollContext);
  useEffect(() => {
    console.log("active", activeScene);
  }, [activeScene]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="sticky z-50 h-[1100px] w-[1100px] bg-pink-100 -translate-y-[40%]  -translate-x-1/3 left-0 rounded-full"
    >
      <div className="relative top-0 -translate-y-[10%] translate-x-1/3">
        <AnimatePresence mode="wait">
          {scenes.map((scene, idx) => {
            if (activeScene == scene.id) {
              return (
                <motion.img
                  key={idx}
                  style={{ transformOrigin: "bottom left" }}
                  initial={{
                    rotate: 60,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -60,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={scene.img}
                  width={700}
                  height={700}
                ></motion.img>
              );
            }
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RotatingScene;
