import { motion } from 'framer-motion';
import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Email inválido').required('Campo requerido'),
  message: Yup.string().required('Campo requerido')
});

export const ContactSection = () => (
  <Box 
    component="section" 
    id="contact" 
    sx={{ 
      py: 12,
      bgcolor: 'background.default',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ mb: 8 }}
          component={motion.h2}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
        >
          Contacto
        </Typography>

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Lógica de envío
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <motion.div initial={{ x: -50 }} whileInView={{ x: 0 }}>
                    <Field
                      name="name"
                      as={TextField}
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <motion.div initial={{ x: 50 }} whileInView={{ x: 0 }}>
                    <Field
                      name="email"
                      as={TextField}
                      fullWidth
                      label="Email"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </motion.div>
                </Grid>

                <Grid item xs={12}>
                  <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }}>
                    <Field
                      name="message"
                      as={TextField}
                      fullWidth
                      label="Mensaje"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </motion.div>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      component={motion.button}
                      type="submit"
                      variant="contained"
                      size="large"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{ px: 8 }}
                      disabled={isSubmitting}
                    >
                      Enviar mensaje
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </motion.div>
    </Container>
  </Box>
);