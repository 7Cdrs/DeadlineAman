import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">FreelanceDev</h1>

        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#about" className="hover:text-blue-600">Tentang</a>
          <a href="#pricing" className="hover:text-blue-600">Harga</a>
          <a href="#projects" className="hover:text-blue-600">Proyek</a>
          <a href="#contact" className="hover:text-blue-600">Kontak</a>
        </nav>

        <button
          className="md:hidden text-blue-700"
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-700 text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-blue-50 border-t text-center py-3">
          <a href="#about" className="block py-2 hover:text-blue-600">Tentang</a>
          <a href="#pricing" className="block py-2 hover:text-blue-600">Harga</a>
          <a href="#projects" className="block py-2 hover:text-blue-600">Proyek</a>
          <a href="#contact" className="block py-2 hover:text-blue-600">Kontak</a>
        </div>
      )}
    </header>
  );
}
