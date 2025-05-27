import { useState } from 'react';

import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';

// CSS
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Living Room',
    image: '/images/living-room.jpg',
    description: 'A contemporary cozy design.',
  },
  {
    id: 2,
    title: 'Minimalist Kitchen',
    category: 'Kitchen',
    image: '/images/kitchen.jpg',
    description: 'Clean lines and natural light.',
  },
  {
    id: 3,
    title: 'Luxury Bedroom',
    category: 'Bedroom',
    image: '/images/bedroom.jpg',
    description: 'Plush textures and ambient lighting.',
  },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Projects
        </h2>

        <div className="flex justify-center mb-10 flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#994C12] text-white border-[#994C12]'
                  : 'text-gray-700 border-gray-300 hover:border-[#994C12] hover:text-[#994C12]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => handleImageClick(i)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={filteredProjects.map((p) => ({
            src: p.image,
            title: p.title,
            description: p.description,
          }))}
          index={lightboxIndex}
          plugins={[Thumbnails, Captions]}
        />
      </div>
    </section>
  );
}
