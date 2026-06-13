import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            {/* Uncomment when logo is available */}

            {/*
            <Image
              src="/logo.png"
              alt="Agency Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
            */}
            
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Agency
            </h3>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-500">
              Helping students and professionals master
              digital marketing through practical training,
              expert mentorship and real-world projects.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-sm font-medium text-slate-500 transition-all duration-300 hover:border-sky-500 hover:text-sky-600"
              >
                FB
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-sm font-medium text-slate-500 transition-all duration-300 hover:border-sky-500 hover:text-sky-600"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-sm font-medium text-slate-500 transition-all duration-300 hover:border-sky-500 hover:text-sky-600"
              >
                LI
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-sm font-medium text-slate-500 transition-all duration-300 hover:border-sky-500 hover:text-sky-600"
              >
                YT
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Company
            </h4>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-500 transition-colors duration-300 hover:text-slate-900"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-500 transition-colors duration-300 hover:text-slate-900"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-slate-500 transition-colors duration-300 hover:text-slate-900"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-500 transition-colors duration-300 hover:text-slate-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact
            </h4>

            <div className="mt-6 space-y-4 text-slate-500">
              <p>info@agency.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, India</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-100 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-slate-400">
              © 2026 Agency. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-slate-400 transition-colors hover:text-slate-900"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-slate-400 transition-colors hover:text-slate-900"
              >
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}