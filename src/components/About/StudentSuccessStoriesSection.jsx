export default function StudentSuccessStoriesSection() {
  const testimonials = [
    {
      name: "Rohit Kumar",
      role: "SEO Executive",
      company: "Worked at a Leading Agency",
      review:
        "The practical projects and mentorship helped me land my first digital marketing job within 3 months.",
    },
    {
      name: "Anjali Sharma",
      role: "Performance Marketer",
      company: "Freelancer",
      review:
        "The training was completely practical and focused on real-world implementation. Highly recommended.",
    },
    {
      name: "Vikas Singh",
      role: "Digital Marketing Specialist",
      company: "E-commerce Brand",
      review:
        "The AI tools and advertising modules gave me a huge advantage in my career growth.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            SUCCESS STORIES
          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Hear From Our
            <span className="block text-sky-600">
              Successful Students
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Thousands of learners have transformed their careers
            through our practical digital marketing programs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl text-sky-500">"</div>

              <p className="mt-4 leading-8 text-slate-600">
                {item.review}
              </p>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-1 text-sky-600">
                  {item.role}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}