"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#172554] backdrop-blur-xl shadow-2xl">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex h-20 lg:h-[100px] items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center transition-all duration-500 hover:scale-105"
          >
            <Image
              src="/images/home/Technologies pvt ltd.png"
              alt="VIPTRO Technologies"
              width={260}
              height={80}
              priority
              className="
                h-12
                w-auto
                object-contain
                lg:h-16
                transition-all
                duration-500
                group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  px-5
                  py-3
                  text-[17px]
                  font-semibold
                  tracking-wide
                  text-slate-200
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:text-white
                "
              >
                <span className="relative z-10">
                  {item.name}
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-white/5
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500/0
                    via-cyan-400/20
                    to-blue-500/0
                    opacity-0
                    blur-lg
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[3px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-sky-400
                    to-blue-500
                    transition-all
                    duration-500
                    group-hover:w-[80%]
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="
              hidden
              lg:flex
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-cyan-400/20
              bg-gradient-to-r
              from-[#1E40AF]
              via-[#2563EB]
              to-[#3B82F6]
              px-8
              py-4
              text-[16px]
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-1
              hover:scale-105
              hover:border-cyan-300/50
              hover:shadow-[0_20px_50px_rgba(37,99,235,0.45)]
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
            />

            <span className="relative flex items-center gap-3">
              Explore Courses →
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              rounded-xl
              p-2
              text-white
              transition
              hover:bg-white/10
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-in fade-in duration-300">
            <div className="flex flex-col gap-3 pt-3">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-xl
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    font-medium
                    transition-all
                    hover:bg-white/10
                  "
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-[#1E40AF]
                  via-[#2563EB]
                  to-[#3B82F6]
                  px-5
                  py-4
                  text-white
                  font-bold
                  shadow-lg
                "
              >
                Explore Courses →
              </Link>

            </div>
          </div>
        )}
      </div>

      {/* Bottom Glow Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </header>
  );
}