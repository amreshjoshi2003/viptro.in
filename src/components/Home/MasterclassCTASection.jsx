export default function MasterclassCTASection() {
  return (
    <section className="bg-[#050816] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0F172A]">

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10 text-center py-16 px-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 text-sm font-medium">
                Free Live Masterclass
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl md:text-6xl font-bold text-white leading-tight">
              Start Your Digital Marketing
              <br />
              Journey With Viptro
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              Learn SEO, Google Ads, Meta Ads, Social Media Marketing,
              AI Tools and Freelancing from industry experts.
            </p>

            {/* Button */}
            <button className="mt-8 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:scale-105">
              Register Free
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}