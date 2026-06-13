"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white py-6 sm:py-10 md:py-12 lg:py-16">
      {/* Abstract background blobs */}
      <div className="absolute -top-80 -left-80 h-[800px] w-[800px] rounded-full bg-sky-100/40 blur-[200px] pointer-events-none" />
      <div className="absolute -bottom-80 -right-80 h-[800px] w-[800px] rounded-full bg-blue-100/40 blur-[200px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-sky-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
              Live, Project‑Based Training
            </div>

            {/* Heading - responsive font sizes */}
            <h1 className="mt-4 sm:mt-5 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-[-0.02em] text-slate-900">
              Dominate{" "}
              <span className="whitespace-nowrap">Search Ads,</span>
              <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SEO & AI Marketing
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-5 md:mt-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
              Hands‑on training in Google Ads, SEO, Meta Ads, and AI automation.
              Build a real portfolio – become job‑ready in 4 months.
            </p>

            {/* Buttons - responsive sizing */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <button className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:text-sky-600 hover:shadow-md">
                Syllabus PDF
              </button>
            </div>

            {/* Stats - responsive grid */}
            <div className="mt-8 sm:mt-10 md:mt-12 grid max-w-sm grid-cols-3 gap-3 sm:gap-5 mx-auto lg:mx-0">
              <div className="border-r border-slate-100 last:border-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">5K+</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Graduates</p>
              </div>
              <div className="border-r border-slate-100 last:border-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">50+</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Projects</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">95%</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Success</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Responsive Dashboard */}
          <div className="relative flex justify-center mt-6 sm:mt-8 lg:mt-0">
            <div className="relative w-full max-w-[500px] sm:max-w-[540px] md:max-w-[560px] transition-all duration-500 hover:scale-[1.01]">
              {/* Glow behind card - hidden on mobile */}
              <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-r from-sky-400/30 via-blue-500/20 to-indigo-500/30 blur-2xl opacity-60 hidden sm:block" />

              {/* Main card */}
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/30 bg-white/80 backdrop-blur-md p-1.5 sm:p-2 shadow-2xl shadow-slate-200/50">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                    alt="Modern analytics dashboard"
                    className="w-full h-auto rounded-xl sm:rounded-2xl"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                  {/* Live badge - responsive */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md px-2 py-1 sm:px-2.5 sm:py-1.5 text-[9px] sm:text-xs font-semibold text-white shadow-sm">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-500" />
                    </span>
                    LIVE SESSION
                  </div>
                </div>

                {/* Floating cards - hidden on mobile, visible from sm up */}
                <div className="hidden sm:block absolute -left-3 md:-left-5 top-1/4 rounded-lg md:rounded-xl border border-sky-200/80 bg-white/95 backdrop-blur-md px-2 py-1.5 md:px-4 md:py-2.5 shadow-lg rotate-[-2deg] hover:rotate-0 transition-all duration-300">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-sky-500 text-xs md:text-sm">📈</span>
                    <p className="text-[10px] md:text-xs font-semibold text-sky-600">Real‑Time Analytics</p>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-slate-800 mt-0.5 md:mt-1">+156% Traffic</p>
                </div>

                <div className="hidden sm:block absolute -right-3 md:-right-5 bottom-1/3 rounded-lg md:rounded-xl border border-indigo-200/80 bg-white/95 backdrop-blur-md px-2 py-1.5 md:px-4 md:py-2.5 shadow-lg rotate-[2deg] hover:rotate-0 transition-all duration-300">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-indigo-500 text-xs md:text-sm">🤖</span>
                    <p className="text-[10px] md:text-xs font-semibold text-indigo-600">AI Automation</p>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-slate-800 mt-0.5 md:mt-1">20+ Tools</p>
                </div>

                {/* Rating badge - responsive */}
                <div className="absolute left-1/2 -bottom-3 sm:-bottom-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5 shadow-lg whitespace-nowrap">
                  <p className="text-[9px] sm:text-xs md:text-xs font-semibold text-white flex items-center gap-0.5 sm:gap-1">
                    <span className="text-xs sm:text-sm">⭐</span> 4.9/5 · <span className="hidden xs:inline">1,200+ students</span><span className="xs:hidden">1.2k</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        @media (max-width: 640px) {
          .xs\\:inline { display: inline; }
          .xs\\:hidden { display: none; }
        }
      `}</style>
    </section>
  );
}