export default function WhyChooseViptroSection() {
  const features = [
    {
      icon: "📡",
      title: "Live Classes",
      description:
        "Learn directly from experts in real-time interactive sessions.",
    },
    {
      icon: "💡",
      title: "Practical Learning",
      description:
        "Apply what you learn instantly with hands-on training.",
    },
    {
      icon: "💬",
      title: "Live Q&A",
      description:
        "Get your doubts cleared instantly by industry mentors.",
    },
    {
      icon: "🤝",
      title: "Community Access",
      description:
        "Be part of an active learner group to grow and collaborate.",
    },
    {
      icon: "📈",
      title: "Result Driven",
      description:
        "Focused training designed to deliver measurable success.",
    },
    {
      icon: "🎯",
      title: "Mentor Support",
      description:
        "Personalized guidance at every step of your journey.",
    },
    {
      icon: "🤖",
      title: "AI Integrated",
      description:
        "Master powerful AI tools and stay ahead of the competition.",
    },
    {
      icon: "🏆",
      title: "Certification",
      description:
        "Receive an industry-recognized certificate upon completion.",
    },
  ];

  return (
    <section className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl md:text-7xl font-bold text-white mb-16">
          Why Viptro?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#0B1120]
                border
                border-slate-800
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)]
              "
            >
              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-3xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}