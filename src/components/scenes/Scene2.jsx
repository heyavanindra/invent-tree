"use client"
import React from 'react';
import { motion } from 'motion/react';

const ScrollingCarousel = () => {
  // Image URLs
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s",
    "https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg",
    "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s",
    "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnUheL6Gz4BOy-uR6-BZ8KFIYVVDn-18ciQ&s"
  ];

  const textWords = ["Solve", "Enhance", "Accelerate"];

  // Function to insert random text boxes into image array
  const insertRandomTexts = (imageArray) => {
    const result = [...imageArray.map(url => ({ type: 'image', content: url }))];
    
    textWords.forEach(word => {
      const randomIndex = Math.floor(Math.random() * result.length);
      result.splice(randomIndex, 0, { type: 'text', content: word });
    });
    
    return result;
  };

  // Create data for left and right columns with random text insertions
  const leftColumnData = insertRandomTexts(images);
  const rightColumnData = insertRandomTexts(images);

  // Duplicate arrays for seamless loop
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
                {item.type === 'image' ? (
                  <img
                    src={item.content}
                    alt={`carousel-image-${index}`}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-32 md:h-40 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl md:text-2xl font-bold">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column */}
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
                {item.type === 'image' ? (
                  <img
                    src={item.content}
                    alt={`carousel-image-${index}`}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-32 md:h-40 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-xl md:text-2xl font-bold">
                    {item.content}
                  </div>
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