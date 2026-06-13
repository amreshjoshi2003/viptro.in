export default function MasterclassCTASection() {
  return (
    <section className="bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-gray-100 shadow-lg sm:shadow-xl">
          {/* Soft glow effects - hidden on very small screens for performance */}
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-80 sm:h-80 bg-blue-200/30 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none hidden sm:block" />
          <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-80 sm:h-80 bg-indigo-200/30 rounded-full blur-2xl sm:blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none hidden sm:block" />

          <div className="relative z-10 text-center py-10 px-4 sm:py-14 sm:px-6 md:py-16 md:px-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500" />
              </span>
              <span className="text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                FREE LIVE MASTERCLASS
              </span>
            </div>

            {/* Heading - responsive text size with word breaking */}
            <h2 className="mt-5 sm:mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight break-words">
              Launch Your Digital Career
              <span className="block text-blue-600 mt-1">with Viptro</span>
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
              Learn <span className="font-semibold text-gray-800">SEO, Google Ads, Meta Ads, Social Media, AI tools & freelancing</span> from industry experts. Limited seats – first come, first served.
            </p>

            {/* CTA Button - full width on mobile, auto on larger screens */}
            <div className="mt-6 sm:mt-8 px-4 sm:px-0">
              <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Register for Free →
              </button>
            </div>

            {/* Trust/urgency line */}
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-gray-400">
              ⏳ Only 100 spots available • Includes certificate & recording
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}