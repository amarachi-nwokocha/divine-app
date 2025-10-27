"use client";
import { motion } from "framer-motion";

export default function WaymorAdvantage() {
  const advantages = [
    {
      title: "Deep Partnership",
      text: "At Waymor, we believe that true success comes from a deep partnership, not just a list of recommendations. We don't simply advise; we work alongside you to deliver real, measurable impact. We become an extension of your team, dedicated to achieving your goals.",
    },
    {
      title: "Strategic & Financial Clarity",
      text: "We specialize in bringing strategic and financial clarity to even the most complex challenges. Our approach helps you cut through the noise, providing a clear roadmap to navigate uncertainty and make confident decisions. We also focus on strengthening your organization's foundation by improving governance, risk, and controls, ensuring you have the lasting resilience needed to withstand future challenges.",
    },
    {
      title: "Evidence-Driven Insight",
      text: "Our work is always grounded in evidence and research. This ensures every strategy we propose is credible and built on a solid foundation of data, not just intuition. We also prioritize building internal capacity within your team. By sharing our knowledge and expertise, we empower you to drive sustainable outcomes long after our engagement is complete.",
    },
    {
      title: "Sustainable Transformation",
      text: "Ultimately, everything we do is guided by a commitment to trust, integrity, and creating long-term value. We're not just looking for a quick win; we're invested in your lasting success. We empower your teams through knowledge sharing and capacity development — enabling you to sustain growth and success long after our engagement.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[#222] mb-6">
            The Waymor Advantage
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We don’t just advise — we collaborate. Every solution is designed to
            create measurable impact, built on trust, evidence, and shared success.
          </p>
        </div>

        {/* Advantage Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative bg-[#f9f9f9] border border-gray-200 rounded-2xl shadow-sm p-8 overflow-hidden group hover:shadow-md transition-all duration-500"
            >
              {/* Gold Accent Bar */}
              <div className="absolute left-0 top-0 h-full w-[5px] bg-[#C0A000] rounded-r-lg opacity-90 group-hover:w-[8px] transition-all duration-300" />

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#111] mb-3">
                {adv.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{adv.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
