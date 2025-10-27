"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export default function MissionVisionValues() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const coreValues = [
    {
      title: "Integrity at the Core",
      text: "Honesty and transparency are the foundations of all we do. We build trust by acting with unwavering integrity in every interaction.",
    },
    {
      title: "Partnership-Driven",
      text: "We believe the best results come from true collaboration. We work alongside our clients, not just for them, turning shared challenges into shared successes.",
    },
    {
      title: "Insight with Impact",
      text: "We don’t just offer insights; we deliver solutions with tangible impact. Our focus is on creating real, lasting value that solves your most critical challenges.",
    },
    {
      title: "Adaptive Thinking",
      text: "The world is constantly evolving, and so are we. We approach every challenge with adaptive thinking, staying agile and responsive to find the best possible path forward.",
    },
    {
      title: "Excellence through Accountability",
      text: "We hold ourselves to the highest standards. We are committed to delivering our work with precision and purpose, taking full accountability for our results and ensuring excellence in everything we do.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 px-6 md:px-16 text-gray-800"
    >
      {/* --- Header --- */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Mission & Vision
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our purpose and principles — the roots from which every decision grows.
        </p>
      </div>

      {/* --- Mission & Vision Cards --- */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-[#8BC34A]" />
            <h3 className="text-2xl font-semibold text-gray-900">Mission</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To empower clients through dynamic, insight-driven solutions —
            working side by side as committed partners to solve problems, build
            capacity, and foster growth with transparency and integrity at every
            step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-[#C0A000]" />
            <h3 className="text-2xl font-semibold text-gray-900">Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To be the trusted thought partner for organizations navigating
            complexity — delivering transformative insights, grounded in
            integrity, and powered by enduring relationships.
          </p>
        </motion.div>
      </div>

      {/* --- Core Values Timeline --- */}
      <div className="relative max-w-5xl mx-auto">
        {/* Static background line */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-200 h-full rounded-full" />

        {/* Animated growth line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-[#8BC34A] origin-top rounded-full"
        />

        <div className="space-y-24">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } items-start`}
            >
              {/* Node */}
              <div className="absolute left-[14px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-[#8BC34A] rounded-full z-10 shadow-md" />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-10" : "md:pr-10"
                }`}
              >
                <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {value.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
