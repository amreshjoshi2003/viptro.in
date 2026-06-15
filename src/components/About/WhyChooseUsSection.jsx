"use client";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Practical Learning",
      description:
        "Learn through hands-on assignments, live projects and real-world case studies.",
      icon: "🚀",
    },
    {
      title: "Industry Mentors",
      description:
        "Get guidance from experienced professionals actively working in the industry.",
      icon: "🎯",
    },
    {
      title: "Live Projects",
      description:
        "Work on real client projects and gain practical experience before entering the job market.",
      icon: "💼",
    },
    {
      title: "Placement Support",
      description:
        "Receive career guidance, resume reviews and interview preparation support.",
      icon: "🏆",
    },
    {
      title: "AI-Powered Training",
      description:
        "Master the latest AI tools and automation techniques used by modern marketers.",
      icon: "🤖",
    },
    {
      title: "Industry Certifications",
      description:
        "Earn valuable certifications that strengthen your professional profile.",
      icon: "📜",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-sky-100/40 blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-indigo-100/40 blur-[120px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-50/30 blur-[140px] animate-pulse-slow pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        {/* Heading Section – with fade-up animation */}
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-sky-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
            </span>
            WHY CHOOSE VIPTRO
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Everything You Need to Build a
            <span className="block bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Successful Digital Career
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            We combine practical training, industry mentorship and
            real-world experience to help students become job-ready
            digital marketing professionals.
          </p>
        </div>

        {/* Features Grid – staggered cards */}
        <div className="mt-14 md:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50 animate-fade-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-sky-50/0 via-transparent to-sky-50/0 transition-opacity duration-500 group-hover:from-sky-50/60 group-hover:to-sky-50/40" />

              <div className="relative z-10">
                {/* Icon with animated background */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 text-2xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:from-sky-200 group-hover:to-sky-100">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  {feature.description}
                </p>
              </div>

              {/* Decorative shine line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full transition-all duration-500 group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { opacity: 0.4; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.6; transform: scale(1.02) translate(10px, -10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}