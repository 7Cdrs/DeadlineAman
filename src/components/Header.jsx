import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">DeadlineAman</h1>

        {/* NAVBAR UNTUK DESKTOP */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-600">
          <button onClick={() => handleScroll("about")} className="hover:text-blue-600">Tentang</button>
          <button onClick={() => handleScroll("pricing")} className="hover:text-blue-600">Harga</button>
          <button onClick={() => handleScroll("projects")} className="hover:text-blue-600">Proyek</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-blue-600">Kontak</button>
        </nav>

        {/* TOMBOL MENU MOBILE */}
        <button
          className="md:hidden text-blue-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* NAVBAR MOBILE */}
      {open && (
        <div className="md:hidden bg-blue-50 border-t text-center py-3">
          <button onClick={() => handleScroll("about")} className="block py-2 hover:text-blue-600 w-full">Tentang</button>
          <button onClick={() => handleScroll("pricing")} className="block py-2 hover:text-blue-600 w-full">Harga</button>
          <button onClick={() => handleScroll("projects")} className="block py-2 hover:text-blue-600 w-full">Proyek</button>
          <button onClick={() => handleScroll("contact")} className="block py-2 hover:text-blue-600 w-full">Kontak</button>
        </div>
      )}
    </header>
  );
}
