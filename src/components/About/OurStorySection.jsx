"use client";

import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          <div className="relative group">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100/40 to-indigo-100/40 blur-2xl transition-opacity group-hover:opacity-70" />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <Image
                src="/images/home/hero-dashboard.png"
                alt="Viptro team at work"
                width={700}
                height={600}
                className="rounded-xl object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x600/f3f4f6/9ca3af?text=Viptro+Story";
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              OUR STORY
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Empowering Careers Through
              <span className="mt-1 block text-blue-600">
                Practical Digital Education
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-base text-gray-600 leading-relaxed sm:text-lg">
              <p>
                Viptro was founded with a simple vision — to bridge the gap
                between traditional education and real industry requirements.
                We believe that learning should go beyond theory and focus on
                practical skills that create real career opportunities.
              </p>
              <p>
                Through live mentorship, real‑world projects and industry‑focused
                training, we help students and professionals gain the confidence,
                skills and experience needed to succeed in today's digital world.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-blue-200">
                <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  To help learners build industry‑ready skills through practical
                  training, mentorship and real‑world experience.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-blue-200">
                <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  To become India's most trusted platform for digital marketing
                  and AI‑powered professional education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}