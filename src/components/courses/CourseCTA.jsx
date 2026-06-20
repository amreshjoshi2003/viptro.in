import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CourseCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700" />

      {/* Blur Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center text-white">
          <span className="inline-flex items-center rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-sm">
            🚀 Limited Seats Available
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            Ready to Start Your
            <span className="block text-yellow-300">
              Digital Marketing Journey?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100 md:text-xl">
            Learn Meta Ads, Google Ads, SEO, WordPress, AI Tools,
            Performance Marketing and real client projects with
            certification and career support.
          </p>

          {/* Stats */}
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2 text-blue-100">
                Students Trained
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="mt-2 text-blue-100">
                Live Projects
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="mt-2 text-blue-100">
                Practical Training
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2 text-blue-100">
                Student Support
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Enroll Now
              <ArrowRight size={20} />
            </Link>

            <a
              href="https://wa.me/919063773818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <a
              href="tel:+919063773818"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Trust Line */}
          <div className="mt-12 text-blue-100">
            ✓ Live Classes • ✓ Real Projects • ✓ Certification • ✓ Placement Assistance
          </div>
        </div>
      </div>
    </section>
  );
}