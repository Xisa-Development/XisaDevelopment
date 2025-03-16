import { motion } from "framer-motion";
import { Grid, Typography, Box, Container, IconButton } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box component="footer" id='footer' sx={{ bgcolor: "#212121", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center" textAlign="center">
            {/* Información de la empresa */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Xisa Development
              </Typography>
              <Typography variant="body2" color="gray">
                Desarrollo de páginas web y servicios digitales.
              </Typography>
            </Grid>

            {/* Enlaces de navegación */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Enlaces
              </Typography>
              <Typography variant="body2" component="a" href="#portfolio" sx={{ display: "block", color: "gray", textDecoration: "none", '&:hover': { color: "white" } }}>
                Proyectos
              </Typography>
              <Typography variant="body2" component="a" href="#services" sx={{ display: "block", color: "gray", textDecoration: "none", '&:hover': { color: "white" } }}>
                Servicios
              </Typography>
              <Typography variant="body2" component="a" href="#contact" sx={{ display: "block", color: "gray", textDecoration: "none", '&:hover': { color: "white" } }}>
                Contacto
              </Typography>
            </Grid>

            {/* Redes Sociales */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Síguenos
              </Typography>
              <Box>
                <IconButton href="#" sx={{ color: "white", '&:hover': { color: "#1877F2" } }}>
                  <FaFacebook size={24} />
                </IconButton>
                <IconButton href="#" sx={{ color: "white", '&:hover': { color: "#1DA1F2" } }}>
                  <FaTwitter size={24} />
                </IconButton>
                <IconButton href="#" sx={{ color: "white", '&:hover': { color: "#E1306C" } }}>
                  <FaInstagram size={24} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          {/* Copyright */}
          <Box mt={3} textAlign="center">
            <Typography variant="body2" color="gray">
              © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Footer;
