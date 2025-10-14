"use client";
import React from "react";
import { motion } from "motion/react";

const ScrollingCarousel = () => {
  // Image URLs
  const images = [
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438720/54890ca6-f239-4a94-94ef-c43ea20b1dbe_b5bfhy.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438718/f9f3a672-13bf-49e3-b835-4e28073f6b9f_achldt.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438718/de34d6c5-1074-44a6-b56f-0e555d56d1a0_j9ru2g.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438717/Rv_Logo-06_wnrypx.png",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438718/c6f379b7-e748-49a4-8063-ace3d96f273d_cx1n1w.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438717/a403f2f7-b0fc-4509-8b14-a5e51ba48a0a_uvgsyx.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438717/08bc50f7-316b-40fd-899a-7c6efaa3b34d_vnndzx.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1760438717/0f843f03-f828-47ce-b615-6141f687e808_pwnpbr.jpg",
  ];

  const textWords = [
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1758735865/3e25f99d-9210-4130-be1e-84bc5f3abe39_suvvoe.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1758735865/b423c3e1-e1fe-454a-b445-04206456b312_ji0jtw.jpg",
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1758735851/0e8bef40-05ab-494d-b3b9-31adc69288df_bz6uj0.jpg",
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

    textWords.forEach((word) => {
      const randomIndex = Math.floor(Math.random() * result.length);
      result.splice(randomIndex, 0, {
        type: "image",
        content: word,
        isSquare: true,
      });
    });

    return result;
  };

  const leftColumnData = insertRandomTexts(images);
  const rightColumnData = insertRandomTexts(images);

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
                {item.isSquare ? (
                  <div className="w-full aspect-square">
                    <img
                      src={item.content}
                      alt={`carousel-square-${index}`}
                      className="w-full h-full object-contain"
                    />
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
                {item.isSquare ? (
                  <div className="w-full aspect-square">
                    <img
                      src={item.content}
                      alt={`carousel-square-${index}`}
                      className="w-full h-full object-contain"
                    />
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
