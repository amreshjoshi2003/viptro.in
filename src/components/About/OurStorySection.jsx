"use client";

import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient animated background glows – responsive sizing */}
      <div className="absolute -top-40 -left-40 w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-full bg-gradient-to-r from-blue-100/30 to-indigo-100/30 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -right-40 w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-full bg-gradient-to-l from-indigo-100/30 to-blue-100/30 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-full bg-blue-50/20 blur-[100px] sm:blur-[120px] md:blur-[150px] animate-pulse-slow pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2">
          {/* Left Image – responsive */}
          <div className="relative group animate-fade-up order-1 lg:order-1">
            <div className="absolute -inset-3 sm:-inset-4 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-200/40 via-indigo-200/30 to-blue-200/40 blur-xl sm:blur-2xl transition-all duration-700 group-hover:opacity-80 group-hover:scale-105" />
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur-sm p-1.5 sm:p-2 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
              <Image
                src="/images/about/1.png"
                alt="Viptro team at work"
                width={700}
                height={600}
                className="rounded-lg sm:rounded-xl object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x600/f3f4f6/9ca3af?text=Viptro+Story";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Floating badge – hidden on very small screens if needed, but responsive */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1.5 shadow-md border border-gray-200 text-[10px] sm:text-xs font-semibold text-blue-600 animate-fade-up animation-delay-400">
              Since 2020
            </div>
          </div>

          {/* Right Content – responsive spacing and text sizes */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-2">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/80 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-blue-100 hover:scale-[1.02]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
                </span>
                OUR STORY
              </div>
            </div>

            <h2 className="animate-fade-up animation-delay-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2]">
              Empowering Careers Through
              <span className="mt-1 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Practical Digital Education
              </span>
            </h2>

            <div className="animate-fade-up animation-delay-200 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              <p className="transition-all duration-300 hover:text-gray-800 hover:translate-x-0.5">
                Viptro was founded with a simple vision — to bridge the gap
                between traditional education and real industry requirements.
                We believe that learning should go beyond theory and focus on
                practical skills that create real career opportunities.
              </p>
              <p className="transition-all duration-300 hover:text-gray-800 hover:translate-x-0.5">
                Through live mentorship, real‑world projects and industry‑focused
                training, we help students and professionals gain the confidence,
                skills and experience needed to succeed in today's digital world.
              </p>
            </div>

            <div className="animate-fade-up animation-delay-300 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {/* Mission Card */}
              <div className="group rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-10 sm:group-hover:w-12" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-700">Our Mission</h3>
                </div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  To help learners build industry‑ready skills through practical
                  training, mentorship and real‑world experience.
                </p>
              </div>

              {/* Vision Card */}
              <div className="group rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-10 sm:group-hover:w-12" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-700">Our Vision</h3>
                </div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  To become India's most trusted platform for digital marketing
                  and AI‑powered professional education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
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
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-fade-up {
          animation: fade-up 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-2000 { animation-delay: 2s; }
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