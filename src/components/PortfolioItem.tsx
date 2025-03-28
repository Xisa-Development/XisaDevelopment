import { motion } from 'framer-motion';
import { theme } from '../theme/theme';

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'Web', image: '/proj1.jpg' },
  { id: 2, title: 'Mobile App', category: 'Mobile', image: '/proj2.jpg' },
  { id: 3, title: 'Dashboard Analytics', category: 'Web', image: '/proj3.jpg' },
  { id: 4, title: 'Dashboard Analytics', category: 'Web', image: '/proj3.jpg' },
  { id: 5, title: 'Dashboard Analytics', category: 'Web', image: '/proj3.jpg' },
  { id: 6, title: 'Dashboard Analytics', category: 'Web', image: '/proj3.jpg' },
  { id: 7, title: 'Dashboard Analytics', category: 'Web', image: '/proj3.jpg' },
  { id: 8, title: 'Dashboard Analytics', category: 'Web', image: '/proj3.jpg' },
  { id: 9, title: 'Dashboard Analytics', category: 'Web', image: '/proj3.jpg' }
];

export const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{color: theme.colors.white}}
        className="text-4xl font-bold text-center mb-16"
      >
        Nuestros Proyectos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px 0px' }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg transition-transform"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="p-6">
              <p className="text-primary text-sm font-medium mb-1">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
