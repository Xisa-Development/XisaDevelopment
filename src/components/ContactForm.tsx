import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { theme } from "../theme/theme";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Campo requerido"),
  email: Yup.string().email("Email inválido").required("Campo requerido"),
  message: Yup.string().required("Campo requerido"),
});

export const ContactSection = () => (
  <section
    id="contact"
    className="py-24 bg-background relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Ponte en Contacto
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Contáctanos, compártenos tus ideas y juntos haremos realidad tus
            proyectos. Estamos aquí para ayudarte a dar el siguiente paso en tu
            viaje digital.
          </p>
        </motion.div>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log("Mensaje enviado:", values);
              alert("¡Mensaje enviado exitosamente!");
              setSubmitting(false);
              resetForm();
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                <motion.div
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Field
                    name="name"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Field
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-2"
                >
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </motion.div>

                <div className="md:col-span-2 flex justify-center mt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    style={{ background: theme.colors.primary }}
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
