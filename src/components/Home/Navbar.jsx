"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-2xl" />

              <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-lg font-bold">
                A
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Agency
              </h1>

              <p className="text-xs text-slate-400">
                Digital Marketing Institute
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[15px] font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-6
              py-3
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(6,182,212,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(6,182,212,0.4)]
            "
          >
            <span className="relative z-10">
              Start Learning
            </span>

            <span className="absolute inset-0 translate-y-full bg-cyan-700 transition-transform duration-300 group-hover:translate-y-0" />
          </Link>

        </div>
      </div>
    </header>
  );
}