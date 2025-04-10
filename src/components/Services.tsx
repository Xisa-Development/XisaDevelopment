import { motion } from "framer-motion";
import { theme } from "../theme/theme";

const services = [
  {
    title: "eCommerce",
    image: "./assets/img/ecommers.png",
    description:
      "Desarrollamos tiendas online personalizadas y funcionales, optimizadas para ofrecer una experiencia de compra intuitiva y segura. Desde el diseño de la tienda hasta la integración de pasarelas de pago.",
  },
  {
    title: "Desarrollo Web",
    image: "./assets/img/web.png",
    description:
      "Creamos sitios web a medida, con un diseño atractivo y funcionalidades adaptadas a las necesidades de tu negocio. Ya sea un sitio institucional o un blog, nos encargamos de crear una presencia en línea profesional y efectiva.",
  },
  {
    title: "Diseños Digitales",
    image: "./assets/img/design.png",
    description:
      "Diseñamos soluciones visuales para mejorar la imagen digital de tu marca. Desde logotipos hasta gráficos para redes sociales, creamos contenido visual que conecte con tu audiencia y haga destacar tu negocio en el mundo digital.",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px 0px" }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center h-full transition-transform"
  >
    <img
      src={service.image}
      alt={service.title}
      className="w-36 h-36 mb-4 object-contain"
    />
    <h3 className="dark:text-gray-300 text-xl font-semibold mb-2">
      {service.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {service.description}
    </p>
  </motion.div>
);

export const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ color: theme.colors.white }}
        className="text-4xl font-bold text-center mb-16"
      >
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Nuestros Servicios
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Ofrecemos una variedad de servicios digitales para ayudarte a
            alcanzar tus objetivos en línea. Desde el desarrollo de sitios web
            hasta soluciones de comercio electrónico, tenemos la experiencia y
            el conocimiento para llevar tu proyecto al siguiente nivel.
          </p>
        </div>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);
