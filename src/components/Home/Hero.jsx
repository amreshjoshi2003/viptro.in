export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 text-sm font-medium">
              🚀 Results Driven Digital Agency
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-black">
              Grow Your
              <br />
              Business With
              <br />
              <span className="text-orange-500">
                Digital Marketing
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We help brands generate more leads, increase sales,
              dominate search results and scale faster through SEO,
              Google Ads, Meta Ads and high-converting websites.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
                Get Free Consultation
              </button>

              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-xl font-semibold transition">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-black">
                  150+
                </h3>
                <p className="text-gray-500 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">
                  50+
                </h3>
                <p className="text-gray-500 mt-2">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">
                  98%
                </h3>
                <p className="text-gray-500 mt-2">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-4">
              <img
                src="/dashboard.png"
                alt="Dashboard"
                className="rounded-2xl w-full"
              />
            </div>

            {/* Card 1 */}
            <div className="absolute -left-8 top-10 bg-white border border-gray-200 rounded-2xl shadow-xl p-4">
              <p className="text-sm text-gray-500">
                Monthly Leads
              </p>
              <h4 className="text-2xl font-bold text-green-500">
                +320%
              </h4>
            </div>

            {/* Card 2 */}
            <div className="absolute -right-8 bottom-10 bg-white border border-gray-200 rounded-2xl shadow-xl p-4">
              <p className="text-sm text-gray-500">
                ROAS
              </p>
              <h4 className="text-2xl font-bold text-blue-500">
                8.7x
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}