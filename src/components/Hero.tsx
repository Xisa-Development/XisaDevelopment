import { motion } from 'framer-motion';
import { Box, Typography, Button, useTheme, Container } from '@mui/material';

export const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(./assets/img/header.jpg)',  // Imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',  // Filtro semitransparente
          backdropFilter: 'blur(2px)',  // Desenfoque en el fondo
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        style={{
          position: 'relative',
          zIndex: 1,
          padding: theme.spacing(4),
          width: '100%',
          color: '#fff'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component={motion.h1}
            variant="h1"
            sx={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 1.2,
              mb: 3
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Creando experiencias
            <Box
              component="span"
              sx={{ color: 'primary.main', display: 'block' }}
            >
              digitales memorables
            </Box>
          </Typography>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              component={motion.button}
              variant="contained"
              size="large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{ px: 6, py: 2 }}
            >
              Ver proyectos
            </Button>
          </motion.div>
        </Container>
      </motion.div>
    </Box>

  );
};