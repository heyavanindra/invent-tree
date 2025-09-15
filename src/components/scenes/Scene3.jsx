// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import { motion } from 'motion/react';

// const Scene3 = () => {
//   const [inView, setInView] = useState(false);
//   const containerRef = useRef(null);
//   const hasOpenedRef = useRef(false);
//   const [disableAnimation, setDisableAnimation] = useState(() => {
//     if (typeof window === 'undefined') return false;
//     return window.matchMedia('(max-width: 767px)').matches;
//   });

// const image = [
//     {
//         id: '01',
//         title: 'Custom Website Design',
//         text: 'Tailored to reflect your campaign’s branding, with intuitive navigation and responsive design for all devices.'
//     },
//     {
//         id: '02',
//         title: 'Mobile App Development',
//         text: 'Features like push notifications, event updates, and seamless donation processing enhance supporter interaction.'
//     },
//     {
//         id: '03',
//         title: 'Content Management',
//         text: 'Easy-to-use systems for updating content and managing multimedia without technical expertise.'
//     },
//     {
//         id: '04',
//         title: 'Security and Compliance',
//         text: 'Robust measures to protect data and ensure regulatory compliance.'
//     },
//     {
//         id: '05',
//         title: 'Ongoing Maintenance',
//         text: 'Regular updates and technical support to keep platforms running smoothly.'
//     }
// ];

//   // Handle responsive animation toggle
//   useEffect(() => {
//     function checkWidth() {
//       const flag = window.innerWidth < 768
//       setDisableAnimation(flag);
//       console.log(flag)
//     }
//     checkWidth();
//     window.addEventListener('resize', checkWidth);
//     return () => window.removeEventListener('resize', checkWidth);
//   }, []);

//   // Intersection Observer for animation
//   useEffect(() => {
//     if (disableAnimation) {
//       setInView(false);
//       return;
//     }
//     let timer;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const ratio = entry.intersectionRatio;
//         if (ratio > 0 && !hasOpenedRef.current) {
//           clearTimeout(timer);
//           timer = setTimeout(() => {
//             setInView(true);
//             hasOpenedRef.current = true;
//           }, 1000);
//         }
//       },
//       { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
//     );
//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => {
//       clearTimeout(timer);
//       observer.disconnect();
//     };
//   }, [disableAnimation]);

