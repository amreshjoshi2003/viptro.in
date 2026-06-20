import {
  Megaphone,
  Search,
  Globe,
  BarChart3,
  ShoppingCart,
  Bot,
  CheckCircle,
} from "lucide-react";

export default function CourseProjects() {
  const projects = [
    {
      icon: <Megaphone size={32} />,
      title: "Meta Ads Campaign",
      description:
        "Create and optimize Facebook & Instagram advertising campaigns for lead generation and sales.",
    },
    {
      icon: <Search size={32} />,
      title: "SEO Ranking Project",
      description:
        "Rank websites using On-Page SEO, Technical SEO, Local SEO and Link Building.",
    },
    {
      icon: <Globe size={32} />,
      title: "WordPress Website",
      description:
        "Design and launch a professional business website and landing pages.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Google Ads Campaign",
      description:
        "Run Search, Display and YouTube Ads with proper conversion tracking.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "E-Commerce Growth Project",
      description:
        "Build and scale online store marketing campaigns to increase sales.",
    },
    {
      icon: <Bot size={32} />,
      title: "AI Marketing Automation",
      description:
        "Use ChatGPT and AI tools to automate content creation and workflows.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            <CheckCircle size={18} />
            Practical Learning Experience
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 text-gray-900">
            Real Projects You'll
            <span className="block text-blue-600">
              Build & Execute
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Learn by doing. Every student works on practical projects,
            real campaigns and portfolio-building assignments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 rounded-[32px] p-12 md:p-16 text-center text-white">
          <h3 className="text-4xl md:text-5xl font-bold mb-5">
            Build A Portfolio That Gets You Hired
          </h3>

          <p className="max-w-3xl mx-auto text-blue-100 text-lg">
            By the end of the course you'll have real projects,
            campaign reports, websites and case studies ready to
            showcase to employers and clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="text-5xl font-bold">10+</h4>
              <p className="mt-2 text-blue-100">Live Projects</p>
            </div>

            <div>
              <h4 className="text-5xl font-bold">50+</h4>
              <p className="mt-2 text-blue-100">Assignments</p>
            </div>

            <div>
              <h4 className="text-5xl font-bold">100%</h4>
              <p className="mt-2 text-blue-100">Practical Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}