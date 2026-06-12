"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              A
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Agency
              </h1>
              <p className="text-sm text-gray-500">
                Digital Growth Partner
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[17px] font-semibold text-gray-800 transition-colors duration-300 hover:text-orange-500"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(249,115,22,0.35)]"
          >
            <span className="relative z-10">
              Free Strategy Call
            </span>

            <span className="absolute inset-0 translate-y-full bg-orange-700 transition-transform duration-300 group-hover:translate-y-0"></span>
          </Link>
        </div>
      </div>
    </header>
  );
}