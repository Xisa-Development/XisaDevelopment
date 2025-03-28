import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HeroSection } from "./Hero";
import { ServicesSection } from "./Services";
import { ContactSection } from "./ContactForm";
import { PortfolioSection } from "./PortfolioItem";
import Footer from "./Footer";
import { Loader } from "./Loader";
import { useState, useEffect } from "react";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "#services", label: "Servicios" },
  { path: "#portfolio", label: "Portafolio" },
  { path: "#contact", label: "Contacto" },
];

const NavButton = ({ path, label }: { path: string; label: string }) => {
  const location = useLocation();
  const isActive = location.hash === path;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        
        to={path.slice(1)}
        className={`px-4 py-2 rounded-md transition-all duration-300 ${
          isActive
            ? "color: theme.colors.primary"
            : "text-gray-300 hover:text-primary"
        }`}
        
      >
        {label}
      </Link>
    </motion.div>
  );
};

export const AppLayout = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Simula carga
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
              scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto flex items-center px-4 py-3">
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

              <div className="ml-auto flex gap-2">
                {navLinks.map((link) => (
                  <NavButton key={link.path} {...link} />
                ))}
              </div>
            </div>
          </motion.nav>

          {/* SECCIONES */}
          <main className="pt-28">
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};
