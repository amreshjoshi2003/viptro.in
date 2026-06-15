export default function MeetOurExpertsSection() {
  const experts = [
    {
      name: "Rahul Sharma",
      role: "SEO & Growth Expert",
      experience: "8+ Years Experience",
    },
    {
      name: "Priya Verma",
      role: "Performance Marketing Specialist",
      experience: "6+ Years Experience",
    },
    {
      name: "Amit Singh",
      role: "Meta Ads Consultant",
      experience: "7+ Years Experience",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <span className="h-2 w-2 rounded-full bg-sky-500"></span>
            OUR EXPERTS
          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Learn From Industry
            <span className="block text-sky-600">
              Professionals
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our mentors bring years of practical experience,
            industry knowledge and proven strategies to help
            students build successful careers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-3xl font-bold text-white">
                {expert.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {expert.name}
              </h3>

              <p className="mt-2 font-medium text-sky-600">
                {expert.role}
              </p>

              <p className="mt-3 text-slate-500">
                {expert.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}