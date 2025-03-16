import {
  AppBar,
  Toolbar,
  Container,
  CssBaseline,
  Box,
  useScrollTrigger,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HeroSection } from "./Hero";
import { ServicesSection } from "./Services";
import { ContactSection } from "./ContactForm";
import { PortfolioSection } from "./PortfolioItem";
import Footer from "./Footer";
import { Loader } from "./Loader";
import { useState, useEffect } from 'react';

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "#services", label: "Servicios" },
  { path: "#portfolio", label: "Portafolio" },
  { path: "#contact", label: "Contacto" },
];

const NavButton = ({ path, label }: { path: string; label: string }) => {
  const location = useLocation();

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Box
        component={Link}
        to={path.slice(1)}
        sx={{
          px: 3,
          py: 1,
          borderRadius: 2,
          color: location.hash === path ? "primary.main" : "text.primary",
          textDecoration: "none",
          transition: "all 0.3s",
          bgcolor:
            location.hash === path ? "black" : "transparent",
        }}
      >
        {label}
      </Box>
    </motion.div>
  );
};

export const AppLayout = () => {
  const trigger = useScrollTrigger({ threshold: 100 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //setData("");
      setLoading(false); // Desactiva el loader después de que los datos se cargan
    }, 3000); // Simulando una carga de datos
  }, []);

  return (
    <>
    {loading ? <Loader /> : null}

    {!loading && (
      <>
      <CssBaseline />
      <AppBar
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        sx={{
          backdropFilter: trigger ? "blur(10px)" : "none",
          bgcolor: trigger ? "rgba(0, 0, 0, 0.979)" : "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Box
                component="img"
                src="./assets/img/logo-sinfondo.png"
                alt="Logo"
                sx={{ height: 90, mr: 4 }}
              />
            </motion.div>

            <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
              {navLinks.map((link) => (
                <NavButton key={link.path} {...link} />
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </>
    )}
  </>
);
}