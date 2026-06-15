"use client";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-sky-100 py-12 sm:py-16 lg:py-28 xl:py-32 px-4 sm:px-6">
      {/* Ambient glows – responsive sizing */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-[80px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 h-[200px] w-[200px] rounded-full bg-sky-200/30 blur-[70px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] animate-float animation-delay-2000" />
        <div className="absolute left-0 top-1/2 h-[150px] w-[150px] rounded-full bg-indigo-100/20 blur-[60px] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px] animate-pulse-slow animation-delay-1000" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main Card – hover yellow background */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-sm p-5 sm:p-6 lg:p-8 xl:p-12 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-200/40">

          {/* Light yellow gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-yellow-50/0 to-amber-50/0 transition-opacity duration-500 group-hover:from-amber-50/80 group-hover:via-yellow-50/70 group-hover:to-amber-50/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-white/20 to-blue-50/30 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

          <div className="relative z-10 text-center">

            {/* Badge – responsive */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-sky-200 bg-sky-50/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs lg:text-sm font-semibold text-sky-700 transition-all duration-300 hover:shadow-md hover:bg-sky-100">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-sky-500" />
              </span>
              START YOUR JOURNEY TODAY
            </div>

            {/* Small Heading – responsive */}
            <h3 className="mt-5 sm:mt-6 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.3em] text-sky-600">
              FUTURE-READY DIGITAL MARKETING EDUCATION
            </h3>

            {/* Main Heading – fully responsive text sizes */}
            <h2 className="mx-auto mt-4 sm:mt-5 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3px] text-slate-900">
              Become The Digital Marketer
              <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Businesses Need
              </span>
            </h2>

            {/* Description – responsive text */}
            <p className="mx-auto mt-4 sm:mt-5 lg:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed sm:leading-7 lg:leading-9 text-slate-600">
              Gain practical expertise in SEO, Google Ads,
              Meta Ads, AI Automation and Performance Marketing
              through industry-driven training, live mentorship
              and real-world projects.
            </p>

            {/* Buttons – stack on mobile, row on tablet+ */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="group/btn relative overflow-hidden w-full sm:w-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30">
                <span className="relative z-10">Explore Programs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </button>

              <button className="w-full sm:w-auto rounded-xl sm:rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-600 hover:shadow-lg hover:bg-white">
                Schedule A Consultation
              </button>
            </div>

            {/* Trust Row – responsive grid, wraps on mobile */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 border-t border-slate-200/60 pt-6 sm:pt-8 text-center text-[10px] sm:text-xs lg:text-sm font-semibold text-slate-500">
              <span className="transition-all duration-300 hover:text-amber-600 hover:scale-105 cursor-default">5000+ Students Trained</span>
              <span className="transition-all duration-300 hover:text-amber-600 hover:scale-105 cursor-default">50+ Real Projects</span>
              <span className="transition-all duration-300 hover:text-amber-600 hover:scale-105 cursor-default">Expert Mentorship</span>
              <span className="transition-all duration-300 hover:text-amber-600 hover:scale-105 cursor-default">Career Support</span>
              <span className="transition-all duration-300 hover:text-amber-600 hover:scale-105 cursor-default">AI-Powered Learning</span>
            </div>

          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { opacity: 0.3; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.5; transform: scale(1.02) translate(10px, -10px); }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}