export default function CareerTransformationSection() {
  return (
    <section className="bg-white pt-6 pb-12 md:pt-8 md:pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small badge (optional premium touch) */}
        <div className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Launch your new career
        </div>

        {/* Main heading as h3 but visually scaled */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          Transform Your Career With
        </h3>
        <h3 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Modern Skills
        </h3>

        {/* Description - smaller and tighter */}
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-gray-800">
            Industry-led courses, hands-on projects & mentorship
          </span>{" "}
          that prepare you for the jobs of tomorrow.
        </p>

        {/* CTA Button - compact but clickable */}
        <button className="mt-6 group inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
          Start Learning Today
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}