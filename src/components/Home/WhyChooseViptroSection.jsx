"use client";

export default function WhyChooseViptroSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-[#F8FAFC] overflow-hidden">
      {/* Enhanced Background Glows - responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-cyan-500/10 rounded-full blur-[70px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-violet-500/10 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section - fully responsive */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-100 bg-white/80 backdrop-blur-sm text-blue-700 text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all">
            WHY VIPTRO
          </span>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] sm:leading-[0.95]">
            Building Careers,
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              Not Just Courses.
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-4">
            Learn in-demand skills through real projects, expert mentorship,
            industry tools and career-focused training designed for the modern
            digital world.
          </p>
        </div>

        {/* Premium Card with lift effect */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] bg-white border border-slate-200 shadow-[0_30px_100px_rgba(15,23,42,0.08)] hover:shadow-[0_40px_120px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 z-10">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-semibold text-xs sm:text-sm shadow-sm">
                Trusted Learning Ecosystem
              </div>

              <h3 className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Learn From Industry Experts.
                <span className="block text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text">
                  Build Real Skills.
                </span>
                Get Real Results.
              </h3>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                Every program is designed around practical implementation,
                live client projects, mentorship sessions and modern tools
                used by top-performing professionals.
              </p>

              {/* Bullet points - responsive spacing */}
              <div className="mt-6 sm:mt-8 lg:mt-10 space-y-3 sm:space-y-4">
                {[
                  "Live Client Project Experience",
                  "1:1 Career Mentorship",
                  "Industry Recognized Certification",
                  "Placement & Freelancing Guidance",
                  "AI Tools & Automation Training",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-start sm:items-center gap-3 sm:gap-4 cursor-default transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0 mt-0.5 sm:mt-0">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Premium Button - responsive sizes */}
              <button className="group relative mt-8 sm:mt-10 lg:mt-12 px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-100 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Programs →
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>

            {/* Right Side – Stats + Two Premium Cards (stacked vertically) */}
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 relative z-10">
                {[
                  { value: "5000+", label: "Students Trained", delay: "0s" },
                  { value: "100+", label: "Live Projects", delay: "0.1s" },
                  { value: "4.9★", label: "Student Rating", delay: "0.2s" },
                  { value: "85%", label: "Career Support", delay: "0.3s" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl"
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* First Premium Card - Premium Learning Experience */}
              <div className="group mt-6 sm:mt-8 lg:mt-10 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-7 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:scale-[1.01] transition-transform">
                  Premium Learning Experience
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  A structured ecosystem combining expert mentorship,
                  implementation-focused training and modern industry tools.
                </p>
              </div>

              {/* Second Premium Card - Global Career Support (below the first) */}
              <div className="group mt-4 sm:mt-5 lg:mt-6 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-6 md:p-7 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:scale-[1.01] transition-transform">
                  Global Career Support
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  International recognition, placement assistance, freelancing
                  opportunities, and lifetime career guidance.
                </p>
              </div>

              {/* Floating glows */}
              <div className="absolute -bottom-20 -right-20 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 rounded-full bg-blue-500/20 blur-[60px] sm:blur-[80px] pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 rounded-full bg-cyan-500/20 blur-[60px] sm:blur-[80px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}