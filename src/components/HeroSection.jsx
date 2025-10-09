// src/components/HeroSection.jsx
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400); // reset animasi setelah 0.4 detik
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_40%)]"></div>

      {/* Badge */}
      <div className="flex items-center gap-2 bg-blue-100 text-blue-700 font-medium px-4 py-1 rounded-full mb-6 z-10">
        <Sparkles className="w-4 h-4" />
        <span>Solusi Digital Profesional</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight z-10">
        Kami <span className="text-blue-600">Freelancer</span> yang
        <br />
        <span className="text-blue-700">Bangun Website Impianmu</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg max-w-2xl mb-10 z-10">
        Dari ide hingga realisasi — kami bantu bisnis dan personal brand kamu
        tampil profesional di dunia digital, dengan desain modern dan performa optimal.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        {/* Tombol Portofolio - dengan efek flash putih */}
        <button
          onClick={handleClick}
          className={`relative overflow-hidden flex items-center justify-center gap-2 px-8 py-3 
          bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl shadow-md 
          hover:shadow-lg hover:from-sky-600 hover:to-blue-600 transition-all duration-300 
          font-semibold [text-shadow:_0_1px_2px_rgba(0,0,0,0.25)] active:scale-95`}
        >
          <span
            className={`absolute inset-0 bg-white/60 blur-lg rounded-xl opacity-0 transition-opacity duration-300 ${
              isClicked ? "opacity-100" : ""
            }`}
          ></span>
          <span className="relative flex items-center gap-2">
            Lihat Portofolio
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>

        {/* Tombol Konsultasi Gratis - efek glow elegan + transisi warna teks halus */}
        <a
          href="#contact"
          className="group relative px-8 py-3 border-2 border-sky-500 text-sky-600 rounded-xl font-semibold 
          transition-all duration-300 active:scale-95 hover:bg-sky-500
          hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]"
        >
          <span
            className="relative z-10 transition-all duration-500 text-sky-600 
            group-hover:text-white group-hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.9)]"
          >
            Konsultasi Gratis
          </span>

          {/* Efek glow animasi halus */}
          <span className="absolute inset-0 rounded-xl bg-sky-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
          <span className="absolute inset-0 rounded-xl animate-ping bg-sky-400/10 opacity-0 group-hover:opacity-100"></span>
        </a>
      </div>

      {/* Decorative Blur */}
      <div className="absolute w-72 h-72 bg-blue-300/30 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-cyan-300/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
    </section>
  );
}
