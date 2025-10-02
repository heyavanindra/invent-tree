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
import ProgressBarNavigation from "@/components/progress-bar";


export default function Home() {
  const ref = useRef(null);             
  const scrollWrapperRef = useRef(null); 
  const [scrollHeight, setScrollHeight] = useState("200vh");
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { number: '01', label: 'Home' },
    { number: '02', label: 'Services' },
    { number: '03', label: 'Polls' },
    { number: '04', label: 'Announcement' },
  ];

 
  const [sectionWidths, setSectionWidths] = useState([]);
  
  useEffect(() => {
    const vw = window.innerWidth;
    setSectionWidths([
      { width: vw, name: 'home' },
      { width: 12840 +  (30 / 100) * vw, name: 'scene1' },
      { width: 1500, name: 'scene2' },
      { width: 800, name: 'scene3' },
      { width: 1500, name: 'announcement' }, 
    ]);
  }, []);

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

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const totalWidth = sectionWidths.reduce((acc, section) => acc + section.width, 0);
    const currentPosition = progress * totalWidth;
    
    let accumulatedWidth = 0;
    let newActiveStep = 0;
    
    for (let i = 0; i < sectionWidths.length; i++) {
      if (
        currentPosition >= accumulatedWidth &&
        currentPosition < accumulatedWidth + sectionWidths[i].width
      ) {
        newActiveStep = i;
        break;
      }
      accumulatedWidth += sectionWidths[i].width;
    }
    
    if (currentPosition >= totalWidth - 5) {
      newActiveStep = sectionWidths.length - 1;
    }
    
    setActiveStep(newActiveStep);
  });

  useMotionValueEvent(xGreen, "change", (latest) => {
    if (latest < -400 && latest > -2333) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });

  const handleStepClick = (stepIndex) => {
    const totalWidth = sectionWidths.reduce((acc, section) => acc + section.width, 0);
    let targetPosition = 0;
    
    for (let i = 0; i < stepIndex; i++) {
      targetPosition += sectionWidths[i].width;
    }
    
    if (stepIndex < sectionWidths.length) {
      targetPosition += sectionWidths[stepIndex].width / 1000;
    }
    
    const targetProgress = targetPosition / totalWidth;
    
    const targetScrollY = targetProgress * (ref.current.offsetHeight - window.innerHeight);
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

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
      <div className="md:hidden">
        <HomepageMobile />
        <ScenesSection />
        <Scene2 />
        <Scene3 />
        <Scene4 />
      </div>

      {/* Desktop */}
      <div className="sticky md:block hidden inset-0 h-screen overflow-hidden">
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
          <div className="h-screen w-[30vw]">
            <Scene2 />
          </div>
          <div className="h-screen w-[1500px] px-2">
            <Scene3 />
          </div>
          <div className="h-screen w-fit">
            <Scene4 />
          </div>
        </motion.div>

        <AnimatePresence>
          {isInView && <RotatingScene />}
        </AnimatePresence>

        <ProgressBarNavigation
          steps={steps}
          activeStep={activeStep}
          onStepClick={handleStepClick}
          scrollProgress={scrollYProgress.get()}
          position="bottom-right"
        />
      </div>
    </div>
  );
}