"use client";

import { useState, useEffect } from "react";

export default function CourseHero() {
  const [counts, setCounts] = useState({
    students: 0,
    projects: 0,
    success: 0,
  });

  useEffect(() => {
    let step = 0;
    const totalSteps = 50;

    const timer = setInterval(() => {
      step++;

      setCounts({
        students: Math.min(500, Math.floor((500 / totalSteps) * step)),
        projects: Math.min(50, Math.floor((50 / totalSteps) * step)),
        success: Math.min(95, Math.floor((95 / totalSteps) * step)),
      });

      if (step >= totalSteps) {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-medium">
              🚀 Digital Marketing Training Program
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Learn Skills That
              <span className="block text-yellow-400">
                Build Your Career
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl">
              Master Digital Marketing, Meta Ads, Google Ads, SEO,
              WordPress, Performance Marketing and AI Tools through
              practical training, live projects and expert mentorship.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#curriculum"
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold px-8 py-4 rounded-xl transition"
              >
                Explore Course
              </a>

              <a
                href="/contact"
                className="border border-white/30 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
              >
                Free Demo Class
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">
                  {counts.students}+
                </h3>
                <p className="text-blue-200 mt-2">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">
                  {counts.projects}+
                </h3>
                <p className="text-blue-200 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-400">
                  {counts.success}%
                </h3>
                <p className="text-blue-200 mt-2">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">
              What You'll Learn
            </h3>

            <div className="space-y-4">
              {[
                "Meta Ads & Instagram Marketing",
                "Google Ads & YouTube Ads",
                "Search Engine Optimization (SEO)",
                "WordPress Website Development",
                "AI Tools & Automation",
                "Freelancing & Client Acquisition",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                    ✓
                  </div>

                  <span className="text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center gap-3 mb-4">
                <span>🎓</span>
                <span>Industry Certification Included</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span>💼</span>
                <span>Placement Assistance</span>
              </div>

              <div className="flex items-center gap-3">
                <span>🚀</span>
                <span>Real Client Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}