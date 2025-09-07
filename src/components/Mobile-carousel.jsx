"useclient";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const sceneImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s",
];

const MobileCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sceneImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

const handleLeftClick = () => {
      setIndex((prev) => (prev + 1) % sceneImages.length);
}

const handleRightClick  = () => {
    setIndex((prev) => (prev - 1) % sceneImages.length);
}

  return (
    <div className="flex max-sm:w-full  flex-col justify-center items-center ">
      <div className="flex w-full items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full px-4"
          >
            <div className="bg-white dark:bg-[#2e2d2d]/95 p-6 rounded-2xl shadow-lg text-center">
              <img
                src={sceneImages[index]}
                alt={`Scene ${index + 1} Title`}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-sm text-[#8777a9] font-semibold">
                Scene {index + 1}
              </p>
              <h2 className="text-xl font-bold text-[#8777a9]">
                Scene {index + 1} Title
              </h2>
              <p className="mt-2 text-[#dae7ef ]">
                This is the description text for scene {index + 1}.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className=" flex justify-center items-center gap-x-6 mt-6">
        <div onClick={handleLeftClick} className="justify-around items-center bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left-icon lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </div>
        <div onClick={handleRightClick} className="justify-around items-center bg-white border-neutral-500 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
        
      </div>
    </div>
  );
};

export default MobileCarousel;
