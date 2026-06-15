"use client";

export default function MeetOurExpertsSection() {
  const experts = [
    {
      name: "Rahul Sharma",
      role: "SEO & Growth Expert",
      experience: "8+ Years Experience",
      expertise: ["SEO Strategy", "Content Marketing", "Analytics", "Link Building"],
      bio: "Helped 50+ businesses scale organic traffic by 200%+ using data-driven strategies.",
      specialization: "SEO, Google Analytics, Content Strategy",
    },
    {
      name: "Priya Verma",
      role: "Performance Marketing Specialist",
      experience: "6+ Years Experience",
      expertise: ["Google Ads", "Meta Ads", "PPC", "Retargeting"],
      bio: "Managed ₹2Cr+ ad spend across e‑commerce and lead generation campaigns.",
      specialization: "Google Ads, Meta Ads, ROI Optimization",
    },
    {
      name: "Amit Singh",
      role: "Meta Ads Consultant",
      experience: "7+ Years Experience",
      expertise: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Creative Strategy"],
      bio: "Scaled D2C brands with ROAS of 5x+ through creative testing and automation.",
      specialization: "Meta Ads, E‑commerce Growth, Ad Automation",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Refined ambient glows – softer & wider */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-100/20 blur-[140px] animate-float" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-yellow-100/20 blur-[140px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-50/15 blur-[160px] animate-pulse-slow pointer-events-none" />

      {/* Subtle dotted grid overlay for texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 backdrop-blur-sm px-5 py-2 text-base font-semibold text-amber-700 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-amber-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            OUR EXPERTS
          </div>

          <h2 className="mt-7 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
            Learn From Industry
            <span className="block bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>

          <p className="mx-auto mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 max-w-2xl">
            Our mentors bring years of practical experience,
            industry knowledge and proven strategies to help
            students build successful careers.
          </p>
        </div>

        {/* Experts Grid – premium card design */}
        <div className="mt-16 md:mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, idx) => (
            <div
              key={expert.name}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/30 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Light yellow gradient overlay – smoother & more refined */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-transparent to-yellow-50/0 transition-opacity duration-500 group-hover:from-amber-50/70 group-hover:to-yellow-50/60" />

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.3), 0 0 0 2px rgba(255,193,7,0.1)' }} />

              <div className="relative z-10 p-7 md:p-8">
                {/* Avatar with elegant ring and hover effect */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-3xl sm:text-4xl font-bold text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ring-4 ring-white/50 group-hover:ring-amber-200/50">
                    {expert.name.charAt(0)}
                  </div>
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-amber-700">
                  {expert.name}
                </h3>

                <p className="mt-2 text-lg font-semibold text-amber-600">
                  {expert.role}
                </p>

                <p className="mt-2 text-base text-slate-500">
                  {expert.experience}
                </p>

                {/* Expertise tags – refined hover */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {expert.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-amber-100 group-hover:text-amber-700 group-hover:shadow-sm group-hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bio / quote – premium card inset */}
                <div className="mt-5 p-4 bg-slate-50/80 rounded-xl border border-slate-100 transition-all duration-300 group-hover:bg-amber-50/60 group-hover:border-amber-200 group-hover:shadow-inner">
                  <p className="text-base text-slate-600 italic leading-relaxed">
                    “{expert.bio}”
                  </p>
                </div>

                {/* Specialization – cleaner layout */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-start gap-1.5">
                  <span className="text-sm font-bold text-amber-700 uppercase tracking-wide">Specializes in:</span>
                  <span className="text-base text-slate-600 group-hover:text-slate-800 transition-colors">
                    {expert.specialization}
                  </span>
                </div>
              </div>

              {/* Decorative bottom bar – thicker and animated */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
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
          0%, 100% { opacity: 0.25; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.45; transform: scale(1.02) translate(10px, -10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-fade-up {
          animation: fade-up 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-float {
          animation: float 14s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}