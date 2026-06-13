"use client";

import { useState } from "react";

export default function CourseModulesSection() {
  const [openModule, setOpenModule] = useState(0);

  const modules = [
    {
      title: "Digital Marketing Foundations",
      duration: "4 Hours",
      lessons: 5,
      topics: [
        "What is Digital Marketing? (SEO, Ads, Social Media)",
        "Understanding Customer Journey & Funnel",
        "Market Research & Competitor Analysis",
        "Setting SMART Goals & KPIs",
        "Introduction to Google Analytics & Search Console",
      ],
    },
    {
      title: "Search Engine Optimization (SEO)",
      duration: "6 Hours",
      lessons: 6,
      topics: [
        "How Search Engines Work (Crawling, Indexing, Ranking)",
        "Keyword Research & Strategy (Ahrefs, Semrush)",
        "On-Page SEO: Meta tags, Headings, Content Optimization",
        "Technical SEO: Site speed, Mobile-friendliness, Schema",
        "Off-Page SEO: Link Building, Guest Posting, Authority",
        "SEO Tools & Reporting",
      ],
    },
    {
      title: "Google Ads (PPC) Mastery",
      duration: "5 Hours",
      lessons: 6,
      topics: [
        "Google Ads Account Setup & Bidding Strategies",
        "Keyword Match Types & Negative Keywords",
        "Search Campaigns: Ad Copy & Extensions",
        "Display & Remarketing Campaigns",
        "Shopping & Performance Max Campaigns",
        "Tracking Conversions & ROAS Optimization",
      ],
    },
    {
      title: "Social Media Marketing & Ads",
      duration: "5 Hours",
      lessons: 5,
      topics: [
        "Facebook & Instagram Organic Strategy",
        "Meta Ads Manager: Targeting, Creatives, Budget",
        "LinkedIn & Twitter Marketing for B2B",
        "Content Calendar & Engagement Tactics",
        "Analytics & A/B Testing for Social Media",
      ],
    },
    {
      title: "AI Tools for Marketing",
      duration: "3 Hours",
      lessons: 5,
      topics: [
        "Using ChatGPT for Content & Copywriting",
        "AI Image Generators (Midjourney, DALL‑E)",
        "Automation with Zapier & Make",
        "AI for SEO: Surfer SEO, Frase.io",
        "Predictive Analytics & Personalization",
      ],
    },
    {
      title: "Freelancing & Career Growth",
      duration: "3 Hours",
      lessons: 5,
      topics: [
        "Building a Portfolio that Gets Hired",
        "Finding Clients: Upwork, Fiverr, LinkedIn",
        "Pricing, Negotiation & Contracts",
        "Interview Preparation & Resume Tips",
        "Personal Branding for Digital Marketers",
      ],
    },
  ];

  // Calculate total duration
  const totalDuration = modules.reduce((sum, m) => sum + parseInt(m.duration), 0);
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons, 0);

  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Premium styling */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-blue-700 text-sm font-semibold tracking-wide">CURRICULUM</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Course <span className="text-blue-600">Modules</span>
          </h2>
          <div className="relative w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            A hands‑on curriculum designed to make you job‑ready in 4 months
          </p>
        </div>

        {/* Stats Summary Bar - Premium touch */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 flex flex-wrap justify-center items-center gap-6 md:gap-12 border border-blue-100/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalDuration}+ Hours</p>
                <p className="text-xs text-gray-500">Video & Hands‑on</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalLessons}+ Lessons</p>
                <p className="text-xs text-gray-500">Structured modules</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">6 Modules</p>
                <p className="text-xs text-gray-500">Progressive learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Accordion - Ultra-premium cards */}
        <div className="max-w-4xl mx-auto space-y-3">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-300 rounded-xl ${
                openModule === idx ? "shadow-xl shadow-blue-100/50 border-blue-200" : "shadow-sm hover:shadow-md"
              } border border-gray-200 bg-white`}
            >
              <button
                onClick={() => setOpenModule(openModule === idx ? -1 : idx)}
                className="w-full text-left p-5 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
                aria-expanded={openModule === idx}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {module.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 ml-11">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {module.duration}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {module.lessons} lessons
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-11 sm:ml-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openModule === idx ? "bg-blue-100" : "bg-gray-100 group-hover:bg-gray-200"
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openModule === idx ? "rotate-180 text-blue-600" : "text-gray-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {openModule === idx && (
                <div className="border-t border-gray-100 bg-gray-50/30 rounded-b-xl overflow-hidden">
                  <div className="p-5 md:p-6">
                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2.5">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                          <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                          <span className="leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section - Premium call-to-action */}
        <div className="max-w-4xl mx-auto mt-14 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6" />
              </svg>
              Download Full Syllabus (PDF)
            </button>
            <p className="text-xs text-gray-400 mt-3">
              Includes detailed module breakdown, project guides, and resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}