"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { ScrollContext } from "@/context/scrollcontext";

import HomePage from "@/components/Home";
import Scene1 from "@/components/scenes/Scene1";
import Scene2 from "@/components/scenes/Scene2";
import Scene3 from "@/components/scenes/Scene3";
import Scene4 from "@/components/scenes/Scene4";
import RotatingScene from "@/components/rotating-scene";
import HomepageMobile from "@/components/mobile-view-components/Homepage";
import ScenesSection from "@/components/mobile-view-components/ScenesSection";

export default function Home() {
  const ref = useRef(null);             
  const scrollWrapperRef = useRef(null); 
  const [scrollHeight, setScrollHeight] = useState("200vh");

  
  useEffect(() => {
    const calcScrollHeight = () => {
      if (!scrollWrapperRef.current) return;
      const totalWidth = scrollWrapperRef.current.scrollWidth;
      const vw = window.innerWidth;
      const vh = (totalWidth / vw) * 100;
      setScrollHeight(`${vh}vh`);
    };

    calcScrollHeight();
    window.addEventListener("resize", calcScrollHeight);
    return () => window.removeEventListener("resize", calcScrollHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const xGreen = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.8]);

  const { isInView, setIsInView } = useContext(ScrollContext);

  useMotionValueEvent(xGreen, "change", (latest) => {
    if (latest < -400 && latest > -2333) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="flex relative flex-col w-full" style={{ height: scrollHeight }}>
      {/* Mobile */}
      <div className="sm:hidden">
        <HomepageMobile />
        <ScenesSection />
        <Scene2 />
        <Scene3 />
        <Scene4 />
      </div>

      {/* Desktop */}
      <div className="sticky sm:block hidden inset-0 h-screen overflow-hidden">
        <motion.div
          ref={scrollWrapperRef}
          className="flex w-fit overflow-hidden"
          style={{ x }}
        >
          <div className="w-[100vw] h-screen">
            <HomePage opacity={opacity} />
          </div>

          <div className="h-screen w-[12840px]">
            <Scene1 xGreen={xGreen} />
          </div>

          <div className="relative w-[30vw] flex justify-center items-center h-screen bg-[url('/assests/bg-vinyl.webp')]">
            <div className="absolute inset-0 bg-white opacity-90" />
          </div>

          <div className="h-screen w-[30vw]">
            <Scene2 />
          </div>

          <div className="h-screen w-[1500px] px-2">
            <Scene3 />
          </div>

          <div className="h-screen w-[100vw]">
            <Scene4 />
          </div>
        </motion.div>

        <AnimatePresence>
          {isInView && <RotatingScene />}
        </AnimatePresence>
      </div>
    </div>
  );
}
