"use client";

import { motion } from "motion/react";
import React, { useContext, useEffect } from "react";
import Card from "../card";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "@/context/scrollcontext";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import Pin from "../pin";

const Scene1 = ({ xGreen }) => {
  const { setActiveScene } = useContext(ScrollContext);
  const { theme } = useTheme();
  const t = useTranslations();

  const scenes = [
    {
      id: 2,
      label: "Scene 2",
      title: t("Home.Scenes.EventService.title"),
      desc: t("Home.Scenes.EventService.description"),
      points: [
        t("Home.Scenes.EventService.points.celebrityConventions"),
        t("Home.Scenes.EventService.points.meetAndGreets"),
        t("Home.Scenes.EventService.points.vipExperiences"),
        t("Home.Scenes.EventService.points.corporateEvents"),
        t("Home.Scenes.EventService.points.customEvents"),
        t("Home.Scenes.EventService.points.eventManagement"),
      ],
      className: "xl:left-[15%] left-[14%] top-[10%]",
      pin: "xl:left-[14%] left-[13%] top-[20%]",
    },
    {
      id: 3,
      label: "Scene 3",
      title: t("Home.Scenes.WebsiteDevelopment.title"),
      desc: t("Home.Scenes.WebsiteDevelopment.description"),
      points: [
        t("Home.Scenes.WebsiteDevelopment.points.customWebsiteDesign"),
        t("Home.Scenes.WebsiteDevelopment.points.mobileAppDevelopment"),
        t("Home.Scenes.WebsiteDevelopment.points.contentManagement"),
        t("Home.Scenes.WebsiteDevelopment.points.securityAndCompliance"),
        t("Home.Scenes.WebsiteDevelopment.points.ongoingMaintenance"),
      ],
      className: "left-[40%] top-15",
      pin: "left-[39%] top-15",
    },
    {
      id: 4,
      label: "Scene 4",
      title: t("Home.Scenes.CampaignManagement.title"),
      desc: t("Home.Scenes.CampaignManagement.description"),
      points: [
        t("Home.Scenes.CampaignManagement.points.strategicPlanning"),
        t("Home.Scenes.CampaignManagement.points.fundraisingAndCompliance"),
        t("Home.Scenes.CampaignManagement.points.mediaAndCommunications"),
        t("Home.Scenes.CampaignManagement.points.eventManagement"),
        t("Home.Scenes.CampaignManagement.points.volunteerCoordination"),
        t("Home.Scenes.CampaignManagement.points.dataAnalytics"),
        t("Home.Scenes.CampaignManagement.points.electionDayOperations"),
      ],
      className: "xl:left-[90.5%] left-[92%] top-[10%]",
      pin: "xl:left-[89%] left-[91%] top-[20%]",
    },
    {
      id: 5,
      label: "Scene 5",
      title: t("Home.Scenes.DataAnalysis.title"),
      desc: t("Home.Scenes.DataAnalysis.description"),
      points: [
        t("Home.Scenes.DataAnalysis.points.voterProfiling"),
        t("Home.Scenes.DataAnalysis.points.surveyDesign"),
        t("Home.Scenes.DataAnalysis.points.predictiveAnalytics"),
        t("Home.Scenes.DataAnalysis.points.sentimentAnalysis"),
        t("Home.Scenes.DataAnalysis.points.geographicInformationSystems"),
        t("Home.Scenes.DataAnalysis.points.realTimeDashboards"),
      ],
      className: "left-[53.5%] top-[10%]",
      pin: "left-[52%] top-[20%]",
    },
    {
      id: 6,
      label: "Scene 6",
      title: t("Home.Scenes.MicroTargeting.title"),
      desc: t("Home.Scenes.MicroTargeting.description"),
      points: [
        t("Home.Scenes.MicroTargeting.points.voterSegmentation"),
        t("Home.Scenes.MicroTargeting.points.tailoredMessaging"),
        t("Home.Scenes.MicroTargeting.points.channelOptimization"),
        t("Home.Scenes.MicroTargeting.points.boothManagement"),
        t("Home.Scenes.MicroTargeting.points.voterMobilization"),
        t("Home.Scenes.MicroTargeting.points.dataCollection"),
      ],
      className: "left-[26.2%] top-[20%]",
      pin: "left-[27.3%] top-[65%]",
    },
    {
      id: 7,
      label: "Scene 7",
      title: t("Home.Scenes.PublicOutreach.title"),
      desc: t("Home.Scenes.PublicOutreach.description"),
      points: [
        t("Home.Scenes.PublicOutreach.points.communityEngagement"),
        t("Home.Scenes.PublicOutreach.points.eventPlanning"),
        t("Home.Scenes.PublicOutreach.points.canvassingOperations"),
        t("Home.Scenes.PublicOutreach.points.voterEducation"),
        t("Home.Scenes.PublicOutreach.points.grassrootsOrganizing"),
        t("Home.Scenes.PublicOutreach.points.digitalOutreach"),
      ],
      className: "left-[45%] top-[10%]",
      pin: "left-[46%] top-[55%]",
    },
    {
      id: 8,
      label: "Scene 8",
      title: t("Home.Scenes.DigitalStrategy.title"),
      desc: t("Home.Scenes.DigitalStrategy.description"),
      points: [
        t("Home.Scenes.DigitalStrategy.points.socialMediaManagement"),
        t("Home.Scenes.DigitalStrategy.points.contentCreation"),
        t("Home.Scenes.DigitalStrategy.points.onlineAdvertising"),
        t("Home.Scenes.DigitalStrategy.points.influencerPartnerships"),
        t("Home.Scenes.DigitalStrategy.points.analyticsAndMonitoring"),
        t("Home.Scenes.DigitalStrategy.points.crisisManagement"),
      ],
      className: "left-[33.3%] top-[10%]",
      pin: "left-[34.3%] top-[60%]",
    },
    {
      id: 9,
      label: "Scene 9",
      title: t("Home.Scenes.PolicyConsulting.title"),
      desc: t("Home.Scenes.PolicyConsulting.description"),
      points: [
        t("Home.Scenes.PolicyConsulting.points.policyResearch"),
        t("Home.Scenes.PolicyConsulting.points.policyDevelopment"),
        t("Home.Scenes.PolicyConsulting.points.legislativeStrategy"),
        t("Home.Scenes.PolicyConsulting.points.governanceTraining"),
        t("Home.Scenes.PolicyConsulting.points.stakeholderEngagement"),
        t("Home.Scenes.PolicyConsulting.points.issueBriefings"),
      ],
      className: "xl:left-[94.5%] top-[5%] left-[96%]",
      pin: "xl:left-[98%] left-[99%] top-[0%]",
    },
    {
      id: 10,
      label: "Scene 10",
      title: t("Home.Scenes.LeaderBranding.title"),
      desc: t("Home.Scenes.LeaderBranding.description"),
      points: [
        t("Home.Scenes.LeaderBranding.points.brandStrategy"),
        t("Home.Scenes.LeaderBranding.points.visualIdentity"),
        t("Home.Scenes.LeaderBranding.points.messageDevelopment"),
        t("Home.Scenes.LeaderBranding.points.mediaTraining"),
        t("Home.Scenes.LeaderBranding.points.reputationManagement"),
        t("Home.Scenes.LeaderBranding.points.consistencyAcrossPlatforms"),
      ],
      className: "left-[85%] top-[0%]",
      pin: "left-[84%] top-[30%]",
    },
    {
      id: 11,
      label: "Scene 11",
      title: t("Home.Scenes.VolunteerTraining.title"),
      desc: t("Home.Scenes.VolunteerTraining.description"),
      points: [
        t("Home.Scenes.VolunteerTraining.points.recruitmentCampaigns"),
        t("Home.Scenes.VolunteerTraining.points.trainingPrograms"),
        t("Home.Scenes.VolunteerTraining.points.roleAssignment"),
        t("Home.Scenes.VolunteerTraining.points.coordinationTools"),
        t("Home.Scenes.VolunteerTraining.points.motivationAndRecognition"),
        t("Home.Scenes.VolunteerTraining.points.leadershipDevelopment"),
      ],
      className: "xl:left-[85%] left-[86%] top-[0%]",
      pin: "left-[84%] top-[30%]",
    },
    {
      id: 12,
      label: "Scene 12",
      title: t("Home.Scenes.YouthEngagement.title"),
      desc: t("Home.Scenes.YouthEngagement.description"),
      points: [
        t("Home.Scenes.YouthEngagement.points.targetedOutreach"),
        t("Home.Scenes.YouthEngagement.points.issueAdvocacy"),
        t("Home.Scenes.YouthEngagement.points.eventsAndForums"),
        t("Home.Scenes.YouthEngagement.points.mentorshipPrograms"),
        t("Home.Scenes.YouthEngagement.points.socialMediaCampaigns"),
        t("Home.Scenes.YouthEngagement.points.partnerships"),
      ],
      className: "left-[61%]",
      pin: "left-[60%]",
    },
    {
      id: 13,
      label: "Scene 13",
      title: t("Home.Scenes.WarRoomMonitoring.title"),
      desc: t("Home.Scenes.WarRoomMonitoring.description"),
      points: [
        t("Home.Scenes.WarRoomMonitoring.points.centralCommandCenter"),
        t("Home.Scenes.WarRoomMonitoring.points.mediaMonitoring"),
        t("Home.Scenes.WarRoomMonitoring.points.rapidResponse"),
        t("Home.Scenes.WarRoomMonitoring.points.dataIntegration"),
        t("Home.Scenes.WarRoomMonitoring.points.coordination"),
        t("Home.Scenes.WarRoomMonitoring.points.scenarioPlanning"),
      ],
      className: "left-[71.3%]",
      pin: "left-[70%] top-[0%]",
    },
  ];

  const bgImage =
    theme === "dark" ? "url('/bg-map.svg')" : "url('/bg-map-dark.svg')";

  return (
    <motion.div
      className="relative flex h-screen w-full bg-cover bg-no-repeat "
      style={{
        backgroundImage: bgImage,
        backgroundSize: "auto 100%", 
        backgroundPosition: "left center",
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
        <div className="absolute top-[5%] left-[5%] right-[5%] z-10 px-4 md:px-8 lg:px-12 text-[#4F2D91]">
          {/* Headers in one line - Responsive text size */}
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              {t("Home.Scene1.headers.solve")}
            </h2>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              .
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              {t("Home.Scene1.headers.enhance")}
            </h2>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              .
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              {t("Home.Scene1.headers.accelerate")}
            </h2>
          </div>

          {/* Combined Points - All under the three headers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg font-medium space-y-1.5 md:space-y-2">
              {t
                .raw("Home.Scene1.sections.solve.points")
                .map((point, index) => (
                  <li key={index} className="leading-snug">
                    {point}
                  </li>
                ))}
            </ul>

            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg font-medium space-y-1.5 md:space-y-2">
              {t
                .raw("Home.Scene1.sections.enhance.points")
                .map((point, index) => (
                  <li key={index} className="leading-snug">
                    {point}
                  </li>
                ))}
            </ul>

            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg font-medium space-y-1.5 md:space-y-2">
              {t
                .raw("Home.Scene1.sections.accelerate.points")
                .map((point, index) => (
                  <li key={index} className="leading-snug">
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </motion.div>
      <div className="relative  w-full h-screen">
        {scenes.map((scene, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            rootMargin: "0px -300px 0px -100px",
          });

          useEffect(() => {
            if (inView) {
              console.log(scene.id);
              setActiveScene(scene.id);
            }
          }, [inView]);

          return (
            <span key={idx + scene.id}>
              <Card
                ref={ref}
                id={scene.id}
                desc={scene.desc}
                title={scene.title}
                points={scene.points}
                position={scene.className}
              ></Card>
              <Pin className={scene.pin}></Pin>
            </span>
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
