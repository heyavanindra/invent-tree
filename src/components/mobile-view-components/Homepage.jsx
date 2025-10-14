"use client";
import React from "react";
import Link from "next/link";
import RotatedSVG from "./../RotatedSVG";
import { useTranslations } from "next-intl";

const HomepageMobile = () => {
  const t = useTranslations("Home");

  return (
    <>
      <div className="flex flex-col bg-violet-100 dark:bg-neutral-900 justify-center items-center min-h-screen px-4 py-8">
        {/* Rotated SVG Logo */}
        <div className="mb-6">
          <RotatedSVG size={150} logoSize={45} />
        </div>

        {/* Main Heading */}
        <div className="p-6">
          <h1 className="text-[#4f2d91] dark:text-neutral-400 font-semibold text-2xl text-center tracking-tight leading-tight">
            {t("title")}
          </h1>
        </div>

        {/* Divider */}
        <span className="h-px mt-2 w-[50vw] bg-neutral-600 dark:bg-neutral-500 mask-r-from-0% mask-l-from-0%"></span>

        {/* Our Mission Label */}
        <span className="text-lg font-medium mt-3 mb-4 dark:text-neutral-300">
          {t("tagline")}
        </span>

        {/* Features List */}
        <div className="px-6 pb-4">
          <ul className="text-left text-sm space-y-3 list-disc list-inside text-black dark:text-neutral-300">
            <li>
              <span className="font-semibold text-[#4f2d91] dark:text-purple-400">
                {t("whatwedo.trustedData.title")}
              </span>{" "}
              {t("whatwedo.trustedData.description")}{" "}
            </li>

            <li>
              <span className="font-semibold text-[#4f2d91] dark:text-purple-400">
                {t("whatwedo.expertAnalysis.title")}{" "}
              </span>{" "}
              {t("whatwedo.expertAnalysis.description")}{" "}
            </li>
            <li>
              <span className="font-semibold text-[#4f2d91] dark:text-purple-400">
                {t("whatwedo.customSolutions.title")}
              </span>{" "}
              {t("whatwedo.customSolutions.description")}{" "}
            </li>
          </ul>
        </div>

        {/* Learn More Button */}
        <Link
          href={"/about"}
          className="rounded-lg px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {t("learnMore")}{" "}
        </Link>
      </div>
    </>
  );
};

export default HomepageMobile;
