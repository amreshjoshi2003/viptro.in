import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-20 lg:pb-28">
      {/* Soft background glow – refined for depth */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-50/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT – more refined typography */}
          <div>
            {/* Badge – cleaner */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 border border-blue-100 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              ABOUT VIPTRO
            </div>

            {/* Heading – better leading & gradient */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Building the Next
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Generation of Digital
              </span>
              Marketing Experts
            </h1>

            {/* Description – improved readability */}
            <p className="mt-6 text-base text-gray-500 leading-relaxed sm:text-lg max-w-xl">
              At Viptro, we believe digital marketing education should be practical,
              industry‑focused, and career‑driven. Our mission is to help students and
              professionals master in‑demand skills through live projects, mentorship,
              and hands‑on learning experiences.
            </p>

            {/* Buttons – refined hover states */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Explore Courses
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Contact Us
              </button>
            </div>

            {/* Stats – cleaner layout */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="border-r border-gray-100 last:border-0">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">5K+</h3>
                <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">Students</p>
              </div>
              <div className="border-r border-gray-100 last:border-0">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">50+</h3>
                <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">Projects</p>
              </div>
              <div className="border-r border-gray-100 last:border-0">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">20+</h3>
                <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">Mentors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">95%</h3>
                <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">Success</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE – enhanced with professional floating cards */}
          <div className="relative flex justify-center">
            {/* Ambient glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100/40 to-indigo-100/40 blur-2xl" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/images/home/hero-dashboard.png"
                alt="Viptro team collaborating"
                width={700}
                height={600}
                className="rounded-xl object-cover"
                priority
              />
            </div>

            {/* Floating card 1 – top left */}
            <div className="absolute -left-3 top-8 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-md transition-all duration-200 hover:scale-105">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Students Trained</p>
              <h3 className="text-2xl font-bold text-blue-600">5,000+</h3>
            </div>

            {/* Floating card 2 – bottom right */}
            <div className="absolute -right-3 bottom-12 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-md transition-all duration-200 hover:scale-105">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Placement Rate</p>
              <h3 className="text-2xl font-bold text-indigo-600">95%</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}