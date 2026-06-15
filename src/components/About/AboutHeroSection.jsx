"use client";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-20 lg:pb-28">
      {/* Enhanced background glows – smoother & more elegant */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-100/40 to-indigo-100/40 blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-indigo-100/40 to-blue-100/40 blur-[120px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/30 blur-[150px] animate-pulse-slow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT – staggered children */}
          <div className="space-y-6">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-blue-700 border border-blue-100/80 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-blue-100 hover:scale-[1.02]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
                </span>
                ABOUT VIPTRO TECHNOLOGIES
              </div>
            </div>

            <h1 className="animate-fade-up animation-delay-100 mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.2]">
              Empowering the Next
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Generation of Digital Leaders & Innovators
              </span>
            </h1>

            <div className="animate-fade-up animation-delay-200 space-y-4">
              <p className="text-base text-gray-500 leading-relaxed sm:text-lg max-w-xl transition-all duration-300 hover:text-gray-700 hover:translate-x-0.5">
                At Viptro Technologies, we are committed to transforming ambitious learners into industry-ready professionals through practical, result-driven education. Our programs combine expert mentorship, live client projects, and hands-on implementation to ensure every student gains real-world experience, not just theoretical knowledge.
              </p>
              <p className="text-base text-gray-500 leading-relaxed sm:text-lg max-w-xl transition-all duration-300 hover:text-gray-700 hover:translate-x-0.5">
                From Digital Marketing and Search Engine Optimization to Web Development, Meta Advertising, and AI-powered solutions, we provide the skills, strategies, and guidance needed to thrive in today's rapidly evolving digital landscape.
              </p>
            </div>

            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-4">
              <button className="group relative overflow-hidden inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="relative z-10">Explore Programs</span>
                <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Book Free Consultation
              </button>
            </div>

            <div className="animate-fade-up animation-delay-400 mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "5,000+", label: "Students Trained", delay: "0s" },
                { value: "100+", label: "Live Projects", delay: "0.1s" },
                { value: "25+", label: "Industry Experts", delay: "0.2s" },
                { value: "95%", label: "Career Success Rate", delay: "0.3s" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group border-r border-gray-100 last:border-0 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: stat.delay }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105 origin-left">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE – premium card stack with staggered animations */}
          <div className="space-y-6">
            {/* Main value card – glassmorphism + hover depth */}
            <div className="animate-fade-up animation-delay-200 bg-gradient-to-br from-white to-gray-50/80 rounded-2xl border border-gray-100 p-6 md:p-7 shadow-md backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:h-8" />
                Why learners choose Viptro
              </h3>
              <div className="space-y-5">
                {[
                  { icon: "✓", title: "Industry‑Validated Curriculum", desc: "Designed with input from 25+ digital marketing leaders & updated quarterly." },
                  { icon: "⏱️", title: "Real‑Time Live Projects", desc: "100+ real client briefs → portfolio that actually gets noticed." },
                  { icon: "💼", title: "Career‑First Approach", desc: "95% career success rate – resume reviews, mock interviews, placement support." },
                  { icon: "👥", title: "Lifetime Access & Community", desc: "24/7 doubt solving, alumni network, and free upskilling webinars." },
                  { icon: "🎯", title: "Dedicated Mentor Support", desc: "1:1 mentorship from industry practitioners, not just trainers." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1 group/item"
                    style={{ transitionDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 group-hover/item:bg-blue-200 group-hover/item:scale-110 group-hover/item:shadow-sm">
                      <span className="text-blue-600 text-sm font-medium">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 transition-colors duration-300 group-hover/item:text-blue-700">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 transition-colors duration-300 group-hover/item:text-gray-700">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial card – with elegant quote styling */}
            <div className="animate-fade-up animation-delay-300 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl p-5 border border-blue-100/50 transition-all duration-400 hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5">
              <div className="flex gap-3">
                <div className="text-4xl text-blue-300 font-serif transition-all duration-300 group-hover:scale-110">“</div>
                <div>
                  <p className="text-sm text-gray-700 italic leading-relaxed transition-colors duration-300 hover:text-gray-900">
                    Viptro’s practical approach helped me land a digital marketing role within 3 months. The live projects were game‑changers.
                  </p>
                  <p className="text-xs font-semibold text-gray-800 mt-2 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    — Priya Sharma, SEO Specialist (Graduate 2024)
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badge row – with icons and hover scale */}
            <div className="animate-fade-up animation-delay-400 flex flex-wrap justify-between items-center gap-4 pt-2 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <span className="text-yellow-500 text-lg drop-shadow-sm">⭐</span>
                <span className="text-xs text-gray-600 font-medium hover:text-gray-800">4.9/5 (1,200+ reviews)</span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1 transition-all duration-300 hover:text-blue-600 hover:scale-105">🎓 85% placement assistance</span>
                <span className="inline-flex items-center gap-1 transition-all duration-300 hover:text-blue-600 hover:scale-105">📜 Verified certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes & refined animations */}
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
          0%, 100% { opacity: 0.5; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.7; transform: scale(1.02) translate(10px, -10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 5s ease infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}