import {
  Briefcase,
  Award,
  Users,
  Laptop,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

export default function CourseBenefits() {
  const benefits = [
    {
      icon: Laptop,
      title: "Practical Training",
      description: "Learn through live projects and assignments.",
    },
    {
      icon: Briefcase,
      title: "Live Projects",
      description: "Work on real client campaigns.",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Industry-recognized certification.",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from experienced professionals.",
    },
    {
      icon: GraduationCap,
      title: "Internship Support",
      description: "Gain practical industry exposure.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Jobs, freelancing and business opportunities.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Benefits of Learning With Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="border rounded-2xl p-6"
              >
                <Icon className="text-blue-600 mb-4" size={28} />
                <h3 className="font-bold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}