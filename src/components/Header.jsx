import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{ transition: 'transform 0.8s ease-out, opacity 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div
          onClick={() => handleScrollTo("hero")}
          className={`flex items-center gap-3 cursor-pointer group transform transition-all duration-700 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <img 
            src="/D rm.png" 
            alt="DeadlineAman Logo" 
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold transition-colors">
            <span className="text-[#38b6ff] group-hover:text-[#2a9de6]">Dead</span>
            <span className="text-gray-800 group-hover:text-gray-900">lineAman</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-10 font-medium text-gray-700">
          {[
            { id: "about", label: "Tentang" },
            { id: "pricing", label: "Harga" },
            { id: "projects", label: "Proyek" },
            { id: "contact", label: "Kontak" },
          ]
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((item, index) => (
              <span
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative group cursor-pointer transform transition-all duration-700 ${
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
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl focus:outline-none transition-all duration-700 ${
            scrolled ? "text-[#38b6ff]" : "text-[#38b6ff]"
          } ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t text-center py-3 ${
              scrolled
                ? "bg-white/90 backdrop-blur-md"
                : "bg-[#38b6ff]/95 backdrop-blur-sm"
            }`}
          >
            {[
              { id: "about", label: "Tentang" },
              { id: "pricing", label: "Harga" },
              { id: "projects", label: "Proyek" },
              { id: "contact", label: "Kontak" },
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}