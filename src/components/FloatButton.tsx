import { useState } from "react";

export default function FloatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Botón principal */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          text-white
          shadow-2xl
          flex items-center justify-center
          w-16 h-16
          rounded-full
          bg-gradient-to-r from-cyan-500 to-blue-500
          transition-transform duration-500 ease-in-out
          hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-cyan-400
          cursor-pointer
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`
            w-7 h-7
            transform transition-transform duration-500
            ${isOpen ? "rotate-90" : "rotate-0"}
          `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Sub-botón WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=4271047437"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`
          absolute
          bottom-17 right-0
          bg-green-500 hover:bg-green-600
          rounded-full
          w-12 h-12
          flex items-center justify-center
          text-white text-2xl
          shadow-lg
          transform transition-all duration-300 ease-out
          ${isOpen ? "-translate-y-2 opacity-100" : "translate-y-0 opacity-0"}
        `}
      >
        <i className="fa-brands fa-whatsapp" />
      </a>

      {/* Sub-botón Email */}
      <a
        href="mailto:xisa@gmail.com"
        aria-label="Enviar correo"
        className={`
          absolute
          bottom-0 -left-13
          bg-blue-500 hover:bg-blue-600
          rounded-full
          w-12 h-12
          flex items-center justify-center
          text-white text-xl
          shadow-lg
          transform transition-all duration-300 ease-out delay-75
          ${isOpen ? "-translate-x-2 opacity-100" : "translate-x-0 opacity-0"}
        `}
      >
        <i className="fa-solid fa-envelope" />
      </a>

      {/* Sub-botón Instagram */}
      <a
        href="https://www.instagram.com/xisa_development/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`
          absolute
          bottom-13 -left-9
          bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600
          rounded-full
          w-12 h-12
          flex items-center justify-center
          text-white text-2xl
          shadow-lg
          transform transition-all duration-300 ease-out delay-150
          ${isOpen ? "-translate-x-2 -translate-y-2 opacity-100" : "translate-x-0 translate-y-0 opacity-0"}
        `}
      >
        <i className="fa-brands fa-instagram" />
      </a>
    </div>
  );
}
