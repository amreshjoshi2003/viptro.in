"use client";

export default function LearningProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Learn Fundamentals",
      description:
        "Master SEO, Google Ads, Meta Ads, Content Marketing and AI tools.",
    },
    {
      number: "02",
      title: "Practice Skills",
      description:
        "Apply your knowledge through assignments and practical exercises.",
    },
    {
      number: "03",
      title: "Build Real Projects",
      description:
        "Work on industry-level projects to gain hands-on experience.",
    },
    {
      number: "04",
      title: "Launch Your Career",
      description:
        "Get placement support, interview preparation and career guidance.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glows – responsive sizes */}
      <div className="absolute -top-40 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-blue-100/30 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-indigo-100/30 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-full bg-blue-50/20 blur-[100px] sm:blur-[120px] md:blur-[140px] animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header – responsive text */}
        <div className="text-center max-w-3xl mx-auto animate-fade-up px-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/80 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-blue-100">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
            </span>
            OUR PROCESS
          </div>
          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Your Journey To Becoming
            <span className="mt-1 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              A Digital Marketing Expert
            </span>
          </h2>
        </div>

        {/* Steps Grid – responsive gap and column layout */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 grid gap-5 sm:gap-6 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting line – hidden on mobile, visible on lg screens */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" />

          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card – responsive padding and border */}
              <div className="relative h-full rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border-l-4 border-blue-500 shadow-md p-5 sm:p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-l-blue-600 overflow-hidden">
                {/* Background number – responsive font size */}
                <div className="absolute bottom-2 right-3 sm:right-4 text-6xl sm:text-7xl md:text-8xl font-black text-blue-50/40 select-none transition-all duration-500 group-hover:text-blue-100/60 group-hover:scale-110">
                  {step.number}
                </div>

                {/* Step badge – responsive size */}
                <div className="relative z-10 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 font-bold text-base sm:text-lg mb-3 sm:mb-4 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  {step.number}
                </div>

                <h3 className="relative z-10 text-lg sm:text-xl font-bold text-gray-900 mt-1 sm:mt-2 transition-colors duration-300 group-hover:text-blue-700">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector – hidden on mobile/tablet, visible only on lg screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-300 transition-all duration-300 group-hover:text-blue-500 group-hover:translate-x-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
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
          0%, 100% { opacity: 0.3; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.5; transform: scale(1.02) translate(10px, -10px); }
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