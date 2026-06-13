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

  const [activeCategory, setActiveCategory] = useState("Digital Marketing");

  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Viptro's Mentorship Program
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 text-lg">
          Industry‑led training with live projects & career support
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(programs).map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-200 ${
                activeCategory === item
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Course Card */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left Image */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] bg-gray-100">
              <img
                src={programs[activeCategory].image}
                alt={activeCategory}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x600/f3f4f6/9ca3af?text=Course+Image";
                }}
              />
            </div>

            {/* Right Content */}
            <div className="p-8 md:p-10 lg:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {programs[activeCategory].title}
                </h3>

                <div className="h-0.5 w-16 bg-blue-600 rounded-full"></div>

                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 text-lg">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-gray-600 font-medium text-sm">
                    4.8 (1,000+ reviews)
                  </span>
                </div>

                <div className="flex gap-8 pt-2">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide font-semibold">
                      Duration
                    </p>
                    <p className="text-gray-800 text-lg font-semibold mt-1">
                      30 Days
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide font-semibold">
                      Learning
                    </p>
                    <p className="text-gray-800 text-lg font-semibold mt-1">
                      30 Hours
                    </p>
                  </div>
                </div>

                <button className="mt-6 w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional trust badge */}
        <div className="text-center mt-10 text-sm text-gray-400">
          Limited seats • Live mentorship • Certificate included
        </div>
      </div>
    </section>
  );
}