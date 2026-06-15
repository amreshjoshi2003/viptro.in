"use client";

export default function TargetAudienceSection() {
  const audiences = [
    {
      icon: "🎓",
      title: "Students & Fresh Graduates",
      description:
        "Bridge the gap between academic knowledge and industry demands. Gain hands-on experience and a portfolio that stands out.",
    },
    {
      icon: "💼",
      title: "Working Professionals",
      description:
        "Future-proof your career with in-demand digital skills. Upskill without quitting your job through flexible, project-based learning.",
    },
    {
      icon: "💻",
      title: "Freelancers & Solopreneurs",
      description:
        "Master high-ticket services like SEO, ads, and automation to attract premium clients and scale your income.",
    },
    {
      icon: "🔄",
      title: "Career Transitioners",
      description:
        "Switch to digital marketing or tech with a structured roadmap, mentorship, and job-ready credentials.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Business Owners",
      description:
        "Drive measurable growth using performance marketing, AI tools, and data-driven strategies without relying on agencies.",
    },
    {
      icon: "🚀",
      title: "Startup Founders",
      description:
        "Build, launch, and scale your brand with lean marketing tactics and real-world execution frameworks.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background orbs - responsive sizing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-blue-400/10 blur-[100px] sm:blur-[120px] md:blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] rounded-full bg-amber-400/10 blur-[110px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-1000" />
        <div className="absolute -bottom-40 -left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-yellow-400/10 blur-[100px] sm:blur-[120px] md:blur-[140px] animate-pulse delay-700" />
      </div>

      {/* Premium grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header - Fully responsive text sizes */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/40 shadow-sm mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-500" />
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-amber-700">
              Who We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight">
            Who Is{" "}
            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
              Viptro
            </span>{" "}
            For?
          </h2>
          <div className="w-20 sm:w-24 md:w-28 h-1 sm:h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mt-5 sm:mt-6 md:mt-7 mb-4 sm:mb-5 md:mb-6" />
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Tailored programs for ambitious learners at every stage
          </p>
        </div>

        {/* Cards Grid - Fully responsive grid and card padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 text-center transition-all duration-500 hover:-translate-y-2 border border-white/40 shadow-md hover:shadow-2xl hover:shadow-amber-500/20 overflow-hidden"
            >
              {/* Light yellow hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-yellow-50/0 to-amber-50/0 group-hover:from-amber-50/80 group-hover:via-yellow-50/80 group-hover:to-amber-50/80 transition-all duration-500" />

              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-amber-300 group-hover:via-yellow-400 group-hover:to-amber-400 transition-all duration-700 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon - responsive sizing */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-gray-50 text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 md:mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:from-amber-100 group-hover:to-yellow-100">
                  {item.icon}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-400/20 to-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title - responsive font size */}
                <h3 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-700 group-hover:to-yellow-600">
                  {item.title}
                </h3>

                {/* Description - responsive */}
                <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                  {item.description}
                </p>

                {/* Decorative line - responsive width on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transition-all duration-500 group-hover:w-10 sm:group-hover:w-12 md:group-hover:w-16" />
              </div>

              {/* Hover shine sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Premium trust bar - fully responsive */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          <div className="pt-6 sm:pt-8 md:pt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-gray-500">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
                <span className="text-xs sm:text-sm md:text-base font-bold text-amber-700">⭐</span>
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold">4.9/5 Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
                <span className="text-xs sm:text-sm md:text-base font-bold text-amber-700">👥</span>
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold">5K+ Learners</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-amber-100 flex items-center justify-center shadow-sm">
                <span className="text-xs sm:text-sm md:text-base font-bold text-amber-700">🎯</span>
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold">85% Placement</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-6 sm:mt-7 md:mt-8">
            Join thousands who transformed their future with Viptro's mentorship
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        .animate-pulse {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}