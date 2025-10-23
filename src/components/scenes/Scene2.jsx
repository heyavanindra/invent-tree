"use client";
import React from "react";
import { motion } from "motion/react";

const ScrollingCarousel = () => {
  // Image URLs
  const images = [
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438720/54890ca6-f239-4a94-94ef-c43ea20b1dbe_b5bfhy.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1761198787/f9f3a672-13bf-49e3-b835-4e28073f6b9f-removebg-preview_ojdsdi.png",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438718/de34d6c5-1074-44a6-b56f-0e555d56d1a0_j9ru2g.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438717/Rv_Logo-06_wnrypx.png",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438718/c6f379b7-e748-49a4-8063-ace3d96f273d_cx1n1w.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1761198787/08bc50f7-316b-40fd-899a-7c6efaa3b34d-removebg-preview_pk7s2j.png",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438717/0f843f03-f828-47ce-b615-6141f687e808_pwnpbr.jpg",
  ];

  const textWords = [
    "Solve",
    "Enhance",
    "Accelerate",
  ];

  // Function to insert random text boxes into image array
  const insertRandomTexts = (imageArray) => {
    const result = [
      ...imageArray.map((url) => ({
        type: "image",
        content: url,
        isSquare: false,
      })),
    ];

    // Shuffle text words to randomize their order
    const shuffledWords = [...textWords].sort(() => Math.random() - 0.5);
    
    shuffledWords.forEach((word) => {
      const randomIndex = Math.floor(Math.random() * result.length);
      result.splice(randomIndex, 0, {
        type: "text",
        content: word,
        isSquare: true,
      });
    });

    return result;
  };

  // Use React.useMemo with a key that changes to force re-randomization
  const [randomKey] = React.useState(() => Math.random());
  const leftColumnData = React.useMemo(() => insertRandomTexts(images), [randomKey]);
  const rightColumnData = React.useMemo(() => insertRandomTexts(images), [randomKey]);

  const leftItems = [...leftColumnData, ...leftColumnData];
  const rightItems = [...rightColumnData, ...rightColumnData];

  return (
    <div className="w-full h-screen bg-zinc-100 overflow-hidden">
      <div className="flex h-full">
        {/* Left Column */}
        <div className="w-1/2 h-full overflow-hidden">
          <motion.div
            className="flex flex-col"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          >
            {leftItems.map((item, index) => (
              <div key={`left-${index}`} className="flex-shrink-0">
                {item.type === "text" ? (
                  <div className="w-full aspect-square bg-white dark:bg-black flex items-center justify-center">
                    <h2 className="text-[#67577F] dark:text-[#F0EFEF]  text-6xl font-bold">
                      {item.content}
                    </h2>
                  </div>
                ) : (
                  <img
                    src={item.content}
                    alt={`carousel-image-${index}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-1/2 h-full overflow-hidden">
          <motion.div
            className="flex flex-col"
            animate={{ y: ["-25%", "-75%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          >
            {rightItems.map((item, index) => (
              <div key={`right-${index}`} className="flex-shrink-0">
                {item.type === "text" ? (
                  <div className="w-full aspect-square bg-white dark:bg-black flex items-center justify-center">
                    <h2 className="text-[#67577F] dark:text-[#F0EFEF]  text-6xl font-bold">
                      {item.content}
                    </h2>
                  </div>
                ) : (
                  <img
                    src={item.content}
                    alt={`carousel-image-${index}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingCarousel;