"use client";

import { motion } from "motion/react";
import { ImageIcon, ArrowRight } from "lucide-react";

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
  Engineering: "bg-oak-100 text-oak-700 border-oak-200",
  Science: "bg-sage-100 text-sage-700 border-sage-200",
  Mathematics: "bg-oak-50 text-oak-600 border-oak-100",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function UpcomingClasses() {
  return (
    <section id="classes" className="bg-sage-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-playfair-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-sage-900">
            Upcoming Classes
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-oak-400" />
          <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto">
            Our class schedule is coming soon. In the meantime, take a peek at
            what we have planned and let us know if you&apos;re interested!
          </p>
        </motion.div>

        {/* Class cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderClasses.map((cls, i) => (
            <motion.div
              key={cls.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl bg-white border border-sage-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Placeholder image area */}
              <div className="h-36 w-full rounded-xl bg-gradient-to-br from-sage-100 to-sage-50 flex items-center justify-center mb-5 overflow-hidden">
                <ImageIcon className="h-10 w-10 text-sage-300 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Tag */}
              <span
                className={`inline-block self-start rounded-full border px-3 py-0.5 text-xs font-medium ${tagColors[cls.tag] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}
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
                className="mt-5 group/btn inline-flex items-center justify-center rounded-full border border-sage-300 bg-white px-4 py-2 text-sm font-medium text-sage-700 hover:bg-sage-500 hover:text-white hover:border-sage-500 transition-all duration-200"
              >
                Interested? Join Waitlist
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
