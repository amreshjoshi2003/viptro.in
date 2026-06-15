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
    <section className="bg-white pt-12 pb-20 md:pt-16 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            OUR PROCESS
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Your Journey To Becoming
            <span className="mt-1 block text-blue-600">
              A Digital Marketing Expert
            </span>
          </h2>
        </div>

        {/* Steps Grid with unique card style */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting line (visible only on lg screens) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative group">
              {/* Card with left accent border & subtle gradient */}
              <div className="relative h-full rounded-2xl bg-white border-l-4 border-blue-500 shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden">
                {/* Background number (very faint) */}
                <div className="absolute bottom-2 right-4 text-8xl font-black text-blue-50/50 select-none">
                  {step.number}
                </div>

                {/* Step number as a circled badge */}
                <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg mb-4">
                  {step.number}
                </div>

                <h3 className="relative z-10 text-xl font-bold text-gray-900 mt-2">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-2 text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Optional arrow connector between cards */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-blue-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}