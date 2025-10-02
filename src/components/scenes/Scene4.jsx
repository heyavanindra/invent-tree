"use client";

import React, { useEffect, useState } from "react";
import RotatedSVG from "../RotatedSVG";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

const Scene4 = () => {
  const t = useTranslations();
  const [news, setNews] = useState([]);
  const router = useRouter();

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

  const footerLinks = [
    { label: t('Home.Scene4.footer.links.0'), href: "/about" },
    { label: t('Home.Scene4.footer.links.1'), href: "/policy" },
    { label: t('Home.Scene4.footer.links.2'), href: "/policy" },
  ];

  return (
    <div className="w-full sm:ml-6">
      <div className="flex flex-col sm:flex-row min-h-screen h-full w-full font-sans text-sm bg-white text-[#222] dark:bg-[#111] dark:text-[#e5e7eb]">
        {/* Left Section - NEWS */}
        <aside className="relative w-full sm:w-1/2 flex-1.1 bg-[#f4f7ff] dark:bg-[#1a1a1a] py-8 sm:py-12 px-5 sm:px-10">
          <div className="mx-0 sm:mx-5 md:ps-20 sm:ps-10 mt-0 sm:mt-5 lg:mt-20">
            <div className="relative z-10 flex flex-col items-center sm:flex-row sm:justify-between gap-3 sm:gap-4 mb-6 lg:mb-10">
              <h1 className="text-4xl sm:text-5xl text-center sm:text-left pt-10 sm:pt-0 text-[#604e84] dark:text-[#b6a4d9] tracking-wide">
                {t('Home.Scene4.announcements.title')}
              </h1>
              <div className="text-end">
                <button
                  onClick={() => router.push("/announcements/add")}
                  className="bg-[#8777a9] text-white text-md px-4 py-1 rounded-lg shadow hover:opacity-80"
                >
                  {t('Home.Scene4.announcements.addButton')}
                </button>
              </div>
            </div>

            <hr className="border-t border-[#c1c7d0]/40 dark:border-gray-700 mb-6 lg:mb-8" />

            <div className="relative z-10 space-y-4 lg:space-y-6 max-h-[50vh] overflow-y-hidden pr-2">
              {/* PDF Brochure - Always First */}
              <article className="border-b border-[#c1c7d0] dark:border-gray-700 pb-4 lg:pb-6">
                <div className="flex flex-wrap items-baseline text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
                  <time>{new Date().toLocaleDateString()}</time>
                  <span className="ml-2 lg:ml-3 bg-[#8777a9] text-white px-2 py-1 text-[10px] rounded uppercase font-bold">
                   {t('Home.Scene4.announcements.brochure.tag')}
                  </span>
                </div>
                <a
                  href="/Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group hover:opacity-80"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-[#8777a9]/10 rounded-lg">
                      <FileText className="w-6 h-6 text-[#8777a9] dark:text-[#b6a4d9]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#8777a9] dark:text-[#b6a4d9] py-1 lg:py-2 text-base lg:text-lg font-semibold group-hover:underline uppercase">
                          {t('Home.Scene4.announcements.brochure.title')}
                      </h2>
                      <p className="text-sm text-[#6b7280] dark:text-gray-400 line-clamp-3 max-w-full lg:max-w-[90%]">
                        {t('Home.Scene4.announcements.brochure.description')}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#8777a9] dark:text-[#b6a4d9] font-medium">
                        {t('Home.Scene4.announcements.brochure.viewPdf')} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </a>
              </article>

              {/* Regular Announcements from Backend */}
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
                  {t('Home.Scene4.announcements.noAnnouncements')}
                </p>
              )}
            </div>
            <div className="dark:text-neutral-300 text-neutral-900 py-4 flex">
              <Link
                href={"/about"}
                className="flex justify-between gap-x-2 items-center"
              >
                {t('Home.Scene4.announcements.learnMore')} <ArrowRight />
              </Link>
            </div>
          </div>
        </aside>

        <main className="w-full sm:w-full flex flex-col justify-start px-5 sm:px-8 lg:px-12 xl:px-18 py-8 sm:py-8 pb-4 flex-0.9">
          <div className="mb-8 w-full mt-4 sm:mt-0 flex justify-center">
            <img
              src="/logo/logo3.webp"
              className="lg:h-[300px] h-[100px]"
              alt="logo"
            />
          </div>

          <section className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between bg-[#f6f9ff] dark:bg-[#1f1f1f] rounded-xl p-4 lg:p-3 mb-6 lg:mb-3 gap-2">
            <div className="flex items-center font-semibold text-lg py-1 text-[#222] dark:text-gray-200">
              <svg
                className="w-[22px] h-[22px] mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#13837d"
                  d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 .4l7.5 4.5a.5.5 0 00.5 0L20 6.4V6H4v.4z"
                />
              </svg>
              <a
                href="mailto:contact@invent-tree.com"
                className="text-base lg:text-xl text-[#8777a9] dark:text-[#b6a4d9]"
              >
                {t('Home.Scene4.contact.email')}
              </a>
            </div>
            <div className="text-xl lg:text-3xl text-center sm:text-right">
              <p className="py-2">
                <span className="text-[#8777a9] dark:text-[#b6a4d9] font-semibold">
                  {t('Home.Scene4.contact.tel')}
                </span>{" "}
                {t('Home.Scene4.contact.phone')}
              </p>
              <small className="text-xs -mt-1 block font-medium text-gray-600 dark:text-gray-400">
                {t('Home.Scene4.contact.receptionHours')}
              </small>
            </div>
          </section>

          <div className="flex flex-col items-center justify-center sm:items-start sm:flex-row gap-6 lg:gap-8 mb-8 text-sm">
            <div className="w-20 h-20 lg:w-30 lg:h-30 rounded-full p-1 flex justify-center items-center mb-4 sm:mb-0 hidden sm:flex">
              <div
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer"
              >
                <RotatedSVG />
              </div>
            </div>
            <div>
              <address className="not-italic leading-snug border-b border-gray-300 dark:border-gray-700 pb-3 lg:pb-5">
                <p className="py-1 text-blue-500 dark:text-red-400">
                  {t('Home.Scene4.company.name')}
                </p>
                <p className="py-1">{t('Home.Scene4.company.address.line1')}</p>
                <p className="py-1">{t('Home.Scene4.company.address.line2')}</p>
                <p>TEL: {t('Home.Scene4.contact.phone')}</p>
                <br />
                <p className="text-sm text-gray-500">
                  {t('Home.Scene4.company.copyright')}
                </p>
              </address>

              <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:gap-x-8 lg:gap-y-4 text-xs lg:text-sm mb-6 lg:mb-20 max-w-[500px] mt-4 lg:mt-5">
                {footerLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-[#222] dark:text-[#cbcfd3] font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scene4;