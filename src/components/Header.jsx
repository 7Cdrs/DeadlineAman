import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  // 🔘 Ganti bahasa otomatis toggle ID ↔ EN
  const handleLanguageToggle = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full max-w-full overflow-x-hidden z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{ transition: 'transform 0.8s ease-out, opacity 0.8s ease-out' }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <div
          onClick={() => handleScrollTo("hero")}
          className={`flex items-center gap-2 sm:gap-3 cursor-pointer group transform transition-all duration-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <img 
            src="/favicon.png" 
            alt="DeadlineAman Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold transition-colors whitespace-nowrap">
            <span className="text-[#38b6ff] group-hover:text-[#2a9de6]">Dead</span>
            <span className="text-gray-800 group-hover:text-gray-900">lineAman</span>
          </span>
        </div>

        {/* 🔹 Navbar Desktop */}
        <nav className="hidden md:flex gap-6 lg:gap-10 font-medium text-gray-700 items-center">
          {[
            { id: "about", label: "About" },
            { id: "pricing", label: "Pricing" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ]
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((item, index) => (
              <span
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative group cursor-pointer transform transition-all duration-700 whitespace-nowrap ${
                  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all group-hover:w-full ${
                    scrolled ? "bg-[#38b6ff]" : "bg-white"
                  }`}
                ></span>
              </span>
            ))}

          {/* 🌐 Tombol Translate */}
          <button
            onClick={handleLanguageToggle}
            className={`relative group cursor-pointer transform transition-all duration-700 font-semibold ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            } ${scrolled ? "text-[#38b6ff]" : "text-white"} hover:text-[#2a9de6]`}
            style={{ transitionDelay: '800ms' }}
          >
             Pricing International
          </button>
        </nav>

        {/* 🔹 Tombol Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-xl sm:text-2xl focus:outline-none transition-all duration-700 flex-shrink-0 ${
            scrolled ? "text-[#38b6ff]" : "text-[#38b6ff]"
          } ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔹 Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`w-full md:hidden border-t text-center py-3 ${
              scrolled
                ? "bg-white/90 backdrop-blur-md"
                : "bg-[#38b6ff]/95 backdrop-blur-sm"
            }`}
          >
            {[
              { id: "about", label: "About" },
              { id: "pricing", label: "Pricing" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item, index) => (
              <motion.span
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => handleScrollTo(item.id)}
                className={`block py-2 w-full cursor-pointer transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#38b6ff]"
                    : "text-white hover:text-blue-100"
                }`}
              >
                {item.label}
              </motion.span>
            ))}

            {/* 🌐 Tambah Translate di Menu Mobile juga */}
            <motion.button
              onClick={handleLanguageToggle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className={`block py-2 w-full cursor-pointer font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-[#38b6ff] hover:text-[#2a9de6]"
                  : "text-white hover:text-blue-100"
              }`}
            >
              Pricing International
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
