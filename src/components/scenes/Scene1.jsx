"use client";

import { motion } from "motion/react";
import React, { useContext, useEffect } from "react";
import Card from "../card";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "@/context/scrollcontext";
import { useTheme } from "next-themes";

const scenes = [
  {
    id: 1,
    label: "Scene 2",
    title: "Event Services",
    desc: "We offer a range of services to create unforgettable celebrity experiences:",
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
    desc: "In today’s digital era, a robust online presence is critical for political campaigns.",
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

const Scene1 = ({ xGreen }) => {
  const { setActiveScene } = useContext(ScrollContext);
  const { theme } = useTheme();

  const bgImage =
    theme === "dark"
      ? "url('/assests/Illustration Invent-Tree final-51.webp')"
      : "url('/IT-Illustration.png')";

  return (
    <motion.div
      className="relative flex h-screen w-full bg-cover bg-no-repeat "
      style={{
        backgroundImage: bgImage,
        backgroundSize: "auto 100%", // fit height, crop width
        backgroundPosition: "center",
      }}
    >
      <motion.div
        style={{
          translateX: xGreen,
        }}
        className="absolute top-0 bottom-0 z-10 bg-transparent"
      >
        <img className="h-screen w-full" src="/green.svg" />

        {/* Text Section */}
        <div className="absolute grid grid-cols-2   top-[5%] left-[10%] z-10 px-12 text-[#4F2D91]">
          {/* Solve */}
          <div>
            <h2 className="font-bold text-5xl mb-4">Solve</h2>
            <ul className="list-disc list-inside text-2xl font-medium space-y-2">
              <li>Event Services</li>
              <li>End-to-End Campaign Management</li>
              <li>Data Analysis & Surveys</li>
              <li>Micro-targeting & Booth Strategy</li>
              <li>Public Outreach & Mobilization</li>
              <li>Volunteer Training & Deployment</li>
              <li>War Room Monitoring & Control</li>
            </ul>
          </div>

          {/* Enhance */}
          <div>
            <h2 className="font-bold text-5xl  mb-4">Enhance</h2>
            <ul className="list-disc list-inside text-2xl font-medium space-y-2">
              <li>Website/App Development & Upkeep</li>
              <li>Digital & Social Media Strategy</li>
              <li>Leader & Party Branding</li>
              <li>Policy & Governance Consulting</li>
            </ul>
          </div>

          {/* Accelerate */}
          <div className="col-span-2 flex justify-center">
            <div>
              <h2 className="font-bold text-5xl mt-10 mb-4">Accelerate</h2>
              <ul className="list-disc list-inside text-2xl font-medium space-y-2">
                <li>Youth & Women Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex w-full h-screen justify-end items-center gap-x-[30rem] mr-[600px]">
        {scenes.map((scene, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            rootMargin: "0px -300px 0px -100px",
          });

          useEffect(() => {
            if (inView) {
              setActiveScene(scene.id);
            }
          }, [inView]);

          return (
            <Card
              ref={ref}
              key={idx + scene.id}
              id={scene.id}
              desc={scene.desc}
              title={scene.title}
              points={scene.points}
            ></Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Scene1;

/**


<div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>
        <div className="h-screen w-[80vh] border-2 border-black"></div>


 */
