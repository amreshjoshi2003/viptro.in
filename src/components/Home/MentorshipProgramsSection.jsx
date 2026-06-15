"use client";

import { useState } from "react";
import Image from "next/image";

export default function MentorshipProgramsSection() {
  const programs = {
    "Digital Marketing": {
      title: "Advanced Digital Marketing Mastery Program",
      image: "/images/home/digital-marketing.webp",
      duration: "30 Days",
      hours: "30 Hours",
      rating: 4.8,
      reviews: "1,000+",
      color: "from-blue-500 to-cyan-500",
    },
    "Web Development": {
      title: "WordPress Mastery – Build Professional Websites",
      image: "/images/home/web-development.jpg",
      duration: "35 Days",
      hours: "40 Hours",
      rating: 4.9,
      reviews: "850+",
      color: "from-purple-500 to-pink-500",
    },
    "Search Engine Optimization": {
      title: "The Ultimate SEO Mastery Program",
      image: "/images/home/seo.webp",
      duration: "28 Days",
      hours: "28 Hours",
      rating: 4.7,
      reviews: "1,200+",
      color: "from-green-500 to-emerald-500",
    },
    "Social Media Optimization": {
      title: "Advanced Social Media Branding Program",
      image: "/images/home/social-media.webp",
      duration: "25 Days",
      hours: "25 Hours",
      rating: 4.8,
      reviews: "950+",
      color: "from-orange-500 to-red-500",
    },
    "Meta Ads": {
      title: "Meta Ads Complete Guide – Run Ads That Convert",
      image: "/images/home/meta-ads.jpg",
      duration: "30 Days",
      hours: "35 Hours",
      rating: 4.9,
      reviews: "780+",
      color: "from-indigo-500 to-blue-500",
    },
  };

  const [activeCategory, setActiveCategory] = useState("Digital Marketing");
  const [imageErrors, setImageErrors] = useState({});

  const activeProgram = programs[activeCategory];

  const handleImageError = () => {
    setImageErrors((prev) => ({
      ...prev,
      [activeCategory]: true,
    }));
  };

  const Placeholder = ({ category }) => (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${programs[category].color} flex items-center justify-center`}
    >
      <div className="text-center text-white px-4 sm:px-6">
        <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🎓</div>
        <h3 className="text-2xl sm:text-3xl font-bold">{category}</h3>
        <p className="mt-1 sm:mt-2 opacity-90 text-sm sm:text-base">Professional Master Program</p>
      </div>
    </div>
  );

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, #8b5cf6 2px, transparent 2px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Viptro's{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Mentorship Program
            </span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mt-4 sm:mt-5 mb-4 sm:mb-5" />

          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Industry-led training with live projects, expert mentorship and career support.
          </p>
        </div>

        {/* Tabs - responsive wrapping and sizing */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-14">
          {Object.keys(programs).map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === item
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Main Course Card */}
        <div className="group bg-white rounded-2xl sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-gray-100 shadow-xl sm:shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Image Section */}
            <div className="relative min-h-[420px] sm:min-h-[480px] md:min-h-[520px] overflow-hidden">
              {!imageErrors[activeCategory] ? (
                <Image
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={handleImageError}
                />
              ) : (
                <Placeholder category={activeCategory} />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating Badge - responsive */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                <div className="bg-white/95 backdrop-blur-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                  <span className="text-xs sm:text-sm font-bold text-gray-900">
                    🔥 Most Popular
                  </span>
                </div>
              </div>

              {/* Bottom Info Card - fully responsive */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 line-clamp-2">
                    {activeProgram.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      📅 {activeProgram.duration}
                    </span>
                    <span className="bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      ⏱️ {activeProgram.hours}
                    </span>
                    <span className="bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      ⭐ {activeProgram.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {activeProgram.title}
              </h3>

              <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full my-4 sm:my-5 md:my-6" />

              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="text-yellow-400 text-lg sm:text-xl">
                  ★★★★★
                </div>
                <span className="text-gray-600 font-medium text-sm sm:text-base">
                  {activeProgram.rating} ({activeProgram.reviews} Reviews)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex-1">
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Duration
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2">
                    {activeProgram.duration}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex-1">
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Learning
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2">
                    {activeProgram.hours}
                  </p>
                </div>
              </div>

              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300">
                Enroll Now →
              </button>

              <div className="flex flex-wrap gap-4 sm:gap-5 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
                <span>⚡ Limited Seats</span>
                <span>🎯 Live Mentorship</span>
                <span>📜 Certificate Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}