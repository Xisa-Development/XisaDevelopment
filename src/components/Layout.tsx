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
        href={path}  // Usar un enlace tradicional para el desplazamiento de anclaje
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
              scrolled ? "bg-neutral-900" : "bg-transparent"
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
