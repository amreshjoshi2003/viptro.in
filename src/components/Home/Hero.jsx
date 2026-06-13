"use client";

import React from "react";
import Image from "next/image"; // optional, but recommended for perf

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Static background elements (no repaints) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none will-change-transform"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #0f0f0f 0px, #0f0f0f 1px, transparent 1px, transparent 8px),
                           repeating-linear-gradient(90deg, #0f0f0f 0px, #0f0f0f 1px, transparent 1px, transparent 8px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none will-change-transform" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left">
            {/* Badge with hover scaling */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/5 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-cyan-700 tracking-wide transition-all duration-300 hover:scale-105 hover:border-cyan-500/60 hover:shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              SYSTEM ONLINE // ROBOTIC TRAINING
            </div>

            {/* Heading - no layout shift */}
            <h2 className="mt-4 sm:mt-5 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.2] tracking-tight text-slate-900">
              Dominate{" "}
              <span className="whitespace-nowrap">Search Ads,</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent relative inline-block group">
                SEO & AI Marketing
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-5 md:mt-6 max-w-md mx-auto lg:mx-0 text-base sm:text-lg text-slate-500 leading-relaxed">
              Hands‑on training in Google Ads, SEO, Meta Ads, and AI automation.
              Build a real portfolio – become job‑ready in 4 months.
            </p>

            {/* Buttons with enhanced hover */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25 active:translate-y-0">
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <button className="rounded-lg border border-slate-200 bg-white/80 backdrop-blur-sm px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:text-cyan-600 hover:shadow-md active:translate-y-0">
                Syllabus PDF
              </button>
            </div>

            {/* Stats with hover scale */}
            <div className="mt-8 sm:mt-10 md:mt-12 grid max-w-sm grid-cols-3 gap-3 sm:gap-5 mx-auto lg:mx-0">
              {[
                { value: "5K+", label: "graduates", hoverBg: "hover:bg-cyan-50" },
                { value: "50+", label: "projects", hoverBg: "hover:bg-cyan-50" },
                { value: "95%", label: "success", hoverBg: "hover:bg-cyan-50" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`border-r border-slate-100 last:border-0 transition-all duration-300 rounded-lg p-2 ${stat.hoverBg} hover:scale-105 cursor-default`}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-cyan-600 uppercase tracking-wide font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Dashboard with hover effects */}
          <div className="relative flex justify-center mt-6 sm:mt-8 lg:mt-0">
            <div className="relative w-full max-w-[500px] sm:max-w-[540px] md:max-w-[560px] transition-all duration-500 hover:scale-[1.02] hover:z-10">
              <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-indigo-500/30 blur-2xl opacity-60 hidden sm:block transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative rounded-2xl sm:rounded-3xl border border-white/30 bg-white/80 backdrop-blur-md p-1.5 sm:p-2 shadow-2xl shadow-slate-200/50 transition-all duration-300 hover:shadow-cyan-500/20">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                    alt="Analytics dashboard"
                    className="w-full h-auto rounded-xl sm:rounded-2xl transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md px-2 py-1 sm:px-2.5 sm:py-1.5 text-[9px] sm:text-xs font-semibold text-cyan-300 shadow-sm transition-all hover:bg-black/70">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-cyan-500" />
                    </span>
                    LIVE SESSION
                  </div>
                </div>

                {/* Floating cards */}
                <div className="hidden sm:block absolute -left-3 md:-left-5 top-1/4 rounded-lg md:rounded-xl border border-sky-200/80 bg-white/95 backdrop-blur-md px-2 py-1.5 md:px-4 md:py-2.5 shadow-lg rotate-[-2deg] transition-all duration-300 hover:rotate-0 hover:scale-110 hover:shadow-xl hover:border-cyan-300">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-cyan-500 text-xs md:text-sm">📈</span>
                    <p className="text-[10px] md:text-xs font-semibold text-cyan-600">Real‑Time Analytics</p>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-slate-800 mt-0.5 md:mt-1">+156% Traffic</p>
                </div>

                <div className="hidden sm:block absolute -right-3 md:-right-5 bottom-1/3 rounded-lg md:rounded-xl border border-indigo-200/80 bg-white/95 backdrop-blur-md px-2 py-1.5 md:px-4 md:py-2.5 shadow-lg rotate-[2deg] transition-all duration-300 hover:rotate-0 hover:scale-110 hover:shadow-xl hover:border-indigo-300">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-indigo-500 text-xs md:text-sm">🤖</span>
                    <p className="text-[10px] md:text-xs font-semibold text-indigo-600">AI Automation</p>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-slate-800 mt-0.5 md:mt-1">20+ Tools</p>
                </div>

                {/* Bottom rating badge */}
                <div className="absolute left-1/2 -bottom-3 sm:-bottom-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-1.5 shadow-lg whitespace-nowrap transition-all duration-300 hover:scale-110 hover:from-cyan-800 hover:to-slate-900">
                  <p className="text-[9px] sm:text-xs md:text-xs font-semibold text-white flex items-center gap-0.5 sm:gap-1">
                    <span className="text-xs sm:text-sm">⭐</span> 4.9/5 · 1,200+ students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}