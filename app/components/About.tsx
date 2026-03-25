export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section heading */}
          <h2 className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl font-bold text-sage-900 text-center">
            About STEM & Petals
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-oak-400" />

          {/* Paragraph 1: About */}
          <div className="mt-12 space-y-10">
            <div className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="h-10 w-10 rounded-lg bg-sage-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-sage-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sage-800">Who We Are</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  STEM & Petals was founded with a simple belief: every child deserves
                  the chance to explore, experiment, and fall in love with learning.
                  We are building a dedicated space where children can get their hands
                  dirty, mixing, building, coding, and growing, all in a safe,
                  nurturing environment. Our classes are designed for young learners
                  who are curious about how the world works, and our instructors are
                  passionate about making complex ideas feel like play.
                </p>
              </div>
            </div>

            {/* Paragraph 2: What STEM Is (and Isn't) */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="h-10 w-10 rounded-lg bg-oak-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-oak-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sage-800">What STEM Is (and What It&apos;s Not)</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  STEM stands for Science, Technology, Engineering, and Mathematics —
                  but it&apos;s so much more than textbooks and tests. Real STEM education
                  is about asking questions, solving problems, and thinking creatively.
                  It&apos;s not about memorizing formulas or sitting still in a lecture.
                  At STEM & Petals, we focus on project-based, hands-on experiences
                  that let kids discover concepts through doing. Whether they&apos;re
                  engineering a bridge out of craft sticks or exploring how plants
                  grow, every lesson is an adventure, not a chore.
                </p>
              </div>
            </div>

            {/* Paragraph 3: Research-Based Benefits */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="h-10 w-10 rounded-lg bg-sage-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-sage-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sage-800">Why STEM Matters for Kids</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Research consistently shows that early exposure to STEM education
                  builds critical thinking, problem-solving skills, and creativity
                  that benefit children well beyond the classroom. Studies from the
                  National Science Foundation have found that children who engage in
                  hands-on STEM activities develop stronger analytical reasoning and
                  are more likely to pursue innovative career paths. Early STEM learning
                  also boosts confidence, teaches collaboration, and helps kids develop
                  a growth mindset, the understanding that ability isn&apos;t fixed, but
                  built through effort and curiosity. At STEM & Petals, we&apos;re committed
                  to giving every child this powerful head start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
