'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  // Animation variants with proper typing
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // ✅ Correct type
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Waymor Advisory"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full md:w-2/3 lg:w-1/2 px-6 md:px-12 lg:px-20 text-left text-white"
      >
        <motion.h2
          variants={fadeInLeft}
          className="text-[#189086] font-[Lato] font-semibold text-lg md:text-xl tracking-widest uppercase mb-4"
        >
          Integrity. Insight. Impact.
        </motion.h2>

        <motion.h1
          variants={fadeInLeft}
          className="text-4xl md:text-5xl lg:text-6xl font-[Lato] font-bold leading-tight mb-6 text-white"
        >
          At a Glance
        </motion.h1>

        <motion.p
          variants={fadeInLeft}
          className="max-w-xl text-white/90 text-base md:text-lg font-[Arimo] mb-10"
        >
          Waymor Advisory Ltd is a dynamic consulting firm committed to helping organizations
          navigate complexity, achieve clarity, resilience, and growth. Guided by integrity,
          we work across sectors to strengthen systems, build capacity, and enable smarter
          decisions. We deliver strategic insight that creates sustainable impact.
        </motion.p>

        <motion.div variants={fadeInLeft}>
          <Link
            href="#contact"
            className="inline-block bg-[var(--color-blue)] hover:bg-[var(--color-darkgreen)] font-[Arimo] text-lg px-8 py-3 text-white
             rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Strategy Call
          </Link>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
