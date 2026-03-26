"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

function FleeingIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const rotate = useTransform(springX, [-40, 40], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxFlee = 40;
    const fleeStrength = Math.max(0, 1 - distance / 150);
    x.set(-dx / distance * maxFlee * fleeStrength);
    y.set(-dy / distance * maxFlee * fleeStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleTap = useCallback(() => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 60;
    x.set(Math.cos(angle) * distance);
    y.set(Math.sin(angle) * distance);
    setTimeout(() => {
      x.set(0);
      y.set(0);
    }, 600);
  }, [x, y]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center mb-6 py-4 cursor-pointer"
    >
      <motion.img
        src="/icon.png"
        alt="STEM & Petals flower"
        className="h-20 w-auto drop-shadow-md select-none"
        style={{ x: springX, y: springY, rotate }}
        onTouchStart={handleTap}
        draggable={false}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sage-50">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sage-200/40"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: "blur(60px)" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-oak-200/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          style={{ filter: "blur(60px)" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-oak-100/20"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          style={{ filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Coming Soon badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full bg-sage-100 border border-sage-200 px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
            </span>
            <span className="text-sm font-medium text-sage-700">Coming Soon</span>
          </motion.div>

          {/* Icon */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <FleeingIcon />
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sage-900 leading-tight"
          >
            STEM &{" "}
            <span className="text-oak-500 relative">
              Petals
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="#fab510"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-6 sm:leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            Less screen time. More real world thinking.
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-500 max-w-2xl mx-auto"
          >
            A creative studio where curiosity leads the way. Build, design,
            invent, craft, and explore through hands on experiences that feel
            more like joyful discovery than traditional learning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#classes"
              className="group inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-sage-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sage-500/25 hover:bg-sage-600 hover:shadow-sage-500/40 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500"
            >
              Join the Waitlist
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-sage-300 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-sage-700 hover:bg-sage-50 hover:border-sage-400 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
