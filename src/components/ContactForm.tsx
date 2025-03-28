import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { theme } from '../theme/theme';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Email inválido').required('Campo requerido'),
  message: Yup.string().required('Campo requerido'),
});

export const ContactSection = () => (
  <section id="contact" className="py-24 bg-background relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          className="text-4xl font-bold text-center mb-16"
               style={{color: theme.colors.white}}
        >
          Contacto
        </motion.h2>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div initial={{ x: -50 }} whileInView={{ x: 0 }}>
                  <Field
                    name="name"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <ErrorMessage name="name" component="div" className="text-sm text-red-500 mt-1" />
                </motion.div>

                <motion.div initial={{ x: 50 }} whileInView={{ x: 0 }}>
                  <Field
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
                </motion.div>

                <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} className="md:col-span-2">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <ErrorMessage name="message" component="div" className="text-sm text-red-500 mt-1" />
                </motion.div>

                <div className="md:col-span-2 flex justify-center mt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    style={{background: theme.colors.primary}}
                    className="bg-primary text-white font-semibold rounded-md px-10 py-3 transition-all duration-200 disabled:opacity-50"
                  >
                    Enviar mensaje
                  </motion.button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  </section>
);
