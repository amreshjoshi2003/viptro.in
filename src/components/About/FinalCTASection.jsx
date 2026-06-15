export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28 xl:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-sky-100 blur-[120px] sm:h-[500px] sm:w-[500px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-100 blur-[100px] sm:h-[400px] sm:w-[400px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:rounded-[32px] sm:p-8 lg:rounded-[40px] lg:p-16">

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />

          <div className="relative text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[11px] font-semibold text-sky-700 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              START YOUR JOURNEY TODAY
            </div>

            {/* Small Heading */}
            <h3 className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 sm:text-sm sm:tracking-[0.3em]">
              FUTURE-READY DIGITAL MARKETING EDUCATION
            </h3>

            {/* Main Heading */}
            <h2 className="mx-auto mt-5 max-w-5xl text-3xl font-black leading-[1] tracking-[-2px] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-[-4px] xl:text-7xl">
              Become The Digital Marketer
              <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Businesses Need
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              Gain practical expertise in SEO, Google Ads,
              Meta Ads, AI Automation and Performance Marketing
              through industry-driven training, live mentorship
              and real-world projects.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                className="
                  w-full
                  rounded-2xl
                  bg-sky-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                  hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)]
                  sm:w-auto
                "
              >
                Explore Programs
              </button>

              <button
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-400
                  hover:text-sky-600
                  hover:shadow-lg
                  sm:w-auto
                "
              >
                Schedule A Consultation
              </button>
            </div>

            {/* Trust Row */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 text-center text-xs font-semibold text-slate-500 sm:grid-cols-3 lg:grid-cols-5 lg:text-sm">
              <span>5000+ Students Trained</span>
              <span>50+ Real Projects</span>
              <span>Expert Mentorship</span>
              <span>Career Support</span>
              <span>AI-Powered Learning</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}