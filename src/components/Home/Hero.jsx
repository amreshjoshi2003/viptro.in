"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        <div className="grid min-h-[92vh] items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600 sm:h-2.5 sm:w-2.5" />
              <span className="text-xs font-semibold text-blue-700 sm:text-sm">
                India's Leading Digital Marketing & AI Training Institute
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Master

              <span className="block bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Marketing
              </span>

              & AI Automation
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
              Learn Google Ads, Meta Ads, SEO, Performance Marketing,
              AI Automation and Lead Generation through practical training,
              live projects and real industry mentorship.

              Get certified, gain hands-on experience and become job-ready
              with internship and placement support.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-700
                  via-blue-600
                  to-cyan-500
                  px-6
                  py-3.5
                  text-center
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                  hover:shadow-[0_25px_60px_rgba(37,99,235,0.50)]
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                <span className="relative z-10">
                   Apply Now
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />
              </Link>

              {/* Secondary CTA */}
              <button
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-500
                  via-amber-500
                  to-yellow-500
                  px-6
                  py-3.5
                  text-center
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_40px_rgba(249,115,22,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                  hover:shadow-[0_25px_60px_rgba(249,115,22,0.50)]
                  hover:from-orange-600
                  hover:via-amber-500
                  hover:to-yellow-400
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                <span className="relative z-10">
                   Download Brochure
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-start gap-6 sm:mt-14 sm:gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
                  5000+
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:mt-2 sm:text-sm">
                  Students Trained
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
                  95%
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:mt-2 sm:text-sm">
                  Placement Support
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
                  50+
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:mt-2 sm:text-sm">
                  Live Projects
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
            <div className="absolute inset-0 rounded-full bg-blue-300/20 blur-[140px]" />

            <div className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-full">
              <Image
                src="/images/home/hero.jpeg"
                alt="Digital Marketing Training"
                width={1800}
                height={1300}
                priority
                className="
                  w-full
                  max-w-[1050px]
                  xl:max-w-[1150px]
                  rounded-[30px]
                  border
                  border-slate-200
                  object-cover
                  shadow-[0_40px_120px_rgba(15,23,42,0.15)]
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  sm:rounded-[35px]
                  lg:rounded-[40px]
                "
              />

              {/* Floating Card 1 */}
              <div
                className="
                  absolute
                  left-[-1rem]
                  top-6
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white/90
                  backdrop-blur-xl
                  px-4
                  py-3
                  shadow-2xl
                  sm:left-[-1.5rem]
                  sm:top-8
                  sm:rounded-3xl
                  sm:px-5
                  sm:py-4
                  md:left-[-2rem]
                  md:top-10
                  md:px-6
                  md:py-5
                "
              >
                <p className="text-xs text-slate-500">Students Trained</p>
                <h4 className="text-xl font-black text-slate-900 sm:text-2xl md:text-3xl">
                  5000+
                </h4>
              </div>

              {/* Floating Card 2 */}
              <div
                className="
                  absolute
                  right-[-1rem]
                  bottom-6
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white/90
                  backdrop-blur-xl
                  px-4
                  py-3
                  shadow-2xl
                  sm:right-[-1.5rem]
                  sm:bottom-8
                  sm:rounded-3xl
                  sm:px-5
                  sm:py-4
                  md:right-[-2rem]
                  md:bottom-10
                  md:px-6
                  md:py-5
                "
              >
                <p className="text-xs text-slate-500">Placement Support</p>
                <h4 className="text-xl font-black text-green-600 sm:text-2xl md:text-3xl">
                  95%
                </h4>
              </div>

              {/* Rating Badge */}
              <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full bg-[#0F172A] px-4 py-2 shadow-2xl sm:-bottom-5 sm:px-6 sm:py-3 md:-bottom-6 md:px-8 md:py-4">
                <p className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
                  ⭐ Rated 4.9/5 by 5,000+ Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}