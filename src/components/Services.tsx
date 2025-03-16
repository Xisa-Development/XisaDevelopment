import { motion } from 'framer-motion';
import { Grid, Typography, Box, Card, CardContent, Container } from '@mui/material';

const services = [
  { title: 'eCommerce', icon: '🛒', description: 'Desarrollamos tiendas online personalizadas y funcionales, optimizadas para ofrecer una experiencia de compra intuitiva y segura. Desde el diseño de la tienda hasta la integración de pasarelas de pago.' },
  { title: 'Desarrollo Web', icon: '💻', description: 'Creamos sitios web a medida, con un diseño atractivo y funcionalidades adaptadas a las necesidades de tu negocio. Ya sea un sitio institucional o un blog, nos encargamos de crear una presencia en línea profesional y efectiva.' },
  { title: 'Diseños Digitales', icon: '🎨', description: 'Diseñamos soluciones visuales para mejorar la imagen digital de tu marca. Desde logotipos hasta gráficos para redes sociales, creamos contenido visual que conecte con tu audiencia y haga destacar tu negocio en el mundo digital.'  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <Grid item xs={12} md={4} >
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        component={motion.div}
        whileHover={{ y: -10 }}
        sx={{ 
          height: '100%',
          bgcolor: 'blackground.paper',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            {service.icon}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {service.title}
          </Typography>
          <Typography color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  </Grid>
);

export const ServicesSection = () => (
  <Box component="section" id='services' sx={{ py: 12, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Typography 
        variant="h2" 
        align="center" 
        sx={{ mb: 8 }}
        component={motion.h2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Nuestros Servicios
      </Typography>
      
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </Grid>
    </Container>
  </Box>
);