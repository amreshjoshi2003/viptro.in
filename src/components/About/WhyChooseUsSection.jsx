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
    <section className="relative bg-slate-50 py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <span className="h-2 w-2 rounded-full bg-sky-500"></span>
            WHY CHOOSE VIPTRO
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-[-2px] text-slate-900 md:text-5xl">
            Everything You Need to Build a
            <span className="block text-sky-600">
              Successful Digital Career
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine practical training, industry mentorship and
            real-world experience to help students become job-ready
            digital marketing professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-sky-300
                hover:shadow-xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}