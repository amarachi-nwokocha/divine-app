"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, X } from "lucide-react";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);

  const advantages = [
    // your earlier advantages data if needed
  ];

  return (
    <>
      {/* Contact Section */}
      <section className="bg-[#1E293B] text-white py-20 px-6 md:px-16" id="contact">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          {/* Text & Button */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white font-heading mb-4">
              Let’s Build Something Exceptional Together
            </h2>
            <p className="text-white mb-8 max-w-2xl font-body">
              Whether you’re a government institution, development partner, or private
              enterprise, we’d love to discuss how Waymor can support your goals.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-[#189086] text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition-all duration-300 w-60"
            >
              Contact Us
            </button>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Waymor Advisory Ltd
              </h3>
              <p className="text-white/70">
                2A Abdulkareem Adisa Close, Adamu Aliero Crescent,
                <br /> Guzape, Abuja, Nigeria.
              </p>
            </div>

            <div className="space-y-3 text-white/70">
              <p>
                <span className="font-semibold text-white/70">Phone:</span> +234-913-558-6376
              </p>
              <p>
                <span className="font-semibold text-white/70">Email:</span> info@waymoradvisory.com
              </p>
              {/* <p>
                <span className="font-semibold text-white/70">Website:</span>{" "}
                <a
                  href="https://www.waymoradvisory.com"
                  className="text-[#8BC34A] hover:text-[#C0A000]"
                >
                  www.waymoradvisory.com
                </a> */}
              {/* </p> */}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-[#189086] mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-5">
                <a className="p-2 rounded-full border border-gray-300 hover:border-[#189086] hover:text-[#189086] transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a className="p-2 rounded-full border border-gray-300 hover:border-[#189086] hover:text-[#189086] transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a className="p-2 rounded-full border border-gray-300 hover:border-[#189086] hover:text-[#189086] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-[#8BC34A] mb-4">
              Contact Us
            </h3>
            <p className="text-gray-700 mb-6">
              Fill out the form below and we’ll get back to you promptly.
            </p>

            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#8BC34A]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#8BC34A]"
              />
              <input
                type="text"
                placeholder="Organization / Company"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#8BC34A]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#8BC34A]"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#8BC34A]"
              />
              <button
                type="submit"
                className="bg-[#8BC34A] text-black font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
