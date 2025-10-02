"use client";
import { motion } from "motion/react";
import { useTranslations, Trans } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, type: "spring" },
  }),
};

const team = [
  {
    name: "Abhishek Kaushal",
    role: "Founder & Lead Developer",
    desc: "Over 4 years in web technologies (MERN stack). Clean code, efficient systems, building for scale.",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    desc: "Intuitive user experiences, user psychology & modern design. Balances form & function.",
  },
  {
    name: "Ravi Verma",
    role: "Backend Architect",
    desc: "Builds robust backend systems using Node.js, Express, MongoDB. Focus on scale, security, and performance.",
  },
  {
    name: "Sneha Patel",
    role: "Marketing & Client Relations",
    desc: "Drives client communication and marketing. Ensures transparency and smooth collaboration.",
  },
];

export default function AboutUs() {
  const [news, setNews] = useState([]);
  const t = useTranslations("about");
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/announcements");
        if (!res.ok) throw new Error("Failed to fetch announcements");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#222] dark:bg-[#1f1f1f] dark:text-white px-3 pb-16 transition-colors duration-300">
      <motion.div
        className="max-w-4xl mx-auto py-12 max-md:pt-35"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
      >
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-center mb-2 text-[#67577f]"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 1, type: "spring" }}
        >
          {t("title")}
        </motion.h1>
        <motion.p
          className="text-center text-lg mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("subHeading")}
        </motion.p>

        {/* Who We Are */}
        {/* Who We Are */}
        <div className="p-6 rounded-2xl mb-10 bg-[#f4f7ff] dark:bg-[#2e2d2d]">
          <motion.div
            className="rounded-lg shadow px-6 py-6 border border-[#c1c7d0]/40 dark:border-gray-600"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>
              <strong>{t("whoWeAre.title")}</strong>
              <br />
              {t("whoWeAre.description")}
            </p>
            <p className="mt-3">{t("whoWeAre.para1")}</p>
            <p className="mt-3">{t("whoWeAre.para2")}</p>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="p-6 rounded-2xl mb-10 bg-[#f4f7ff] dark:bg-[#2e2d2d]">
          <motion.div
            className="rounded-lg shadow px-6 py-6 border border-[#c1c7d0]/40 dark:border-gray-600"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>
              <strong>{t("ourMission.title")}</strong>
              <br />
              <span className="text-[#8777a9] font-semibold">
                {t("ourMission.tagline")}
              </span>
              <br />
              <span>{t("ourMission.para1")}</span>
            </p>
            <p className="mt-3">{t("ourMission.para2")}</p>
            <p className="mt-3">{t("ourMission.para3")}</p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center tracking-wide text-[#67577f]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.09, duration: 0.6, type: "spring" }}
        >
          {t("whoChooseUs.title")}
        </motion.h2>
        <div className="p-6 mb-12 bg-[#f4f7ff] dark:bg-[#2e2d2d] rounded-2xl">
          <motion.ul
            className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <li>
              {t.rich("whoChooseUs.point1", {
                       strong: (chunks) => <strong>{chunks}</strong>,
                     })}
            </li>
            <li>
              {t.rich("whoChooseUs.point1", {
                       strong: (chunks) => <strong>{chunks}</strong>,
                     })}
            </li>
            <li>
              {t.rich("whoChooseUs.point1", {
                       strong: (chunks) => <strong>{chunks}</strong>,
                     })}
            </li>
            <li>
              {t.rich("whoChooseUs.point1", {
                       strong: (chunks) => <strong>{chunks}</strong>,
                     })}
            </li>
          </motion.ul>
        </div>

        {/* Team */}
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center tracking-wide text-[#67577f]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
        >
          {t("team.title")}
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12 bg-[#f4f7ff] dark:bg-[#2e2d2d] p-6 rounded-2xl">
          {t.raw("team.members").map((member, i) => (
            <motion.div
              key={member.name}
              className="rounded-lg p-5 border border-[#c1c7d0]/40 dark:border-gray-600 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-[#1f1f1f]"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="italic mb-1 text-[#8777a9]">{member.role}</p>
              <p>{member.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Privacy Policy */}
        <div className="p-6 mb-8 bg-[#f4f7ff] dark:bg-[#2e2d2d] rounded-2xl">
          <motion.div
            className="rounded-lg p-5 border border-[#c1c7d0]/40 dark:border-gray-600 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-[#1f1f1f]"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-semibold mb-2 text-[#67577f]">
              {t("policies.title")}
            </h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              {t.raw("policies.points").map((polices, idx) => (
                <li key={idx}>{polices}</li>
              ))}
            </ul>
            <Link
              href={"/policy"}
              className="mt-3 underline text-[#8777a9] cursor-pointer"
            >
              Read full Privacy Policy →
            </Link>
          </motion.div>
        </div>
        <div className="mt-16">
          <h1 className=" pb-4 font-semibold text-2xl text-[#67577F]">
            Annoucement
          </h1>
          <div className="relative z-10 space-y-4 lg:space-y-6 max-h-[50vh] overflow-y-auto pr-2">
            {news.length > 0 ? (
              news.map((item, i) => (
                <article
                  key={i}
                  className="border-b border-[#c1c7d0] dark:border-gray-700 pb-4 lg:pb-6 hover:opacity-80"
                >
                  <div className="flex flex-wrap items-baseline text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
                    <time>{item.date}</time>
                    <span className="ml-2 lg:ml-3 bg-[#8777a9] text-white px-2 py-1 text-[10px] rounded uppercase font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <h2 className="text-[#8777a9] dark:text-[#b6a4d9] py-1 lg:py-2 text-base lg:text-lg cursor-pointer font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#6b7280] dark:text-gray-400 line-clamp-3 max-w-full lg:max-w-[90%]">
                    {item.description}
                  </p>
                </article>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No announcements available.
              </p>
            )}
          </div>
        </div>

        {/* Company Details */}
        <div className="p-6 mt-16 bg-[#f4f7ff] dark:bg-[#2e2d2d] rounded-2xl">
          <motion.div
            className="rounded-lg px-6 py-6 shadow-lg border border-[#c1c7d0]/40 dark:border-gray-600"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.8 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-[#67577f]">
              🧾 {t("contact.companyDetails")}
            </h2>
            <div className="space-y-1 text-gray-700 dark:text-gray-300">
              <div>{t("contact.companyName")}: Invent-Tree</div>
              <div>
                {t("contact.experience")}: 10+ years in political survey &
                polling
              </div>
              <div>
                {t("contact.address")}: Park Street, Green Olives, Hinjewadi
                Phase II, Pune - 57
              </div>
              <div>{t("contact.email")}: projects@invent-tree.in</div>
              <div>{t("contact.phone")}: +91-9930005234</div>
              <div>
                {t("contact.legalEntity")}: Registered under Indian Companies
                Act, MSME Certified
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
