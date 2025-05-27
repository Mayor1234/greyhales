// src/components/ContactSection.tsx
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Talk About Your Dream Space
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Fill out the form and we’ll get back to you within 24 hours to
          schedule your consultation.
        </motion.p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-6 md:grid-cols-2 text-left"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC6518]"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC6518]"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 border border-gray-300 rounded-xl md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#CC6518]"
          />
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="p-4 border border-gray-300 rounded-xl md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#CC6518]"
            required
          />
          <button
            type="submit"
            className="md:col-span-2 bg-gradient-to-r from-[#994C12] via-[#CC6518] to-[#994C12] text-white py-3 px-6 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
