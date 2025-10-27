"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyChooseWaymor = () => {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Image or Illustration */}
        <div className="relative">
          <Image
            src="/images/waymor-team.jpg"
            alt="Waymor team collaborating"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-3xl"></div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          >
            The <span className="text-green-600">Waymor Advantage</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            At Waymor, we believe that true success comes from a deep partnership, 
            not just a list of recommendations. We don’t simply advise; we{" "}
            <span className="font-semibold text-gray-900">
              work alongside you to deliver real, measurable impact.
            </span>
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="list-disc list-inside space-y-3 text-gray-700"
          >
            <li>
              We bring <span className="font-medium">strategic and financial clarity</span> to complex challenges.
            </li>
            <li>
              Our evidence-based approach provides a{" "}
              <span className="font-medium">clear roadmap</span> through uncertainty.
            </li>
            <li>
              We strengthen your foundation with{" "}
              <span className="font-medium">governance, risk, and control improvements.</span>
            </li>
            <li>
              We build your team’s internal capacity for{" "}
              <span className="font-medium">sustainable, long-term success.</span>
            </li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Everything we do is guided by{" "}
            <span className="font-semibold text-gray-900">
              trust, integrity, and lasting value.
            </span>{" "}
            We’re not just looking for a quick win — we’re invested in your success.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseWaymor;
