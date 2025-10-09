import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Saat scroll lebih dari 50px, ubah style header
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Fungsi untuk scroll halus ke section tertentu
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
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <span
          onClick={() => handleScrollTo("hero")}
          className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer"
        >
          Deadline<span className="text-gray-800">Aman</span>
        </span>

        {/* === NAV DESKTOP === */}
        <nav className="hidden md:flex gap-10 font-medium text-gray-700">
          {[
            { id: "about", label: "Tentang" },
            { id: "pricing", label: "Harga" },
            { id: "projects", label: "Proyek" },
            { id: "contact", label: "Kontak" },
          ]
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((item) => (
              <span
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="relative group cursor-pointer"
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all group-hover:w-full ${
                    scrolled ? "bg-blue-600" : "bg-white"
                  }`}
                ></span>
              </span>
            ))}
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl focus:outline-none transition-colors duration-500 ${
            scrolled ? "text-blue-700" : "text-blue-700"
          }`}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* === MOBILE MENU SLIDE DOWN (ANIMATION) === */}
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
                : "bg-blue-600/95 backdrop-blur-sm"
            }`}
          >
            {[
              { id: "about", label: "Tentang" },
              { id: "pricing", label: "Harga" },
              { id: "projects", label: "Proyek" },
              { id: "contact", label: "Kontak" },
            ].map((item) => (
              <span
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`block py-2 w-full cursor-pointer transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-100"
                }`}
              >
                {item.label}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
