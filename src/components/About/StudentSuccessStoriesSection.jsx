"use client";

export default function StudentSuccessStoriesSection() {
  const testimonials = [
    {
      name: "Rohit Kumar",
      role: "SEO Executive",
      company: "Leading Digital Agency",
      review:
        "The practical projects and mentorship helped me land my first digital marketing job within 3 months.",
      rating: 5,
    },
    {
      name: "Anjali Sharma",
      role: "Performance Marketer",
      company: "Freelancer",
      review:
        "The training was completely practical and focused on real-world implementation. Highly recommended.",
      rating: 5,
    },
    {
      name: "Vikas Singh",
      role: "Digital Marketing Specialist",
      company: "E‑commerce Brand",
      review:
        "The AI tools and advertising modules gave me a huge advantage in my career growth.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Social Media Manager",
      company: "Startup Studio",
      review:
        "Viptro’s live projects gave me the confidence to manage campaigns for high‑profile clients. Best decision ever!",
      rating: 5,
    },
    {
      name: "Rajesh Mehta",
      role: "Google Ads Consultant",
      company: "Self‑employed",
      review:
        "The Google Ads module was a game‑changer. I landed my first ₹50K client within weeks of completing the course.",
      rating: 5,
    },
    {
      name: "Kavita Nair",
      role: "Content Marketing Lead",
      company: "Tech Startup",
      review:
        "From zero to industry‑ready – the mentorship and hands‑on assignments made all the difference.",
      rating: 5,
    },
  ];

  const stats = [
    { value: "5,000+", label: "Students Trained" },
    { value: "4.9", label: "Average Rating" },
    { value: "85%", label: "Career Transition" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-20 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glows – amber/yellow accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-100/20 blur-[140px] animate-float" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-yellow-100/20 blur-[140px] animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-50/15 blur-[160px] animate-pulse-slow pointer-events-none" />

      {/* Subtle dotted grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 backdrop-blur-sm px-5 py-2 text-base font-semibold text-amber-700 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-amber-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            SUCCESS STORIES
          </div>

          <h2 className="mt-7 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
            Hear From Our
            <span className="block bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Successful Students
            </span>
          </h2>

          <p className="mx-auto mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 max-w-2xl">
            Thousands of learners have transformed their careers
            through our practical digital marketing programs.
          </p>
        </div>

        {/* Stats Bar – premium summary */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center animate-fade-up animation-delay-200">
              <div className="text-3xl md:text-4xl font-black text-amber-600">{stat.value}</div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={item.name}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Light yellow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-transparent to-yellow-50/0 transition-opacity duration-500 group-hover:from-amber-50/70 group-hover:to-yellow-50/60" />

              <div className="relative z-10 p-7 md:p-8">
                {/* Quote icon with animated on hover */}
                <div className="text-5xl text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:text-amber-500">“</div>

                {/* Review text – larger, more readable */}
                <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600 group-hover:text-slate-800 transition-colors">
                  {item.review}
                </p>

                {/* Rating stars */}
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-slate-500">5.0</span>
                </div>

                {/* Student info */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-amber-600 font-medium">
                    {item.role}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Decorative bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>

        {/* Extra trust badge (optional) */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100">
            <span className="text-yellow-500">⭐</span> 4.9/5 from 1,200+ reviews
            <span className="text-slate-300">•</span>
            <span>🎓 85% placement assistance</span>
          </p>
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
        .animation-delay-200 {
          animation-delay: 0.2s;
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