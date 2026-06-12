"use client";

import { useState } from "react";

export default function MentorshipProgramsSection() {
  const programs = {
    "Digital Marketing": {
      title: "Advanced Digital Marketing Mastery Program",
      image: "/images/home/digital-marketing.webp",
    },

    "Web Development": {
      title: "WordPress Mastery – Build Professional Websites",
      image: "/images/home/web-development.webp",
    },

    "Search Engine Optimization": {
      title: "The Ultimate SEO Mastery Program",
      image: "/images/home/seo.webp",
    },

    "Social Media Optimization": {
      title: "Advanced Social Media Branding Program",
      image: "/images/home/social-media.webp",
    },

    "Meta Ads": {
      title: "Meta Ads Complete Guide – Run Ads That Convert",
      image: "/images/home/meta-ads.webp",
    },
  };

  const [activeCategory, setActiveCategory] =
    useState("Digital Marketing");

  return (
    <section className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-5xl md:text-7xl font-bold text-white mb-14">
          Viptro's Mentorship Program
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(programs).map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                activeCategory === item
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-[#0B1120] border border-slate-700 text-white hover:bg-[#172554] hover:border-blue-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Course Card */}
        <div className="bg-[#0B1120] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Left Image */}
            <div className="h-full">
              <img
                src={programs[activeCategory].image}
                alt={activeCategory}
                className="w-full h-full object-cover min-h-[500px]"
              />
            </div>

            {/* Right Content */}
            <div className="p-8 lg:p-12">
              <div className="bg-[#111827] rounded-3xl p-8">
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {programs[activeCategory].title}
                </h3>

                <div className="h-[3px] bg-blue-500 my-8 rounded-full"></div>

                <div className="flex items-center gap-3 mb-8">
                  <span className="text-yellow-400 text-2xl">
                    ★★★★★
                  </span>

                  <span className="text-slate-300 font-semibold text-xl">
                    4.8 (1000+ Reviews)
                  </span>
                </div>

                <div className="flex gap-12">
                  <div>
                    <p className="text-slate-500 text-sm uppercase">
                      Duration
                    </p>
                    <p className="text-white text-xl font-semibold">
                      30 Days
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm uppercase">
                      Learning
                    </p>
                    <p className="text-white text-xl font-semibold">
                      30 Hours
                    </p>
                  </div>
                </div>

                <button className="mt-10 px-8 py-4 rounded-xl bg-blue-600 hover:bg-[#0F172A] text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Enroll Now
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}