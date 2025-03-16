import { motion } from 'framer-motion';
import { Grid, Typography, Box, Card, CardMedia, Container } from '@mui/material';

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
  <Box component="section" sx={{ py: 12 }} id='portfolio'>
    <Container maxWidth="lg">
      <Typography 
        variant="h2" 
        align="center" 
        sx={{ mb: 8 }}
        component={motion.h2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Nuestros Proyectos
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{ 
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}
              >
                <CardMedia
                  component={motion.img}
                  src={project.image}
                  alt={project.title}
                  sx={{ height: 300 }}
                  whileHover={{ scale: 1.1 }}
                />
                
                <Box sx={{ p: 3 }}>
                  <Typography variant="body2" color="primary.main">
                    {project.category}
                  </Typography>
                  <Typography variant="h6">{project.title}</Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);