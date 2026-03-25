export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sage-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-oak-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
            </span>
            <span className="text-sm font-medium text-sage-700">Coming Soon</span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-sage-900 leading-tight">
            Where Science{" "}
            <span className="text-oak-500">Meets</span>{" "}
            Nature
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            STEM & Petals is a new kind of learning space for curious young minds.
            Hands-on science, technology, engineering, and math rooted in the
            wonder of the natural world.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#classes"
              className="inline-flex items-center justify-center rounded-full bg-sage-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-sage-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500"
            >
              Join the Waitlist
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-sage-300 bg-white px-8 py-3 text-base font-semibold text-sage-700 hover:bg-sage-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
