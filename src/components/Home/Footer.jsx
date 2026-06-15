"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaCube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Brand & About */}
          <div className="text-center sm:text-left space-y-4">
            <div className="flex justify-center sm:justify-start items-center gap-3">
              <FaCube className="text-3xl text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Viptro
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              India's leading digital marketing & AI training institute. We empower students and professionals with practical skills, live projects, and industry mentorship to build high-growth careers.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 inline-block relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-400 rounded-full" />
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">All Courses</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Free Resources</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 inline-block relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-400 rounded-full" />
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <MdEmail className="text-blue-400 text-lg flex-shrink-0" />
                <a href="mailto:hello@viptro.com" className="hover:text-blue-400 transition-colors">hello@viptro.com</a>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <MdPhone className="text-blue-400 text-lg flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-3">
                <MdLocationOn className="text-blue-400 text-lg flex-shrink-0" />
                <span>Mumbai, Maharashtra – 400001, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter / Get in Touch */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 inline-block relative">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-400 rounded-full" />
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to receive weekly insights, new course alerts, and free career guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
              <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-medium transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {currentYear} Viptro Technologies Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}