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
import Scene2 from "@/components/scenes/Scene2";
import Scene3 from "@/components/scenes/Scene3";
import Scene4 from "@/components/scenes/Scene4";
import HomepageMobile from "@/components/mobile-view-components/Homepage";
import ScenesSection from "@/components/mobile-view-components/ScenesSection";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start","end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);
  const xGreen = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.8]);
  const { isInView, setIsInView } = useContext(ScrollContext);

  useMotionValueEvent(xGreen, "change", (latest) => {
    if (latest < -692.1050854325657 && latest > -1933) {
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
    <div ref={ref} className="flex relative flex-col w-full sm:h-[1800vh]">
      {/* <HomePage></HomePage> */}
    
    <div className="sm:hidden">
    <HomepageMobile></HomepageMobile>
    <ScenesSection></ScenesSection>
    <Scene2></Scene2>
    <Scene3></Scene3>
    <Scene4></Scene4>
    </div>



      {/* Desktop view */}

      <div className="sticky sm:block  hidden inset-0 h-screen overflow-hidden ">
        <motion.div
          className="flex w-fit overflow-hidden"
          style={{
            translateX: x,
          }}
        >
          <div className="w-[100vw] max-sm:hidden h-screen">
            <HomePage opacity={opacity}></HomePage>
          </div>

          <div className="h-screen max-sm:hidden w-[8840px] ">
            <Scene1 xGreen={xGreen}></Scene1>
          </div>
          <div className="w-[80vw] flex justify-center items-center h-screen">
            <Image src={'/Illustration-7.png'} alt="image" width={1000} height={1000}></Image>
          </div>
          <div className=" h-screen max-sm:hidden w-[30vw]">
            <Scene2></Scene2>
          </div>
          <div className="h-screen max-sm:hidden w-[120vw] ">
            <Scene3></Scene3>
          </div>
          <div className="h-screen max-sm:hidden w-fit">
            <Scene4></Scene4>
          </div>
          
        </motion.div>
        <AnimatePresence>
          {isInView && <RotatingScene></RotatingScene>}
        </AnimatePresence>
      </div>
    </div>
  );
}
