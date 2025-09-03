"use client";

import { motion } from "motion/react";
import React, { useContext, useEffect, useRef } from "react";
import Card from "../card";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "@/context/scrollcontext";

const scenes = [
  {
    id: 1,
    label: "Scene 1",
    title: "Supplier",
    desc: "Suppliers ensure that biodegradable waste is processed efficiently to promote sustainable agriculture.",
  },
  {
    id: 2,
    label: "Scene 2",
    title: "Collection",
    desc: "Waste is collected from households and businesses to ensure proper recycling and reuse.",
  },
  {
    id: 3,
    label: "Scene 3",
    title: "Transportation",
    desc: "Collected waste is transported safely to processing centers, minimizing environmental impact.",
  },
  {
    id: 4,
    label: "Scene 4",
    title: "Processing",
    desc: "Waste is converted into useful resources such as compost, biogas, or recyclable materials.",
  },
  {
    id: 5,
    label: "Scene 5",
    title: "Distribution",
    desc: "Processed materials are distributed to farms, industries, and markets for reuse in production cycles.",
  },
  {
    id: 6,
    label: "Scene 6",
    title: "Consumer",
    desc: "Consumers benefit from sustainable products and contribute back by responsibly disposing waste.",
  },
];

const Scene1 = ({ xGreen }) => {
  const {  setActiveScene } = useContext(ScrollContext);

  return (
    <motion.div className="relative flex h-screen w-[8840px] bg-[url('/bg-map.jpg')] bg-cover bg-no-repeat bg-black">
      <motion.div
        style={{
          x: xGreen,
        }}
        className="absolute top-0 bg-transparent"
      >
        <img src="/green.svg"></img>
      </motion.div>

      <div className="flex w-full h-screen justify-end items-center gap-x-[40vh]">
        {scenes.map((scene, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
          });

          useEffect(() => {
            if (inView) {
              setActiveScene(scene.id);
            }
          }, [inView]);

          return (
            <Card
              ref={ref}
              key={idx + scene.id}
              id={scene.id}
              desc={scene.desc}
              title={scene.title}
            ></Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Scene1;

/**
  

<div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>


 */
