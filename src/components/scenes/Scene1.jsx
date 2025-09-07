"use client";

import { motion } from "motion/react";
import React, { useContext, useEffect } from "react";
import Card from "../card";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "@/context/scrollcontext";

const scenes = [
  {
    id: 1,
    label: "Scene 1",
    title: "Celebrity Conventions",
    desc: "Multi-day expos featuring panels, signings, and fan interactions.",
  },
  {
    id: 2,
    label: "Scene 2",
    title: "Meet-and-Greets",
    desc: "Intimate sessions with your favorite stars.",
  },
  {
    id: 3,
    label: "Scene 3",
    title: "VIP Experiences",
    desc: "Exclusive access to private events and behind-the-scenes moments.",
  },
  {
    id: 4,
    label: "Scene 4",
    title: "Corporate Events",
    desc: "Book celebrities for brand launches, fundraisers, or promotions.",
  },
  {
    id: 5,
    label: "Scene 5",
    title: "Custom Events",
    desc: "Tailored experiences for fan clubs, festivals, or private parties.",
  },
  {
    id: 6,
    label: "Scene 6",
    title: "Event Management",
    desc: "Tailored experiences for fan clubs, festivals, or private parties.",
  },
];

const Scene1 = ({ xGreen }) => {
  const { setActiveScene } = useContext(ScrollContext);

  return (
    <motion.div className="relative flex h-screen w-[8840px]  bg-[url('/Final-Illustration-Light-Mode.png')] bg-cover bg-no-repeat ">
      <motion.div
        style={{
          translateX: xGreen,
        }}
        className="absolute top-0 bottom-0 z-10 bg-transparent"
      >
        <img className="h-screen w-full" src="/green.svg"></img>
        <p className="absolute top-[40%] left-30 z-10 px-12 text-teal-200 font-semibold text-4xl">
          To empower political leaders,<br /> candidates with data-driven consultancy.
        </p>
      </motion.div>

      <div className="flex w-full h-screen justify-end items-center gap-x-[40rem]">
        {scenes.map((scene, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            rootMargin:"0px -1000px 0px -100px"
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
