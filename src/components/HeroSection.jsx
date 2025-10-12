import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      offset: 100
    });
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,182,255,0.1),transparent_40%)]"></div>

      <div 
        data-aos="fade-down"
        data-aos-delay="0"
        className="flex items-center gap-2 bg-[#38b6ff]/10 text-[#38b6ff] font-medium px-3 sm:px-4 py-1 rounded-full mt-20 sm:mt-24 mb-4 sm:mb-6 z-10 border border-[#38b6ff]/20 text-sm sm:text-base"
      >
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>Solusi Digital Profesional</span>
      </div>

      <h1 
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3 sm:mb-4 leading-tight z-10 px-2"
      >
        Kami <span className="text-[#38b6ff]">Freelancer</span> yang
        <br />
        <span className="text-[#2a9de6]">Bangun Website Impianmu</span>
      </h1>

      <p 
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-gray-600 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 md:mb-10 z-10 px-4"
      >
        Dari ide hingga realisasi — kami bantu bisnis dan personal brand kamu
        tampil profesional di dunia digital, dengan desain modern dan performa optimal.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 z-10 w-full sm:w-auto px-4 sm:px-0">
        <button
          data-aos="fade-right"
          data-aos-delay="600"
          onClick={handleClick}
          className="relative overflow-hidden flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 
          bg-gradient-to-r from-[#38b6ff] to-[#2a9de6] text-white rounded-xl shadow-md 
          hover:shadow-lg hover:from-[#2a9de6] hover:to-[#1e8bd1] transition-all duration-300 
          font-semibold [text-shadow:_0_1px_2px_rgba(0,0,0,0.25)] active:scale-95 text-sm sm:text-base"
        >
          <span
            className={`absolute inset-0 bg-white/60 blur-lg rounded-xl opacity-0 transition-opacity duration-300 ${
              isClicked ? "opacity-100" : ""
            }`}
          ></span>
          <span className="relative flex items-center gap-2">
            Lihat Portofolio
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </span>
        </button>

        <a
          data-aos="fade-left"
          data-aos-delay="600"
          href="#contact"
          className="group relative px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#38b6ff] text-[#38b6ff] rounded-xl font-semibold 
          transition-all duration-300 active:scale-95 hover:bg-[#38b6ff]
          hover:shadow-[0_0_15px_rgba(56,182,255,0.6)] text-sm sm:text-base"
        >
          <span
            className="relative z-10 transition-all duration-500 text-[#38b6ff]
            group-hover:text-white group-hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.9)]"
          >
            Konsultasi Gratis
          </span>
          <span className="absolute inset-0 rounded-xl bg-[#38b6ff]/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
          <span className="absolute inset-0 rounded-xl animate-ping bg-[#38b6ff]/10 opacity-0 group-hover:opacity-100"></span>
        </a>
      </div>
      <div 
        data-aos="fade-zoom-in"
        data-aos-delay="300"
        className="absolute w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#38b6ff]/30 blur-3xl rounded-full bottom-5 sm:bottom-10 right-5 sm:right-10 animate-pulse"
      ></div>
      <div 
        data-aos="fade-zoom-in"
        data-aos-delay="500"
        className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-[#38b6ff]/20 blur-3xl rounded-full top-5 sm:top-10 left-5 sm:left-10 animate-pulse"
      ></div>
    </section>
  );
}