//   return (
//     <div className='relative w-[1000vw] h-screen '>
//       <div className="flex items-center bg-center px-4  transition-colors duration-300">
//       <div className="min-h-screen flex justify-center py-8">
//         <main ref={containerRef} className="max-w-[1200px] w-full flex flex-col md:flex-row mt-2">
//           <div
//             className={`relative flex items-start justify-start ${
//               disableAnimation
//                 ? 'flex-col space-y-8'
//                 : 'overflow-hidden md:overflow-visible border-x border-[#298b85]'
//             }`}
//           >
//             {image.map(({ id, title, text, image: img }, index) =>
//               disableAnimation ? (
//                 // Mobile view - static
//                 <section
//                   key={id}
//                   className={`relative w-full max-w-[450px] px-6 pb-10 flex flex-col justify-between 
//                   bg-white  border-x border-[#8777a9] ${
//                     index === image.length - 1 ? 'border-e' : ''
//                   }`}
//                 >
//                   <div className="absolute left-0 top-0 h-20 w-3 bg-[#8777a9]"></div>
//                   <div className={id === image[0].id ? 'text-center' : ''}>
//                     <div className="text-[2.75rem] md:text-[4.4rem] font-orbitron font-medium text-[#8777a9] leading-none">
//                       {id}
//                     </div>
//                     <div className="flex items-center text-sm font-semibold text-[#8777a9] mb-6">
//                       <span className="text-lg mr-2">▮</span>
//                     </div>
//                     <h2 className="text-[#8777a9] px-4 text-lg md:text-4xl mb-4 font-montserrat">
//                       {title}
//                     </h2>
//                     <p className="text-[#2a2116]  font-normal px-4 text-xl leading-relaxed">
//                       {text}
//                     </p>
//                   </div>
//                   {img && (
//                     <div className="flex w-full justify-center mt-6">
//                       <img
//                         src={img}
//                         alt=""
//                         className="rounded-2xl shadow-md w-full max-h-50 "
//                       />
//                     </div>
//                   )}
//                 </section>
//               ) : (
//                 // Desktop view - animated
//                 <motion.section
//                   key={id}
//                   className="absolute top-0 h-full ms-12"
//                   initial={{ left: 0 }}
//                   animate={{
//                     left: inView ? `${index * 30}rem` : 0
//                   }}
//                   transition={{
//                     duration: 0.8,
//                     delay: index * 0.2,
//                     ease: 'easeInOut'
//                   }}
//                   style={{
//                     zIndex: image.length - index,
//                     width: '450px'
//                   }}
//                 >
//                   <div className="relative px-6 h-[94vh]  pb-10 flex flex-col justify-between 
//                   bg-slate-100  border-x ">
//                     <div className="absolute left-0 top-0 h-22 w-3 bg-[#8777a9]"></div>
//                     <div className={id === image[0].id ? 'text-center ' : ''}>
//                       <div className="text-[2.75rem] md:text-[4.4rem] font-orbitron font-medium text-[#67577f] leading-none">
//                         {id}
//                       </div>
//                       <div className="flex items-center text-sm font-semibold text-[#67577f] mb-6">
//                         <span className="text-lg mr-2">▮</span>
//                       </div>
//                       <h2 className="text-[#67577f] px-4 text-lg md:text-4xl mb-4 font-montserrat">
//                         {title}
//                       </h2>
//                       <p className="text-[#455b68]  font-normal px-4 text-xl leading-relaxed">
//                         {text}
//                       </p>
//                     </div>
//                     {img && (
//                       <div className="flex w-full justify-center mt-6">
//                         <img
//                           src={img}
//                           alt=""
//                           className="rounded-2xl shadow-md w-full max-h-50"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </motion.section>
//               )
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Scene3;
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const Scene3 = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const hasOpenedRef = useRef(false);
  const [disableAnimation, setDisableAnimation] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 767px)').matches;
  });

  const cards = [
    {
      id: '01',
      title: 'We offer a comprehensive range of polling and survey services tailored to your needs:',
      bullets: [
        'Voter Sentiment Polls: Gauge public opinion on candidates, issues, or policies.',
        'Issue-Based Surveys: Deep dives into specific topics, from healthcare to economic policy.',
        'Campaign Tracking: Monitor voter trends and campaign performance over time.',
        'Focus Groups: Qualitative insights to complement quantitative data.',
        'Exit Polls: Real-time data on election day to predict outcomes.',
        'Custom Analytics: Bespoke reports and visualizations for your unique needs.'
      ],
      howWeWork: [
        'Consultation: We collaborate with you to define objectives and target audiences.',
        'Design: Our team crafts precise, unbiased questions and methodologies.',
        'Execution: We conduct polls using phone, online, or in-person methods.',
        'Analysis: We deliver clear, actionable reports with data visualizations.',
        'Support: Ongoing consultation to maximize the impact of your results.'
      ],
      img: null 
    },
    {
      id: '02',
      title: 'Recent Polls',
      subtitle: 'Latest Insights',
      bullets: [
        'National Election Pulse (Oct 2025): 52% of voters prioritize economic stability over social issues.',
        'State-Level Approval Ratings (Sep 2025): Governors in swing states face declining approval.',
        'Issue Spotlight: Climate Policy (Aug 2025): 68% of voters support renewable energy initiatives.'
      ],
      img: null 
    },
    {
      id: '03',
      title: 'Recent Polls',
      subtitle: 'Latest Insights',
      bullets: [
        'Education Policy Survey (Sep 2025): 74% support increased teacher salaries.',
        'Healthcare Access Report (Aug 2025): 61% believe rural access is inadequate.'
      ],
      img: null
    }
  ];


  useEffect(() => {
    function checkWidth() {
      const flag = window.innerWidth < 768;
      setDisableAnimation(flag);
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

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
    <div className="relative w-full h-auto md:h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="flex items-center bg-center px-4">
        <div className="min-h-screen flex justify-center py-8">
          <main
            ref={containerRef}
            className="max-w-[1200px] w-full flex flex-col md:flex-row mt-2"
          >
            <div
              className={`relative flex items-start justify-start w-full  ${
                disableAnimation
                  ? 'flex-col space-y-8'
                  : 'overflow-hidden md:overflow-visible border-x border-[#298b85] dark:border-[#4ccbc4]'
              }`}
            >
              {cards.map(({ id, title, subtitle, bullets, howWeWork, img }, index) =>
                disableAnimation ? (
                  <section
                    key={id}
                    className="relative w-full px-6 py-8 flex flex-col justify-between border border-[#8777a9] dark:border-[#9b8ec2] rounded-xl shadow-md bg-white dark:bg-neutral-800 transition-colors "
                  >
                    <div className="absolute left-0 top-0 h-20 w-3 bg-[#8777a9] dark:bg-[#9b8ec2] rounded-r overflow-clip"></div>
                    <div className="text-center ">
                     
                      <h2 className="text-[#8777a9] dark:text-[#b8aee0] text-lg mb-4 font-montserrat">
                        {title}
                      </h2>
              
                      {subtitle && (
                        <h3 className="text-[#67577f] dark:text-[#d2c2ef] text-base mb-2 font-semibold ">
                          {subtitle}
                        </h3>
                      )}
              
                      <ul className="text-[#2a2116] dark:text-neutral-200 text-left space-y-2 font-normal text-base md:text-lg leading-relaxed">
                        {bullets?.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
              
                      {howWeWork && (
                        <ol className="mt-4 text-[#2a2116] dark:text-neutral-200 text-left list-decimal list-inside space-y-2">
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
                          className="rounded-2xl shadow-md w-full max-h-[250px] object-cover"
                        />
                      </div>
                    )}
                  </section>
                ) : (
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
                      zIndex: cards.length - index,
                      width: '450px'
                    }}
                  >
                    <div className="relative p-4 overflow-hidden px-6 h-[94vh] pb-10 flex flex-col justify-between bg-slate-100 dark:bg-neutral-800 border-x rounded-xl shadow-md transition-colors">
                      <div className="absolute  left-0 top-0 h-22 w-3 bg-[#8777a9] dark:bg-[#9b8ec2] rounded-r"></div>
                      <div className={id === cards[0].id ? 'text-center' : ''}>
                      
                        <h2 className="text-[#67577f] dark:text-[#d2c2ef] text-lg md:text-3xl mb-4 font-montserrat">
                          {title}
                        </h2>
                        {subtitle && (
                          <h3 className="text-[#67577f] dark:text-[#d2c2ef] mt-3 text-sm mb-2 font-semibold">
                            {subtitle}
                          </h3>
                        )}
              
                        <ul className="text-[#455b68] dark:text-neutral-200 text-left space-y-2 text-md leading-relaxed">
                          {bullets?.map((b, i) => (
                            <li key={i}>• {b}</li>
                          ))}
                        </ul>
              
                        {howWeWork && (
                          <ol className="mt-4 text-sm text-[#455b68] dark:text-neutral-200 list-decimal list-inside space-y-2">
                            {howWeWork.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        )}
                      </div>
              
                      {img && (
                        <div className="flex w-full justify-center mt-6">
                          <Image
                            src={img}
                            alt={title}
                            width={450}
                            height={250}
                            className="rounded-2xl shadow-md object-cover"
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
