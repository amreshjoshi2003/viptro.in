import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Download,
} from "lucide-react";

export default function CourseCertificate() {
  const features = [
    {
      icon: <Award size={28} />,
      title: "Industry Recognized Certificate",
      description:
        "Receive a professional certificate that validates your digital marketing expertise.",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Verified Completion",
      description:
        "Successfully complete projects, assignments and assessments.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Career Credibility",
      description:
        "Boost your resume, LinkedIn profile and freelance portfolio.",
    },
    {
      icon: <Download size={28} />,
      title: "Digital Certificate",
      description:
        "Download and share your certificate with employers and clients.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
            Certification Program
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 text-gray-900">
            Earn Your Professional
            <span className="block text-blue-600">
              Digital Marketing Certificate
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Showcase your skills with an industry-recognized certification
            and stand out in the job market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Certificate Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="border-4 border-blue-600 rounded-3xl p-10 text-center">
                <Award
                  size={70}
                  className="mx-auto text-blue-600 mb-6"
                />

                <h3 className="text-3xl font-bold mb-3">
                  Certificate of Completion
                </h3>

                <p className="text-gray-500 mb-6">
                  Successfully Completed
                </p>

                <h4 className="text-4xl font-bold text-blue-600 mb-6">
                  Student Name
                </h4>

                <p className="text-gray-600 mb-6">
                  Advanced Digital Marketing &
                  Performance Marketing Program
                </p>

                <div className="space-y-2 text-gray-700">
                  <p>✓ Meta Ads</p>
                  <p>✓ Google Ads</p>
                  <p>✓ SEO</p>
                  <p>✓ WordPress</p>
                  <p>✓ AI Marketing Tools</p>
                  <p>✓ Live Projects</p>
                </div>

                <div className="flex justify-between mt-10 text-sm text-gray-500">
                  <div>
                    <p className="font-semibold">Authorized By</p>
                    <p>Your Institute</p>
                  </div>

                  <div>
                    <p className="font-semibold">Certificate ID</p>
                    <p>DM-2026-001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg">
              Verified
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Why This Certificate Matters
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      {feature.title}
                    </h4>

                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-blue-600">
              1000+
            </h3>
            <p className="mt-2 text-gray-600">
              Certified Students
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-blue-600">
              100%
            </h3>
            <p className="mt-2 text-gray-600">
              Project Based Learning
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
            <h3 className="text-5xl font-bold text-blue-600">
              95%
            </h3>
            <p className="mt-2 text-gray-600">
              Placement Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}