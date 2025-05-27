// src/components/ServicesSection.tsx
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Residential Design',
    description:
      'Elegant and personalized home interiors tailored to your lifestyle.',
    icon: '🏡',
  },
  {
    title: 'Commercial Spaces',
    description:
      'Functional yet aesthetic interiors for offices, shops, and lounges.',
    icon: '🏢',
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Transform old spaces into fresh, modern environments.',
    icon: '🛠️',
  },
  {
    title: 'Furniture & Decor Selection',
    description: 'Curated pieces to complement and elevate your space.',
    icon: '🛋️',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#f9f7f6] text-gray-800" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to transform your space?
          </h3>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#994C12] via-[#CC6518] to-[#994C12] text-white px-8 py-3 rounded-full font-medium shadow-md hover:scale-105 transition-transform"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
