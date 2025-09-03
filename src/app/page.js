"use client";

import Scene1 from "@/components/scenes/Scene1";
import Image from "next/image";
import HomePage from "@/components/Home";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useContext, useEffect, useRef } from "react";
import BG from "../../public/Final-Illustration-Light-Mode.png";
import RotatingScene from "@/components/rotating-scene";
import { ScrollContext } from "@/context/scrollcontext";
import Lenis from "lenis";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const xGreen = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.8]);
  const { isInView, setIsInView } = useContext(ScrollContext);

  useMotionValueEvent(xGreen, "change", (latest) => {
    if (latest < -692.1050854325657 && latest > -2833) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="flex relative flex-col w-full h-[1800vh] ">
      {/* <HomePage></HomePage> */}
      <div className="sticky  top-0 left-0 right-0 h-screen overflow-hidden ">
        <motion.div
          className="flex w-fit"
          style={{
            x: x,
          }}
        >
          <HomePage opacity={opacity}></HomePage>

          <Scene1 xGreen={xGreen}></Scene1>
        </motion.div>
        <AnimatePresence>
          {isInView && <RotatingScene></RotatingScene>}
        </AnimatePresence>
      </div>
    </div>
  );
}
