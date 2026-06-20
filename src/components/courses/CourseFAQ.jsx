"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CourseFAQ() {
const [open, setOpen] = useState(0);

const faqs = [
{
question: "Who can join this course?",
answer:
"Students, job seekers, freelancers, business owners and working professionals can join this course.",
},
{
question: "Do I need any prior experience?",
answer:
"No. This course starts from beginner level and gradually moves to advanced concepts.",
},
{
question: "Will I receive a certificate?",
answer:
"Yes, you will receive a professional certificate after successfully completing the course and projects.",
},
{
question: "Are live projects included?",
answer:
"Yes. Students work on real client projects, marketing campaigns and practical assignments.",
},
{
question: "Do you provide placement assistance?",
answer:
"Yes. We provide resume building, interview preparation, LinkedIn optimization and job assistance.",
},
{
question: "Can I start freelancing after this course?",
answer:
"Absolutely. We teach client acquisition, portfolio creation and freelancing strategies.",
},
{
question: "What tools will I learn?",
answer:
"Meta Ads, Google Ads, GA4, Search Console, WordPress, Canva, ChatGPT and other marketing tools.",
},
{
question: "How long is the course?",
answer:
"Depending on the program, courses typically range from 2 to 6 months.",
},
];

return ( <section className="py-24 bg-gradient-to-b from-white to-blue-50"> <div className="max-w-5xl mx-auto px-6">

```
    <div className="text-center mb-16">
      <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
        FAQ
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900">
        Frequently Asked Questions
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Everything you need to know about our courses,
        certifications, projects and career opportunities.
      </p>
    </div>

    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              {faq.question}
            </h3>

            <ChevronDown
              size={24}
              className={`transition-transform duration-300 ${
                open === index ? "rotate-180 text-blue-600" : ""
              }`}
            />
          </button>

          {open === index && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">
        Still Have Questions?
      </h3>

      <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
        Talk to our experts and get personalized guidance about
        courses, careers and learning paths.
      </p>

      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-gray-100 transition"
      >
        Contact Our Team
      </a>
    </div>
  </div>
</section>


);
}
