import { motion } from "framer-motion";
import { HeroSection } from "./Hero";
import { ServicesSection } from "./Services";
import { ContactSection } from "./ContactForm";
import Footer from "./Footer";
import { Loader } from "./Loader";
import { useState, useEffect } from "react";
import FloatButton from "./FloatButton";
import Team from "./Team";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "#services", label: "Servicios" },
  { path: "#equipo", label: "Equipo" },
  { path: "#contact", label: "Contacto" },
];

const NavButton = ({ path, label }: { path: string; label: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <a
        href={path}
        className="px-4 py-2 rounded-md transition-all duration-300 text-gray-300 hover:text-primary"
      >
        {label}
      </a>
    </motion.div>
  );
};

export const AppLayout = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}

      {!loading && (
        <>
          {/* NAVBAR */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
              scrolled ? "bg-neutral-900" : "bg-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <img
                  src="./assets/img/logo-sinfondo.png"
                  alt="Logo"
                  className="h-20 mr-6"
                />
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-2">
                {navLinks.map((link) => (
                  <NavButton key={link.path} {...link} />
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>

            {/* Mobile Navigation */}
            <motion.div
              initial={false}
              animate={{ 
                height: isMenuOpen ? "auto" : 0,
                opacity: isMenuOpen ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-neutral-900/95 backdrop-blur-sm"
            >
              <div className="flex flex-col py-4 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ 
                      x: isMenuOpen ? 0 : -20,
                      opacity: isMenuOpen ? 1 : 0
                    }}
                    transition={{ 
                      delay: isMenuOpen ? index * 0.1 : 0,
                      duration: 0.3
                    }}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    <a
                      href={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center py-4 text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      <span className="text-lg font-medium">{link.label}</span>
                      <i className="fa-solid fa-chevron-right ml-auto text-sm opacity-50"></i>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.nav>

          {/* SECCIONES */}
          <main className="">
            <FloatButton />
            <HeroSection />
            <ServicesSection />
            <Team />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};
