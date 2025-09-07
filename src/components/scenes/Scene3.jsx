'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Scene3 = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const hasOpenedRef = useRef(false);
  const [disableAnimation, setDisableAnimation] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 767px)').matches;
  });

const image = [
    {
        id: '01',
        title: 'Custom Website Design',
        text: 'Tailored to reflect your campaign’s branding, with intuitive navigation and responsive design for all devices.'
    },
    {
        id: '02',
        title: 'Mobile App Development',
        text: 'Features like push notifications, event updates, and seamless donation processing enhance supporter interaction.'
    },
    {
        id: '03',
        title: 'Content Management',
        text: 'Easy-to-use systems for updating content and managing multimedia without technical expertise.'
    },
    {
        id: '04',
        title: 'Security and Compliance',
        text: 'Robust measures to protect data and ensure regulatory compliance.'
    },
    {
        id: '05',
        title: 'Ongoing Maintenance',
        text: 'Regular updates and technical support to keep platforms running smoothly.'
    }
];

  // Handle responsive animation toggle
  useEffect(() => {
    function checkWidth() {
      const flag = window.innerWidth < 768
      setDisableAnimation(flag);
      console.log(flag)
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Intersection Observer for animation
  useEffect(() => {
    if (disableAnimation) {
      setInView(false);
      return;
    }
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        if (ratio > 0 && !hasOpenedRef.current) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            setInView(true);
            hasOpenedRef.current = true;
          }, 1000);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [disableAnimation]);

  return (
    <div className='relative w-[1000vw] h-screen'>
      <div className="flex items-center bg-center px-4  transition-colors duration-300">
      <div className="min-h-screen flex justify-center py-8">
        <main ref={containerRef} className="max-w-[1200px] w-full flex flex-col md:flex-row mt-2">
          <div
            className={`relative flex items-start justify-start ${
              disableAnimation
                ? 'flex-col space-y-8'
                : 'overflow-hidden md:overflow-visible border-x border-[#298b85]'
            }`}
          >
            {image.map(({ id, title, text, image: img }, index) =>
              disableAnimation ? (
                // Mobile view - static
                <section
                  key={id}
                  className={`relative w-full max-w-[450px] px-6 pb-10 flex flex-col justify-between 
                  bg-white  border-x border-[#8777a9] ${
                    index === image.length - 1 ? 'border-e' : ''
                  }`}
                >
                  <div className="absolute left-0 top-0 h-20 w-3 bg-[#8777a9]"></div>
                  <div className={id === image[0].id ? 'text-center' : ''}>
                    <div className="text-[2.75rem] md:text-[4.4rem] font-orbitron font-medium text-[#8777a9] leading-none">
                      {id}
                    </div>
                    <div className="flex items-center text-sm font-semibold text-[#8777a9] mb-6">
                      <span className="text-lg mr-2">▮</span>
                    </div>
                    <h2 className="text-[#8777a9] px-4 text-lg md:text-4xl mb-4 font-montserrat">
                      {title}
                    </h2>
                    <p className="text-[#2a2116]  font-normal px-4 text-xl leading-relaxed">
                      {text}
                    </p>
                  </div>
                  {img && (
                    <div className="flex w-full justify-center mt-6">
                      <img
                        src={img}
                        alt=""
                        className="rounded-2xl shadow-md w-full max-h-50 "
                      />
                    </div>
                  )}
                </section>
              ) : (
                // Desktop view - animated
                <motion.section
                  key={id}
                  className="absolute top-0 h-full ms-12"
                  initial={{ left: 0 }}
                  animate={{
                    left: inView ? `${index * 30}rem` : 0
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'easeInOut'
                  }}
                  style={{
                    zIndex: image.length - index,
                    width: '450px'
                  }}
                >
                  <div className="relative px-6 h-[94vh] pb-10 flex flex-col justify-between 
                  bg-slate-100 border-x ">
                    <div className="absolute left-0 top-0 h-22 w-3 bg-[#8777a9]"></div>
                    <div className={id === image[0].id ? 'text-center ' : ''}>
                      <div className="text-[2.75rem] md:text-[4.4rem] font-orbitron font-medium text-[#67577f] leading-none">
                        {id}
                      </div>
                      <div className="flex items-center text-sm font-semibold text-[#67577f] mb-6">
                        <span className="text-lg mr-2">▮</span>
                      </div>
                      <h2 className="text-[#67577f] px-4 text-lg md:text-4xl mb-4 font-montserrat">
                        {title}
                      </h2>
                      <p className="text-[#455b68]  font-normal px-4 text-xl leading-relaxed">
                        {text}
                      </p>
                    </div>
                    {img && (
                      <div className="flex w-full justify-center mt-6">
                        <img
                          src={img}
                          alt=""
                          className="rounded-2xl shadow-md w-full max-h-50"
                        />
                      </div>
                    )}
                  </div>
                </motion.section>
              )
            )}
          </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default Scene3;
