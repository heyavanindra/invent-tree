import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

const RotatedSVG = ({
  className,
  svgClassName,
  size = 128, 
  logoSize = 40,
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        `h-[${size}px] w-[${size}px]`, 
        className
      )}
      style={{ width: size, height: size }} 
    >
      <motion.svg
        viewBox="0 0 300 300"
        className={cn("w-full h-full", svgClassName)}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150
             m -100, 0
             a 100,100 0 1,1 200,0
             a 100,100 0 1,1 -200,0"
          />
        </defs>
        <text
          className="fill-black dark:fill-white tracking-[9px]"
          fontSize="20"
          fontFamily="sans-serif"
        >
          <textPath href="#circlePath" startOffset="0%">
            &#8226; SOLVE &#8226; ENHANCE &#8226; ACCELERATE
          </textPath>
        </text>
      </motion.svg>

      <div className="absolute flex items-center justify-center">
        <img
          src="/logo/Invent-Tree logo Favicon-08.png"
          alt="nj logo"
          style={{ width: logoSize, height: logoSize }}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default RotatedSVG;
