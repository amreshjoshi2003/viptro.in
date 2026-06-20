export default function CourseCurriculum() {
const modules = [
{
number: "01",
title: "Digital Marketing Fundamentals",
description:
"Introduction to Digital Marketing, Marketing Funnels, Customer Journey and Growth Strategies.",
},
{
number: "02",
title: "Meta Ads Mastery",
description:
"Facebook Ads, Instagram Ads, Pixel Setup, Audience Research and Retargeting.",
},
{
number: "03",
title: "Google Ads Mastery",
description:
"Search Ads, Display Ads, YouTube Ads and Conversion Tracking.",
},
{
number: "04",
title: "SEO Mastery",
description:
"On-Page SEO, Technical SEO, Local SEO and Link Building.",
},
{
number: "05",
title: "Content Marketing",
description:
"Content Creation, Branding, Social Media Strategy and Copywriting.",
},
{
number: "06",
title: "Performance Marketing",
description:
"Campaign Optimization, Analytics and ROAS Scaling.",
},
{
number: "07",
title: "AI Tools & Automation",
description:
"ChatGPT, AI Content Creation, Automation Tools and Productivity Systems.",
},
{
number: "08",
title: "Live Projects & Certification",
description:
"Portfolio Building, Client Projects, Internship Support and Certification.",
},
];

return ( <section className="py-24 bg-gradient-to-b from-white to-blue-50"> <div className="max-w-7xl mx-auto px-6">

```
    <div className="text-center mb-20">
      <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
        Course Curriculum
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900">
        What You'll Learn
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        Step-by-step roadmap designed to transform beginners into
        job-ready digital marketing professionals.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      {modules.map((module) => (
        <div
          key={module.number}
          className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex gap-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
              {module.number}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {module.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {module.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-4 gap-6 mt-20">
      <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
        <h3 className="text-5xl font-bold text-blue-600">8+</h3>
        <p className="mt-2 text-gray-600">Learning Modules</p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
        <h3 className="text-5xl font-bold text-blue-600">50+</h3>
        <p className="mt-2 text-gray-600">Assignments</p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
        <h3 className="text-5xl font-bold text-blue-600">10+</h3>
        <p className="mt-2 text-gray-600">Live Projects</p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
        <h3 className="text-5xl font-bold text-blue-600">100%</h3>
        <p className="mt-2 text-gray-600">Practical Learning</p>
      </div>
    </div>
  </div>
</section>


);
}
