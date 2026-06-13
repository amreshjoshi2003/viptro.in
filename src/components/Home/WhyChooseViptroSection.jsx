export default function WhyChooseViptroSection() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Mentors",
      description:
        "Learn from industry professionals with 10+ years of real-world experience.",
    },
    {
      icon: "⚡",
      title: "Live Projects",
      description:
        "Build a portfolio with hands-on projects that simulate real client work.",
    },
    {
      icon: "💬",
      title: "24/7 Doubt Support",
      description:
        "Get instant help via dedicated Slack/Discord channels – no waiting.",
    },
    {
      icon: "🤝",
      title: "Peer Community",
      description:
        "Join a growing network of learners to collaborate, share, and grow together.",
    },
    {
      icon: "📊",
      title: "Career Tracking",
      description:
        "Monitor your progress with personalized dashboards and weekly feedback.",
    },
    {
      icon: "🎯",
      title: "1:1 Mentorship",
      description:
        "Monthly one-on-one sessions to align learning with your career goals.",
    },
    {
      icon: "🤖",
      title: "AI Tools Mastery",
      description:
        "Hands-on training with ChatGPT, Midjourney, and automation tools.",
    },
    {
      icon: "🏆",
      title: "Verified Certificate",
      description:
        "Earn a blockchain-verified certificate that recruiters trust.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Why Viptro?
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 text-lg">
          Everything you need to launch or accelerate your digital career
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-100
                rounded-2xl
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl
                hover:shadow-blue-100/50
              "
            >
              {/* Icon */}
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-800 text-xl font-bold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-center mt-12 text-sm text-gray-400">
          ⭐ 4.9/5 · Trusted by 5,000+ graduates · 85% placement assistance
        </div>
      </div>
    </section>
  );
}