import Image from "next/image";

export default function CareerTransformationSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft Glow Effects - Responsive positioning */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px] md:top-20 md:left-10" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px] md:bottom-10 md:right-10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Badge - responsive padding and text */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-2 shadow-sm sm:gap-3 sm:px-6 sm:py-3">
            <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse sm:h-2.5 sm:w-2.5" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-700 sm:text-xs sm:tracking-[0.25em]">
              Future Ready Digital Skills
            </span>
          </div>

          {/* Heading - fully responsive text sizes */}
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.1] tracking-[-0.02em] text-slate-900 sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] xl:leading-[0.9] xl:tracking-[-0.04em]">
            Transform Your Future
            <span className="mt-1 block bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent sm:mt-2">
              With Modern Skills
            </span>
          </h1>

          {/* Description - responsive font sizes and spacing */}
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-8 sm:text-lg md:text-xl">
            Master industry-leading skills through immersive learning,
            expert mentorship, real-world projects, and career-focused
            programs designed to accelerate your professional growth and
            unlock high-paying opportunities.
          </p>

          {/* Buttons - stack on mobile, row on larger */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4 md:mt-12">
            <button className="group rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.45)] sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base">
              <span className="flex items-center justify-center gap-2">
                Start Learning
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base">
              Explore Programs
            </button>
          </div>

          {/* 🔥 PREMIUM WHITE CARDS - fully responsive grid and cards */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-5 md:mt-20 md:grid-cols-4 md:gap-6">

            {/* Card 1 */}
            <div className="group relative rounded-xl bg-white p-4 text-center shadow-[0_10px_25px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.15)] sm:rounded-2xl sm:p-5 md:p-6">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/5 to-amber-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl" />
              <h3 className="relative text-2xl font-black text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl">
                25K+
              </h3>
              <p className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
                Learners
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-xl bg-white p-4 text-center shadow-[0_10px_25px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.15)] sm:rounded-2xl sm:p-5 md:p-6">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/5 to-amber-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl" />
              <h3 className="relative text-2xl font-black text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl">
                98%
              </h3>
              <p className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
                Success Rate
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-xl bg-white p-4 text-center shadow-[0_10px_25px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.15)] sm:rounded-2xl sm:p-5 md:p-6">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/5 to-amber-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl" />
              <h3 className="relative text-2xl font-black text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl">
                500+
              </h3>
              <p className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
                Mentors
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative rounded-xl bg-white p-4 text-center shadow-[0_10px_25px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.15)] sm:rounded-2xl sm:p-5 md:p-6">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/5 to-amber-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl" />
              <h3 className="relative text-2xl font-black text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl">
                120+
              </h3>
              <p className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.2em]">
                Programs
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}