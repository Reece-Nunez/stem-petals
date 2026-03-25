const placeholderClasses = [
  {
    title: "Gears in Action",
    ageRange: "Ages 4-6",
    description:
      "Kids discover how gears work by building their own spinning machines. Hands-on tinkering with real mechanical parts.",
    tag: "Engineering",
  },
  {
    title: "Pulleys and Power",
    ageRange: "Ages 5-8",
    description:
      "How do you lift something twice your size? Kids build pulley systems and learn the science behind simple machines.",
    tag: "Science",
  },
  {
    title: "The Inventor's Workshop",
    ageRange: "Ages 6-9",
    description:
      "Young inventors design and build working contraptions using gears, levers, and pulleys. Think like an engineer, build like a maker.",
    tag: "Engineering",
  },
  {
    title: "Math and Machines",
    ageRange: "Ages 5-7",
    description:
      "Counting teeth on gears, measuring force with pulleys, and discovering the math that makes machines move.",
    tag: "Mathematics",
  },
];

const tagColors: Record<string, string> = {
  Engineering: "bg-oak-100 text-oak-700",
  Science: "bg-sage-100 text-sage-700",
  Technology: "bg-gray-100 text-gray-700",
  Mathematics: "bg-oak-50 text-oak-600",
};

export default function UpcomingClasses() {
  return (
    <section id="classes" className="bg-sage-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl font-bold text-sage-900">
            Upcoming Classes
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-oak-400" />
          <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto">
            Our class schedule is coming soon. In the meantime, take a peek at
            what we have planned and let us know if you&apos;re interested!
          </p>
        </div>

        {/* Class cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderClasses.map((cls) => (
            <div
              key={cls.title}
              className="group relative flex flex-col rounded-2xl bg-white border border-sage-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Placeholder image area */}
              <div className="h-36 w-full rounded-xl bg-sage-100 flex items-center justify-center mb-5">
                <svg className="h-10 w-10 text-sage-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>

              {/* Tag */}
              <span
                className={`inline-block self-start rounded-full px-3 py-0.5 text-xs font-medium ${tagColors[cls.tag] ?? "bg-gray-100 text-gray-700"}`}
              >
                {cls.tag}
              </span>

              <h3 className="mt-3 text-base font-semibold text-sage-900 leading-snug">
                {cls.title}
              </h3>
              <p className="mt-1 text-sm text-oak-600 font-medium">{cls.ageRange}</p>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                {cls.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-sage-300 bg-white px-4 py-2 text-sm font-medium text-sage-700 hover:bg-sage-500 hover:text-white hover:border-sage-500 transition-colors"
              >
                Interested? Join Waitlist
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
