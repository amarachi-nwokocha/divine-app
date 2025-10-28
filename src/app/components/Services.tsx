"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Shield, Landmark, Users } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Advisory & Strategy",
    icon: <Briefcase className="w-8 h-8 text-[#189086]" />,
    description:
      "Our Advisory & Strategy division supports organizations in navigating complexity and unlocking growth.",
    points: [
      "Strategy Development & Organizational Planning",
      "Capital Markets Advisory",
      "Financial Advisory (Corporate Finance & Transaction Services)",
      "Management Consulting",
    ],
  },
  {
    id: 2,
    title: "Governance, Risk & Sustainability",
    icon: <Shield className="w-8 h-8 text-[#189086]" />,
    description:
      "We help organizations establish sound governance frameworks and embed sustainability principles.",
    points: [
      "Internal Audit Outsourcing",
      "Financial Management",
      "Internal Controls over Financial Reporting (ICFR)",
      "Sustainability & ESG Advisory",
    ],
  },
  {
    id: 3,
    title: "Public Sector Finance & Policy",
    icon: <Landmark className="w-8 h-8 text-[#189086]" />,
    description:
      "We partner with governments and development institutions to design evidence-based policies.",
    points: [
      "Fiscal Studies & Fiscal Space Analysis",
      "Program Design & Evaluation",
      "Policy Advisory for Public & Development Sectors",
      "Stakeholder Engagement & Partnership Management",
    ],
  },
  {
    id: 4,
    title: "Capacity Development & Transformation",
    icon: <Users className="w-8 h-8 text-[#189086]" />,
    description:
      "We help organizations strengthen their people, systems, and culture for lasting impact.",
    points: [
      "Capacity Building & Change Management",
      "Leadership & Talent Development",
      "Organizational Design & Restructuring",
      "Learning & Development Solutions",
      "Monitoring, Evaluation & Learning (MEL) Systems",
    ],
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.section
      className="py-20 bg-[#1E293B]" id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6" >
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Our Services</h2>
        <div
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => {
            const isExpanded = expanded === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setExpanded(isExpanded ? null : service.id)}
                className={`relative flex-shrink-0 cursor-pointer rounded-2xl p-6 border border-gray-200 shadow-sm transition-all duration-500 ease-in-out
                  ${isExpanded ? "bg-[#f8f8f8] w-[600px]" : "bg-white w-[380px]"}`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isExpanded ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-[#1E293B]">{service.title}</h3>

                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-700 space-y-2"
                        >
                          <p>{service.description}</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {service.points.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}
