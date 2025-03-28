import { motion } from 'framer-motion';
import { theme } from '../theme/theme';


export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('./assets/img/header.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10 w-full text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Creando experiencias
            <span className="block text-primary" style={{color: theme.colors.primary}}>digitales memorables</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: theme.colors.primary }}
              className="bg-primary text-white text-lg font-semibold px-6 py-3 rounded-md transition-all"
            >
              Ver proyectos
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
