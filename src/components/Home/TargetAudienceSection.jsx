export default function TargetAudienceSection() {
  const audiences = [
    {
      icon: "🎓",
      title: "Students",
      description:
        "Build practical skills, gain industry knowledge, and kickstart your career with confidence.",
    },
    {
      icon: "💼",
      title: "Working Professionals",
      description:
        "Upgrade your skills, stay competitive, and unlock better career opportunities.",
    },
    {
      icon: "💻",
      title: "Freelancers",
      description:
        "Learn high-income skills and attract more clients to grow your freelance business.",
    },
    {
      icon: "🔄",
      title: "Career Switchers",
      description:
        "Transition into digital marketing and technology with a structured learning path.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Business Owners",
      description:
        "Scale your business using proven marketing strategies and modern digital tools.",
    },
    {
      icon: "🚀",
      title: "Entrepreneurs",
      description:
        "Build, grow, and market your brand with confidence using real-world skills.",
    },
  ];

  return (
    <section className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Who Is
            <span className="text-blue-500"> Viptro </span>
            For?
          </h2>

          <div className="w-40 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#0B1120]
                border
                border-slate-800
                rounded-3xl
                p-10
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
              "
            >
              <div className="text-7xl mb-8">
                {item.icon}
              </div>

              <h3 className="text-white text-3xl font-bold mb-5">
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