export default function TargetAudienceSection() {
  const audiences = [
    {
      icon: "🎓",
      title: "Students & Fresh Graduates",
      description:
        "Bridge the gap between academic knowledge and industry demands. Gain hands-on experience and a portfolio that stands out.",
    },
    {
      icon: "💼",
      title: "Working Professionals",
      description:
        "Future-proof your career with in-demand digital skills. Upskill without quitting your job through flexible, project-based learning.",
    },
    {
      icon: "💻",
      title: "Freelancers & Solopreneurs",
      description:
        "Master high-ticket services like SEO, ads, and automation to attract premium clients and scale your income.",
    },
    {
      icon: "🔄",
      title: "Career Transitioners",
      description:
        "Switch to digital marketing or tech with a structured roadmap, mentorship, and job-ready credentials.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Business Owners",
      description:
        "Drive measurable growth using performance marketing, AI tools, and data-driven strategies without relying on agencies.",
    },
    {
      icon: "🚀",
      title: "Startup Founders",
      description:
        "Build, launch, and scale your brand with lean marketing tactics and real-world execution frameworks.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Who Is{" "}
            <span className="text-blue-600">Viptro</span> For?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            Tailored programs for ambitious learners at every stage
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-gray-100
                rounded-2xl
                p-7
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl
                hover:shadow-blue-100/50
              "
            >
              <div className="text-6xl mb-5">
                {item.icon}
              </div>
              <h3 className="text-gray-800 text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust / CTA line */}
        <div className="text-center mt-14 pt-4 border-t border-gray-100">
          <p className="text-gray-400 text-sm">
            Join 5,000+ learners who transformed their careers with Viptro
          </p>
        </div>
      </div>
    </section>
  );
}