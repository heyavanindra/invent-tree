"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const scenes = [
  {
    id: 1,
    label: "Scene 2",
    title: "Event Services",
    desc: "We offer a range of services to create unforgettable celebrity experiences:",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    points: [
      "Celebrity Conventions",
      "Meet-and-Greets",
      "VIP Experiences",
      "Corporate Events",
      "Custom Events",
      "Event Management",
    ],
  },
  {
    id: 2,
    label: "Scene 3",
    title: "Website/App Development & Upkeep",
    desc: "In today's digital era, a robust online presence is critical for political campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    points: [
      "Custom Website Design",
      "Mobile App Development",
      "Content Management",
      "Security and Compliance",
      "Ongoing Maintenance",
    ],
  },
  {
    id: 3,
    label: "Scene 4",
    title: "End-to-End Campaign Management",
    desc: "Our comprehensive campaign management services guide your political journey from inception to victory.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    points: [
      "Strategic Planning",
      "Fundraising and Compliance",
      "Media and Communications",
      "Event Management",
      "Volunteer Coordination",
      "Data Analytics",
      "Election Day Operations",
    ],
  },
  {
    id: 4,
    label: "Scene 5",
    title: "Data Analysis & Surveys",
    desc: "Data-driven decision-making is essential for modern campaigns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    points: [
      "Voter Profiling",
      "Survey Design",
      "Predictive Analytics",
      "Sentiment Analysis",
      "Geographic Information Systems (GIS)",
      "Real-time Dashboards",
    ],
  },
  {
    id: 5,
    label: "Scene 6",
    title: "Micro-targeting & Booth Strategy",
    desc: "Connecting with voters personally and ensuring turnout is key to victory.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    points: [
      "Voter Segmentation",
      "Tailored Messaging",
      "Channel Optimization",
      "Booth Management",
      "Voter Mobilization",
      "Data Collection",
    ],
  },
  {
    id: 6,
    label: "Scene 7",
    title: "Public Outreach & Mobilization",
    desc: "Building voter relationships and driving participation are central to success.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    points: [
      "Community Engagement",
      "Event Planning",
      "Canvassing Operations",
      "Voter Education",
      "Grassroots Organizing",
      "Digital Outreach",
    ],
  },
  {
    id: 7,
    label: "Scene 8",
    title: "Digital & Social Media Strategy",
    desc: "A strong online presence is vital for modern campaigns.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    points: [
      "Social Media Management",
      "Content Creation",
      "Online Advertising",
      "Influencer Partnerships",
      "Analytics and Monitoring",
      "Crisis Management",
    ],
  },
  {
    id: 8,
    label: "Scene 9",
    title: "Policy & Governance Consulting",
    desc: "Effective governance requires informed policies.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    points: [
      "Policy Research",
      "Policy Development",
      "Legislative Strategy",
      "Governance Training",
      "Stakeholder Engagement",
      "Issue Briefings",
    ],
  },
  {
    id: 9,
    label: "Scene 10",
    title: "Leader & Party Branding",
    desc: "Perception shapes political success.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    points: [
      "Brand Strategy",
      "Visual Identity",
      "Message Development",
      "Media Training",
      "Reputation Management",
      "Consistency Across Platforms",
    ],
  },
  {
    id: 10,
    label: "Scene 11",
    title: "Volunteer Training & Deployment",
    desc: "Volunteers are the backbone of campaigns.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    points: [
      "Recruitment Campaigns",
      "Training Programs",
      "Role Assignment",
      "Coordination Tools",
      "Motivation and Recognition",
      "Leadership Development",
    ],
  },
  {
    id: 11,
    label: "Scene 12",
    title: "Youth & Women Engagement",
    desc: "Engaging youth and women is crucial for broad support.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    points: [
      "Targeted Outreach",
      "Issue Advocacy",
      "Events and Forums",
      "Mentorship Programs",
      "Social Media Campaigns",
      "Partnerships",
    ],
  },
  {
    id: 12,
    label: "Scene 13",
    title: "War Room Monitoring & Control",
    desc: "Swift responses to campaign developments are critical.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    points: [
      "Central Command Center",
      "Media Monitoring",
      "Rapid Response",
      "Data Integration",
      "Coordination",
      "Scenario Planning",
    ],
  },
];

const ScenesSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % scenes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % scenes.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="min-h-screen bg-[url('/Final-Illustration-Light-Mode.png')] dark:bg-[url('/Final-Illustration-dark-Mode.png')] bg-right-bottom bg-no-repeat bg-cover flex justify-center items-center w-full py-12 px-4">
      <div className="flex flex-col justify-center items-center w-full max-w-4xl">
        {/* Carousel Container */}
        <div className="flex w-full items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="w-full px-2 sm:px-4"
            >
              <motion.div
                className="bg-white/95 dark:bg-[#2e2d2d]/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <motion.img
                    src={scenes[index].image}
                    alt={scenes[index].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Scene Label on Image */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-4 left-4"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-pink-400 px-3 py-1 rounded-full shadow-lg">
                      {scenes[index].label}
                    </span>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  {/* Title */}
                  <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl sm:text-3xl font-bold text-[#4f2d91] dark:text-[#b6a4d9] mb-3"
                  >
                    {scenes[index].title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                  >
                    {scenes[index].desc}
                  </motion.p>

                  {/* Points Grid */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4"
                  >
                    {scenes[index].points.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        className="flex items-start gap-2 bg-purple-50 dark:bg-[#3a3a3a] p-2 sm:p-3 rounded-lg hover:bg-purple-100 dark:hover:bg-[#444] transition-colors"
                      >
                        <span className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0 font-bold">
                          ✓
                        </span>
                        <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(79, 45, 145, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="bg-white dark:bg-[#2e2d2d] text-[#4f2d91] dark:text-[#b6a4d9] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all"
            aria-label="Previous scene"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex gap-2 overflow-x-auto max-w-xs px-2">
            {scenes.map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`rounded-full transition-all flex-shrink-0 ${
                  i === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-400 w-8 h-2"
                    : "bg-gray-400 dark:bg-gray-600 w-2 h-2"
                }`}
                aria-label={`Go to scene ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(79, 45, 145, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="bg-white dark:bg-[#2e2d2d] text-[#4f2d91] dark:text-[#b6a4d9] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all"
            aria-label="Next scene"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-sm font-semibold text-gray-600 dark:text-gray-400"
        >
          {index + 1} / {scenes.length}
        </motion.div>
      </div>
    </div>
  );
};

export default ScenesSection;