// src/components/AboutSection.jsx
import { Users, Target, Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50 text-center relative overflow-hidden">
      {/* Accent Background */}
      <div className="absolute w-72 h-72 bg-blue-200/20 blur-3xl rounded-full top-20 left-10 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-cyan-200/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 relative z-10">
        Tentang Kami
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-12 leading-relaxed relative z-10">
        Kami adalah tim <span className="text-blue-600 font-medium">freelance profesional</span> 
        yang berfokus pada pembuatan solusi digital modern.  
        Dengan pengalaman lintas industri, kami membantu bisnis dan individu 
        membangun identitas digital yang kuat, fungsional, dan estetis.
      </p>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto relative z-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition transform border-t-4 border-blue-500">
          <div className="flex justify-center mb-4">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tim Kolaboratif</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kami bekerja dalam tim kecil yang solid — desainer, developer, dan kreator konten 
            berkolaborasi untuk hasil maksimal sesuai kebutuhanmu.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition transform border-t-4 border-cyan-500">
          <div className="flex justify-center mb-4">
            <Target className="w-10 h-10 text-cyan-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Visi & Misi Jelas</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Visi kami adalah membantu bisnis tumbuh lewat teknologi.  
            Misi kami: menghadirkan produk yang efektif, efisien, dan menarik.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition transform border-t-4 border-indigo-500">
          <div className="flex justify-center mb-4">
            <Code className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Teknologi Modern</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kami menggunakan teknologi terbaru seperti React, Laravel, dan Tailwind CSS 
            untuk memastikan performa, keamanan, dan fleksibilitas tinggi.
          </p>
        </div>
      </div>
    </section>
  );
}
