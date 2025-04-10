import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sahray Aguilar",
    role: "Web Developer",
    image:
      "./assets/img/sahra.jpg",
    description:
      "Desarrollador web con experiencia en la creación de aplicaciones.",
    socials: {
      instagram: "https://instagram.com/sahray",
      facebook: "https://facebook.com/sahray",
      github: "https://github.com/sahray",
      linkedin: "https://linkedin.com/in/sahray",
    },
  },
  {
    name: "Ximena Garcia",
    role: "Back-end Developer",
    image:
      "./assets/img/Xime.jpg",
    description:
      "Desarrolladora back-end con experiencia en bases de datos y APIs.",
    socials: {
      instagram: "",
      facebook: "",
      github: "https://github.com/ximena",
      linkedin: "https://linkedin.com/in/ximena",
    },
  },
  {
    name: "Daniel Mondragon",
    role: "Front-end Developer",
    image:
      "./assets/img/daniel.jpg",
    description:
      "Desarrollador front-end con experiencia en interfaces modernas y accesibles.",
    socials: {
      instagram: "https://instagram.com/daniel",
      facebook: "",
      github: "https://github.com/daniel",
      linkedin: "",
    },
  },
];

const socialIcons = {
  instagram: "fa-instagram",
  facebook: "fa-facebook",
  github: "fa-github",
  linkedin: "fa-linkedin",
};

export default function Team() {
  return (
    <section id="equipo" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Nuestro Equipo
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Conoce a nuestro equipo de desarrolladores y especialistas en
            tecnología, preparados para llevar tu proyecto al siguiente nivel.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 p-6 text-center"
            >
              <img
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                src={member.image}
                alt={`${member.name} Avatar`}
              />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {member.role}
              </span>
              <p className="mt-3 mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                {member.description}
              </p>
              <ul className="flex justify-center space-x-4 text-white text-lg">
                {Object.entries(member.socials).map(
                  ([key, url]) =>
                    url && (
                      <li key={key}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <i
                            className={`fa-brands ${socialIcons[key as keyof typeof socialIcons]} hover:text-${key === "instagram" ? "pink" : key === "facebook" ? "blue" : "gray"}-400`}
                          ></i>
                        </a>
                      </li>
                    )
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
