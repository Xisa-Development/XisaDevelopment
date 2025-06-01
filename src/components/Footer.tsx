import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp , FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-neutral-900 text-white py-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Información de la empresa */}
          <div>
            <h6 className="text-lg font-semibold mb-2">Xisa Development</h6>
            <p className="text-sm text-gray-400">
              Desarrollo de páginas web y servicios digitales.
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h6 className="text-lg font-semibold mb-2">Enlaces</h6>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h6 className="text-lg font-semibold mb-2">Síguenos</h6>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61551475666780" className="text-white hover:text-[#1877F2] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=4271047437" className="text-white hover:text-[#1DA1F2] transition-colors">
                <FaWhatsapp  size={24} />
              </a>
              <a href="https://www.instagram.com/xisa_development/" className="text-white hover:text-[#E1306C] transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Xisa Development. Todos los derechos reservados.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
