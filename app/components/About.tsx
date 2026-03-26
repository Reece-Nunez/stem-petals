"use client";

import { motion } from "motion/react";
import { Building2, FlaskConical, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    icon: Building2,
    iconBg: "bg-sage-100",
    iconColor: "text-sage-600",
    title: "Where Curiosity Leads the Way",
    body: "If you have ever wished there was a place where people could put down their devices, get their hands busy, and feel excited about learning again, you are in the right place! STEM & Petals is a creative studio where curiosity leads the way. Here, participants build, design, invent, craft, and explore through hands on experiences that feel more like joyful discovery than traditional learning. From inventive engineering challenges to artistic making and open studio creativity, every visit offers something new to try and something new to feel proud of.",
  },
  {
    icon: FlaskConical,
    iconBg: "bg-oak-100",
    iconColor: "text-oak-600",
    title: "Learning How to Think",
    body: "Here at STEM & Petals, we believe STEM is not just about technology or technical skills. It is about learning how to think. By blending science, engineering, math, design, and arts, learners develop confidence, persistence, imagination, and problem solving abilities that carry into every part of life. Sessions intentionally minimize the use of screens so children and adults can reconnect with focused creativity and the satisfaction of creating something real. Some programs are guided workshops, while others are relaxed drop in studio times where participants can explore materials, try projects at their own pace, create meaningful gifts for loved ones or special pieces for themselves, and connect with others in a welcoming community space.",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-sage-100",
    iconColor: "text-sage-600",
    title: "A Place for Everyone",
    body: "All programs are thoughtfully developed by an educator with a PhD in mathematics and science education, ensuring experiences that are both meaningful and engaging. At the same time, STEM & Petals is not about pressure or performance on tests or assessments. It is about possibility. Whether someone is an eager builder, a quiet creator, or still discovering their interests, there is room here to try new things and grow. People of all ages can join for themed workshops, creative camps, birthday celebrations, or simply an afternoon of making and exploring. This is a place where learning feels natural, creativity feels valued, and everyone is invited to imagine what they can make and who they can become.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
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
              About STEM & Petals
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-oak-400" />
          </motion.div>

          {/* Content blocks */}
          <div className="mt-12 space-y-10">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className={`h-10 w-10 rounded-lg ${section.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-5 w-5 ${section.iconColor}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sage-800">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {section.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
