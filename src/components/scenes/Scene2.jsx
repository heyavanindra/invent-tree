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

  const textWords = [
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1758735865/3e25f99d-9210-4130-be1e-84bc5f3abe39_suvvoe.jpg", 
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1758735865/b423c3e1-e1fe-454a-b445-04206456b312_ji0jtw.jpg", 
    "https://res.cloudinary.com/dk2mdk9md/image/upload/v1758735851/0e8bef40-05ab-494d-b3b9-31adc69288df_bz6uj0.jpg"
  ];

  // Function to insert random text boxes into image array
  const insertRandomTexts = (imageArray) => {
    const result = [...imageArray.map(url => ({ type: 'image', content: url, isSquare: false }))];
    
    textWords.forEach(word => {
      const randomIndex = Math.floor(Math.random() * result.length);
      result.splice(randomIndex, 0, { type: 'image', content: word, isSquare: true });
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
                    className="w-full h-32 md:h-40 object-cover"
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
                    className="w-full h-32 md:h-40 object-cover"
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