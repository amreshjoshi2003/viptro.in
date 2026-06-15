"use client";

import Link from "next/link";

export default function MasterclassCTASection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-50 to-sky-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated background blobs for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-20 w-80 h-80 rounded-full bg-blue-300/30 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-300/20 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-cyan-300/20 blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main card - group added for heading hover effect */}
        <div className="group relative overflow-hidden rounded-3xl sm:rounded-4xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
          {/* Soft glow effects inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 text-center py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:px-12">
            {/* Badge - interactive hover effect */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="text-white text-xs font-bold tracking-wider uppercase">
                Free Live Masterclass
              </span>
            </div>

            {/* Heading - now group-hover works correctly */}
            <h2 className="mt-6 sm:mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight tracking-tight">
              Launch Your Digital Career
              <span className="block bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mt-1 transition-all duration-300 group-hover:from-blue-800 group-hover:to-indigo-800">
                with Viptro
              </span>
            </h2>

            {/* Description - crisp & readable */}
            <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              Master <span className="font-bold text-slate-900">SEO, Google Ads, Meta Ads, Social Media, AI tools & freelancing</span> from industry experts. Limited seats – first come, first served.
            </p>

            {/* CTA Button - redirects to /contact */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold text-base sm:text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register for Free
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Shine sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>

            {/* Trust & urgency - interactive icons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:text-slate-800 cursor-default">
                <span className="text-yellow-500">⏳</span>
                <span>Only 100 spots available</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-400 hidden sm:block" />
              <div className="flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:text-slate-800 cursor-default">
                <span className="text-green-500">📜</span>
                <span>Certificate included</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-400 hidden sm:block" />
              <div className="flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:text-slate-800 cursor-default">
                <span className="text-purple-500">🎥</span>
                <span>Recording provided</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for smooth animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}