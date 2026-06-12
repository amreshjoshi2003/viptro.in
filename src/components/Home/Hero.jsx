import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center">
      {/* Background Glow */}
      <div className="absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2.5 text-sm text-cyan-300 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
              Live Practical Digital Marketing Training
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[0.9] tracking-[-3px] text-white">
              Master SEO,
              <br />
              Ads & AI Tools
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Through Real Projects
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-[18px] leading-[34px] text-slate-300/80">
              Learn SEO, Google Ads, Meta Ads, AI Tools,
              Automation and Performance Marketing through
              live classes, practical assignments and
              real-world projects.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <button
                className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_80px_rgba(6,182,212,0.45)]
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </button>

              <button
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-4
                font-medium
                text-slate-200
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/[0.05]
                hover:-translate-y-1
                "
              >
                Download Brochure
              </button>
            </div>

            {/* Trust Row */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-slate-500">
              <span>100% Practical Learning</span>
              <span>Live Mentorship</span>
              <span>Industry Projects</span>
              <span>AI Powered Training</span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center group">
            {/* Hover Glow */}
            <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-cyan-500/0 blur-[100px] transition-all duration-700 group-hover:from-cyan-500/20 group-hover:via-blue-500/25 group-hover:to-cyan-500/20" />

            {/* Image Card */}
            <div
              className="
              relative
              rounded-[36px]
              border
              border-white/10
              bg-gradient-to-b
              from-white/[0.05]
              to-white/[0.02]
              p-4
              backdrop-blur-3xl
              shadow-[0_50px_120px_rgba(0,0,0,0.45)]
              transition-all
              duration-700
              group-hover:-translate-y-2
              group-hover:shadow-[0_60px_140px_rgba(6,182,212,0.20)]
              "
            >
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />

              <img
                src="/images/home/hero-dashboard.png"
                alt="Digital Marketing"
                className="
                relative
                w-full
                max-w-[820px]
                rounded-[28px]
                transition-all
                duration-700
                group-hover:scale-[1.015]
                "
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-6 top-16 rounded-2xl border border-cyan-500/20 bg-[#08111f]/90 px-5 py-4 backdrop-blur-xl shadow-xl">
              <p className="text-xs text-slate-400">
                Live Projects
              </p>
              <h3 className="text-2xl font-bold text-cyan-400">
                50+
              </h3>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-6 bottom-16 rounded-2xl border border-cyan-500/20 bg-[#08111f]/90 px-5 py-4 backdrop-blur-xl shadow-xl">
              <p className="text-xs text-slate-400">
                AI Tools
              </p>
              <h3 className="text-2xl font-bold text-blue-400">
                20+
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}