import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400);
  };

  return (
    <section
      id="hero"
      className="relative w-full max-w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-8 md:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,182,255,0.08),transparent_60%)] pointer-events-none"></div>
      <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-[#38b6ff]/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse pointer-events-none"></div>
      <div className="absolute w-48 h-48 sm:w-80 sm:h-80 bg-[#38b6ff]/15 blur-3xl rounded-full top-10 left-10 animate-pulse pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-20 sm:py-28 md:py-32">
        <div
          data-aos="fade-down"
          data-aos-delay="0"
          className="flex items-center gap-2 bg-[#38b6ff]/10 text-[#38b6ff] font-medium 
                     px-4 py-2 rounded-full border border-[#38b6ff]/30 mb-6 sm:mb-8 
                     text-sm sm:text-base md:text-lg"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Solusi Digital Profesional</span>
        </div>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold 
                     text-gray-800 mb-4 sm:mb-6 leading-tight px-2 max-w-4xl"
        >
          Kami <span className="text-[#38b6ff]">Freelancer</span> yang
          <br />
          <span className="text-[#2a9de6]">Bangun Website Impianmu</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 
                     leading-relaxed px-4"
        >
          Dari ide hingga realisasi — kami bantu bisnismu dan personal brand kamu
          tampil profesional di dunia digital, dengan desain modern dan performa optimal.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button
            onClick={handleClick}
            className={`relative overflow-hidden flex items-center justify-center gap-2 
                        px-8 py-3 bg-gradient-to-r from-[#38b6ff] to-[#2a9de6] text-white 
                        rounded-xl shadow-md hover:shadow-lg hover:from-[#2a9de6] hover:to-[#1e8bd1] 
                        transition-all duration-300 font-semibold active:scale-95 text-base sm:text-lg`}
          >
            <span
              className={`absolute inset-0 bg-white/60 blur-lg rounded-xl opacity-0 transition-opacity duration-300 ${
                isClicked ? "opacity-100" : ""
              }`}
            ></span>
            <span className="relative flex items-center gap-2">
              Lihat Portofolio
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </button>

          <a
            href="#contact"
            data-aos="fade-up"
            data-aos-delay="800"
            className="group relative px-8 py-3 border-2 border-[#38b6ff] text-[#38b6ff] rounded-xl font-semibold 
                       transition-all duration-300 active:scale-95 hover:bg-[#38b6ff]
                       hover:shadow-[0_0_20px_rgba(56,182,255,0.6)] text-base sm:text-lg flex items-center justify-center"
          >
            <span className="relative z-10 transition-all duration-500 text-[#38b6ff] group-hover:text-white">
              Konsultasi Gratis
            </span>
            <span className="absolute inset-0 rounded-xl bg-[#38b6ff]/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
