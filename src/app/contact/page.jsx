"use client";

import { useState } from "react";

export default function ContactPage() {
  // ---------- FORM STATE ----------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    course: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ---------- VALIDATION ----------
  const validate = (field) => {
    const value = formData[field];
    switch (field) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "phone":
        return !/^[0-9]{10,15}$/.test(value.replace(/[\s+()-]/g, ""))
          ? "Enter a valid phone number (10-15 digits)"
          : "";
      case "course":
        return value === "" ? "Please select a course" : "";
      default:
        return "";
    }
  };

  const getError = (field) => (touched[field] ? validate(field) : "");

  const isFormValid = () => {
    return (
      !validate("name") &&
      !validate("email") &&
      !validate("phone") &&
      !validate("course")
    );
  };

  // ---------- HANDLERS ----------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allTouched = Object.keys(touched).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (!isFormValid()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    const whatsappNumber = "917028180426";
    const message = `
🎓 New Course Enquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message || "N/A"}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    setSuccess(true);
    setLoading(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
    setTouched({
      name: false,
      email: false,
      phone: false,
      course: false,
      message: false,
    });

    setTimeout(() => setSuccess(false), 5000);
  };

  // ---------- FAQ STATE ----------
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "What courses do you offer?",
      a: "We offer Digital Marketing, SEO, Google Ads, Meta Ads, WordPress, Performance Marketing, AI Automation, and more – all industry‑ready.",
    },
    {
      q: "Are the courses beginner‑friendly?",
      a: "Absolutely! Our curriculum is designed for all levels, from complete beginners to experienced professionals.",
    },
    {
      q: "Do you provide placement assistance?",
      a: "Yes, we offer 1‑on‑1 mentorship, resume building, interview prep, and direct referrals to our hiring partners.",
    },
    {
      q: "What is the duration of the courses?",
      a: "Most courses run for 3‑6 months, with flexible weekend and evening batches available.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you'll receive a industry‑recognised certificate upon successful completion of the course.",
    },
    {
      q: "Can I attend a free demo class?",
      a: "Yes, we offer a free demo session for every course – just drop us a message and we'll schedule one for you.",
    },
  ];

  // ---------- RENDER ----------
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans">
      {/* Decorative floating blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-300 opacity-20 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl animate-pulse [animation-delay:2s]" />
      <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse [animation-delay:4s]" />
      <div className="absolute top-2/3 left-10 h-64 w-64 rounded-full bg-yellow-300 opacity-10 blur-3xl animate-pulse [animation-delay:1s]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* ----- HERO SECTION ----- */}
        <section className="animate-fadeInUp text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Become Job Ready
              </span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl">
                with Industry-Focused Digital Skills
              </span>
            </h1>
            <div className="absolute -top-12 -right-16 hidden text-7xl opacity-30 lg:block animate-float">
              🚀
            </div>
            <div className="absolute -bottom-12 -left-16 hidden text-6xl opacity-30 lg:block animate-float [animation-delay:1s]">
              💡
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 sm:text-2xl">
            Master Digital Marketing, SEO, Google Ads, Meta Ads, WordPress, and AI
            Automation – all through real‑world projects and expert mentorship.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href="#contact-form"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 text-xl font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-2xl"
            >
              Get Started
            </a>
            <a
              href="#courses"
              className="rounded-full border-2 border-gray-300 bg-white/50 px-10 py-4 text-xl font-semibold text-gray-700 backdrop-blur-sm transition hover:scale-105 hover:shadow-lg"
            >
              Explore Courses
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium">
            {[
              { icon: "🚀", label: "Practical Skills", desc: "Hands-on projects" },
              { icon: "💬", label: "1‑on‑1 Mentorship", desc: "Personalised guidance" },
              { icon: "🎯", label: "Career Ready", desc: "Job-focused curriculum" },
              { icon: "📁", label: "Live Projects", desc: "Real-world experience" },
              { icon: "🏆", label: "Certified Courses", desc: "Industry-recognised" },
              { icon: "🤝", label: "Placement Support", desc: "Hiring connections" },
            ].map((badge, i) => (
              <div
                key={i}
                className="group flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 shadow-md backdrop-blur-sm transition hover:scale-105 hover:shadow-lg ring-1 ring-white/50"
              >
                <span className="text-xl">{badge.icon}</span>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">{badge.label}</p>
                  <p className="text-xs text-gray-500">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ----- STATISTICS ----- */}
        <section className="animate-fadeInUp mt-24 [animation-delay:100ms]">
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white/60 p-10 backdrop-blur-md shadow-xl ring-1 ring-white/50 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { number: "500+", label: "Students Trained", icon: "👨‍🎓" },
              { number: "50+", label: "Live Projects", icon: "📊" },
              { number: "95%", label: "Success Rate", icon: "📈" },
              { number: "24/7", label: "Support", icon: "🕒" },
              { number: "100+", label: "Partner Companies", icon: "🏢" },
              { number: "4.9⭐", label: "Avg. Rating", icon: "⭐" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl">{stat.icon}</div>
                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ----- WHY CHOOSE US ----- */}
        <section className="animate-fadeInUp mt-24 [animation-delay:200ms]">
          <h2 className="text-center text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📚",
                title: "Practical Learning",
                desc: "Learn by building real projects that you can showcase in your portfolio.",
              },
              {
                icon: "🎯",
                title: "Career Focused",
                desc: "Our curriculum is co‑created with industry experts to meet current job demands.",
              },
              {
                icon: "🧑‍🏫",
                title: "Expert Mentorship",
                desc: "Get personalised feedback and guidance from seasoned professionals.",
              },
              {
                icon: "🌐",
                title: "Global Community",
                desc: "Join a network of learners and alumni from all over the world.",
              },
              {
                icon: "⏳",
                title: "Flexible Schedule",
                desc: "Learn at your own pace with recorded sessions and weekend batches.",
              },
              {
                icon: "🎓",
                title: "Lifetime Access",
                desc: "Get unlimited access to course materials and future updates.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/70 p-8 backdrop-blur-sm shadow-md transition hover:-translate-y-2 hover:shadow-2xl ring-1 ring-white/50"
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ----- COURSES ----- */}
        <section id="courses" className="animate-fadeInUp mt-24 [animation-delay:300ms]">
          <h2 className="text-center text-4xl font-bold text-gray-800">
            Our Courses
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { name: "Digital Marketing", icon: "📣", desc: "Master online marketing strategies." },
              { name: "SEO", icon: "🔍", desc: "Drive organic traffic with advanced SEO." },
              { name: "Google Ads", icon: "📊", desc: "Run high‑performing PPC campaigns." },
              { name: "Meta Ads", icon: "📱", desc: "Master Facebook & Instagram ads." },
              { name: "WordPress", icon: "🖥️", desc: "Build stunning websites with WordPress." },
              { name: "Performance Marketing", icon: "📈", desc: "Data‑driven marketing strategies." },
              { name: "AI Automation", icon: "🤖", desc: "Automate tasks using AI tools." },
              { name: "Email Marketing", icon: "✉️", desc: "Create high‑converting email funnels." },
            ].map((course, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/80 p-6 text-center backdrop-blur-sm shadow transition hover:-translate-y-2 hover:shadow-2xl ring-1 ring-white/50"
              >
                <div className="text-5xl">{course.icon}</div>
                <h3 className="mt-3 text-xl font-semibold text-gray-800">
                  {course.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{course.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ----- TESTIMONIALS ----- */}
        <section className="animate-fadeInUp mt-24 [animation-delay:400ms]">
          <h2 className="text-center text-4xl font-bold text-gray-800">
            Student Stories
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                role: "Digital Marketing Intern",
                text: "The practical approach and mentorship helped me land my first marketing job within 3 months.",
                avatar: "👩‍💼",
              },
              {
                name: "Rahul Verma",
                role: "SEO Specialist",
                text: "I learned everything from scratch and now I'm handling SEO for multiple clients. Highly recommended!",
                avatar: "👨‍💻",
              },
              {
                name: "Ananya Patel",
                role: "Performance Marketer",
                text: "The live projects and feedback from experts gave me the confidence to excel in my career.",
                avatar: "👩‍🎓",
              },
              {
                name: "Suresh Kumar",
                role: "Google Ads Expert",
                text: "I went from zero to running ₹5L+ ad budgets – this course changed my life.",
                avatar: "🧑‍💼",
              },
              {
                name: "Meera Nair",
                role: "WordPress Developer",
                text: "I build websites for clients now. The WordPress course was incredibly practical and easy to follow.",
                avatar: "👩‍💻",
              },
              {
                name: "Amit Singh",
                role: "AI Automation Specialist",
                text: "I automated my entire workflow using AI tools. This is the future of work and I'm ready.",
                avatar: "🧑‍🔬",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/80 p-6 backdrop-blur-sm shadow transition hover:scale-105 hover:shadow-2xl ring-1 ring-white/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{t.avatar}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">“{t.text}”</p>
              </div>
            ))}
          </div>
        </section>

        {/* ----- FAQ ACCORDION ----- */}
        <section className="animate-fadeInUp mt-24 [animation-delay:500ms]">
          <h2 className="text-center text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white/70 backdrop-blur-sm shadow transition hover:shadow-lg ring-1 ring-white/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-5 text-left text-lg font-medium text-gray-800 hover:text-blue-600"
                >
                  <span>{faq.q}</span>
                  <span className="text-3xl">
                    {activeFAQ === index ? "−" : "+"}
                  </span>
                </button>
                {activeFAQ === index && (
                  <div className="px-8 pb-5 text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ----- NEWSLETTER ----- */}
        <section className="animate-fadeInUp mt-24 [animation-delay:550ms]">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 text-center text-white shadow-2xl sm:p-12">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">Stay Updated</h2>
              <p className="mt-2 text-lg opacity-90">
                Subscribe to our newsletter for free tips, course updates, and more.
              </p>
              <div className="mx-auto mt-6 flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border-2 border-white/30 bg-white/20 px-6 py-3 text-white placeholder-white/70 outline-none backdrop-blur-sm transition focus:border-white"
                />
                <button className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105 hover:shadow-xl">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-sm opacity-80">No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </section>

        {/* ----- CONTACT FORM (disclaimer removed) ----- */}
        <section
          id="contact-form"
          className="animate-fadeInUp mt-24 [animation-delay:600ms]"
        >
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
              <p className="mt-3 text-xl text-gray-600">
                Reach out to us – we're here to help you kickstart your career.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  { icon: "📞", label: "Phone", value: "+91 70281 80426" },
                  { icon: "✉️", label: "Email", value: "info@digitalacademy.in" },
                  { icon: "📍", label: "Location", value: "Mumbai, India" },
                  { icon: "🕒", label: "Working Hours", value: "Mon-Sat, 9am - 8pm" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 rounded-3xl bg-white/60 p-6 backdrop-blur-sm shadow transition hover:scale-105 hover:shadow-xl ring-1 ring-white/50"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-lg text-gray-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/50">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-200 text-gray-500">
                  📍 Map Location
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white/80 p-8 backdrop-blur-md shadow-2xl ring-1 ring-white/50 sm:p-10">
                <h3 className="text-3xl font-semibold text-gray-800">
                  Send Your Enquiry
                </h3>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-1 w-full rounded-xl border p-4 text-lg transition focus:outline-none focus:ring-2 ${
                          getError("name")
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                        placeholder="John Doe"
                      />
                      {getError("name") && (
                        <p className="mt-1 text-sm text-red-600">
                          {getError("name")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-1 w-full rounded-xl border p-4 text-lg transition focus:outline-none focus:ring-2 ${
                          getError("email")
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                        placeholder="john@example.com"
                      />
                      {getError("email") && (
                        <p className="mt-1 text-sm text-red-600">
                          {getError("email")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-1 w-full rounded-xl border p-4 text-lg transition focus:outline-none focus:ring-2 ${
                          getError("phone")
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {getError("phone") && (
                        <p className="mt-1 text-sm text-red-600">
                          {getError("phone")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Course *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-1 w-full rounded-xl border p-4 text-lg transition focus:outline-none focus:ring-2 ${
                          getError("course")
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                      >
                        <option value="">Select a course</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Performance Marketing">
                          Performance Marketing
                        </option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Meta Ads">Meta Ads</option>
                        <option value="WordPress">WordPress</option>
                        <option value="SEO">SEO</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Email Marketing">Email Marketing</option>
                      </select>
                      {getError("course") && (
                        <p className="mt-1 text-sm text-red-600">
                          {getError("course")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="mt-1 w-full rounded-xl border border-gray-300 p-4 text-lg transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Share your goals, experience, or any questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-xl font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      loading
                        ? "cursor-not-allowed bg-green-400"
                        : "bg-gradient-to-r from-green-600 to-green-700 hover:scale-[1.02] hover:shadow-2xl focus:ring-green-500"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-6 w-6 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>📲</span> Send on WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ----- FOOTER ----- */}
        <footer className="animate-fadeInUp mt-24 border-t border-white/30 pt-12 [animation-delay:700ms]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-2xl font-bold text-gray-800">Digital Academy</h4>
              <p className="mt-2 text-gray-600">
                Empowering careers through practical digital education.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-800">Quick Links</h5>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="#courses" className="hover:text-blue-600 transition">Courses</a></li>
                <li><a href="#contact-form" className="hover:text-blue-600 transition">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-800">Follow Us</h5>
              <div className="mt-2 flex gap-4 text-3xl">
                <span className="cursor-pointer hover:scale-110 transition">📘</span>
                <span className="cursor-pointer hover:scale-110 transition">🐦</span>
                <span className="cursor-pointer hover:scale-110 transition">📸</span>
                <span className="cursor-pointer hover:scale-110 transition">💼</span>
                <span className="cursor-pointer hover:scale-110 transition">📧</span>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-800">Contact</h5>
              <p className="mt-2 text-gray-600">+91 70281 80426</p>
              <p className="text-gray-600">info@digitalacademy.in</p>
              <p className="text-gray-600">Mumbai, India</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Digital Academy. All rights reserved.
          </div>
        </footer>
      </div>

      {/* ----- SUCCESS TOAST ----- */}
      {success && (
        <div className="animate-slideInUp fixed bottom-6 right-6 z-50 rounded-2xl bg-green-600 px-8 py-5 text-white shadow-2xl ring-1 ring-white/20">
          <div className="flex items-center gap-4">
            <span className="text-3xl">✅</span>
            <div>
              <p className="text-xl font-semibold">Enquiry sent!</p>
              <p className="opacity-90">WhatsApp will open shortly.</p>
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="ml-4 text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        /* Delay utilities */
        [style*="animation-delay:100ms"] { animation-delay: 100ms; }
        [style*="animation-delay:200ms"] { animation-delay: 200ms; }
        [style*="animation-delay:300ms"] { animation-delay: 300ms; }
        [style*="animation-delay:400ms"] { animation-delay: 400ms; }
        [style*="animation-delay:500ms"] { animation-delay: 500ms; }
        [style*="animation-delay:550ms"] { animation-delay: 550ms; }
        [style*="animation-delay:600ms"] { animation-delay: 600ms; }
        [style*="animation-delay:700ms"] { animation-delay: 700ms; }
      `}</style>
    </main>
  );
}