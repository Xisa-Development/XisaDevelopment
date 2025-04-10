
export default function FloatButton() {
  return (
    <div className="fixed right-5 bottom-10 pb-4 flex flex-col gap-3 z-[9999]">
      <a
        href="https://api.whatsapp.com/send?phone=4271047437"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10 bg-green-500 text-white rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

      <a
        href="mailto:xisa@gmail.com"
        className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10 bg-blue-600 text-white rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <i className="fa-solid fa-envelope text-2xl"></i>
      </a>

      <a
        href="https://www.instagram.com/xisa_development/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <i className="fa-brands fa-instagram text-3xl"></i>
      </a>
    </div>
  );
}
