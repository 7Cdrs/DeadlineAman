// src/components/HeroSection.jsx
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
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
        <a
          href="#projects"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-700 transition font-semibold"
        >
          Lihat Portofolio
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
        >
          Konsultasi Gratis
        </a>
      </div>

      {/* Decorative Blur */}
      <div className="absolute w-72 h-72 bg-blue-300/30 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-cyan-300/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
    </section>
  );
}
