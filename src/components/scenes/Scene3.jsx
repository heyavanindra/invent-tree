"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";

const AnimatedCards = () => {
  const t = useTranslations();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { 
    margin:""
  });
  const [disableAnimation, setDisableAnimation] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  const cards = [
    {
      id: t('Home.Scene3.cards.card1.id'),
      title: t('Home.Scene3.cards.card1.title'),
      bullets: t.raw('Home.Scene3.cards.card1.bullets'),
      howWeWork: t.raw('Home.Scene3.cards.card1.howWeWork'),
      img: null,
    },
    {
      id: t('Home.Scene3.cards.card2.id'),
      title: t('Home.Scene3.cards.card2.title'),
      subtitle: t('Home.Scene3.cards.card2.subtitle'),
      bullets: t.raw('Home.Scene3.cards.card2.bullets'),
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: t('Home.Scene3.cards.card3.id'),
      title: t('Home.Scene3.cards.card3.title'),
      subtitle: t('Home.Scene3.cards.card3.subtitle'),
      bullets: t.raw('Home.Scene3.cards.card3.bullets'),
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  useEffect(() => {
    function checkWidth() {
      const flag = window.innerWidth < 768;
      setDisableAnimation(flag);
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="flex items-center bg-center px-4">
        <div className="min-h-screen flex justify-center py-8">
          <main
           
            className="max-w-6xl w-full flex flex-col md:flex-row mt-2"
          >
            <div
              className={`relative flex items-start justify-start w-full ${
                disableAnimation
                  ? "flex-col space-y-8"
                  : "overflow-hidden md:overflow-visible border-x-2 border-teal-600 dark:border-teal-400"
              }`}
            >
              {cards.map(
                ({ id, title, subtitle, bullets, howWeWork, img }, index) =>
                  disableAnimation ? (
                    // Mobile Layout
                    <section
                      key={id}
                      className="relative w-full px-6 py-8 flex flex-col justify-between border-2 border-purple-500 dark:border-purple-400 rounded-xl shadow-lg bg-white dark:bg-neutral-800 transition-colors"
                    >
                      <div className="absolute left-0 top-0 h-20 w-3 bg-purple-500 dark:bg-purple-400 rounded-r"></div>
                      <div className={id === cards[0].id ? "text-center" : ""}>
                        <h2 className="text-purple-600 dark:text-purple-300 text-lg mb-4 font-bold font-mono">
                          {title}
                        </h2>

                        {subtitle && (
                          <h3 className="text-purple-700 dark:text-purple-200 text-base mb-2 font-semibold">
                            {subtitle}
                          </h3>
                        )}

                        <ul className="text-gray-800 dark:text-neutral-200 text-left space-y-2 font-normal text-base leading-relaxed">
                          {bullets?.map((b, i) => (
                            <li key={i}>• {b}</li>
                          ))}
                        </ul>

                        {howWeWork && (
                          <ol className="mt-4 text-gray-800 dark:text-neutral-200 text-left list-decimal list-inside space-y-2">
                            {howWeWork.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        )}
                      </div>

                      {img && (
                        <div className="flex w-full justify-center mt-6">
                          <img
                            src={img}
                            alt={title}
                            className="rounded-2xl shadow-md w-full max-h-64 object-cover"
                          />
                        </div>
                      )}
                    </section>
                  ) : (
                    // Desktop Animated Layout
                    <motion.section
                      key={id}
                      className="absolute top-0 h-full ml-12"
                      initial={{ left: "0rem" }}
                      animate={{
                        left: isInView ? `${index * 30}rem` : "0rem",
                      }}
                      exit={{ 
                        left: "0rem", 
                        transition: {
                          duration: 0.6,
                          delay: (cards.length - index - 1) * 0.1,
                          ease: "easeInOut"
                        }
                      }}
                      transition={{
                        duration: 0.8,
                        delay: isInView ? index * 0.2 : 0,
                        ease: "easeInOut",
                      }}
                      style={{
                        zIndex: 10 + cards.length - index,
                        width: "28rem",
                      }}
                    >
                      <div className="relative p-4 overflow-hidden px-6 h-full pb-10 flex flex-col justify-between bg-slate-100 dark:bg-neutral-800 border-x-2 rounded-xl shadow-lg transition-colors">
                        <div className="absolute left-0 top-0 h-22 w-3 bg-purple-500 dark:bg-purple-400 rounded-r"></div>
                        <div
                          className={id === cards[0].id ? "text-center" : ""}
                        >
                          <h2 className="text-purple-700 dark:text-purple-200 text-lg md:text-2xl mb-4 font-bold font-mono">
                            {title}
                          </h2>
                          {subtitle && (
                            <h3 className="text-purple-700 dark:text-purple-200 mt-3 text-sm mb-2 font-semibold">
                              {subtitle}
                            </h3>
                          )}

                          <ul className="text-slate-600 dark:text-neutral-200 text-left space-y-2 text-sm leading-relaxed">
                            {bullets?.map((b, i) => (
                              <li key={i}>• {b}</li>
                            ))}
                          </ul>

                          {howWeWork && (
                            <ol className="mt-4 text-sm text-slate-600 dark:text-neutral-200 list-decimal list-inside space-y-2">
                              {howWeWork.map((step, i) => (
                                <li key={i}>{step}</li>
                              ))}
                            </ol>
                          )}
                        </div>

                        {img && (
                          <div className="flex w-full justify-center mt-6">
                            <img
                              src={img}
                              alt={title}
                              className="rounded-2xl shadow-md w-full max-h-64 object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </motion.section>
                  ),
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCards;