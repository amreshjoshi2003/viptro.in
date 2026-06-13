"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Agency Logo"
              width={180}
              height={50}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[15px] font-semibold tracking-tight text-slate-600 transition-colors duration-300 hover:text-blue-600"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-sky-500
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-xl
            "
          >
            Get Started
          </Link>

        </div>
      </div>
    </header>
  );
}