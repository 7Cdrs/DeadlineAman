import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    name: "Website Keuangan",
    year: "2025",
    desc: "Website akuntansi perusahaan berbasis Laravel dengan fitur manajemen akun & role, transaksi harian, dan laporan laba rugi otomatis.",
    tech: ["Laravel", "MySQL"],
    link: "https://jaladewachampion.com/"
  },
  {
    name: "Scheduro",
    year: "2025",
    desc: "Produk yang membantu freelancer dan mahasiswa agar lebih produktif lewat fitur AI Task Breakdown, kanban board, dan pengingat otomatis via WhatsApp.",
    tech: ["Next.js", "TailwindCSS", "Express.js", "PostgreSQL"],
    link: "https://scheduro.com/"
  },
  {
    name: "AquaNova",
    year: "2024",
    desc: "Platform inovatif yang membantu industri akuakultur mengoptimalkan produksi ikan melalui pemantauan kualitas air secara real-time.",
    tech: ["TailwindCSS", "Laravel", "PostgreSQL"],
    link: "https://aqua-nova.tech/"
  },
  {
    name: "AJarin",
    year: "2025",
    desc: "Platform kursus online versi ringan dengan akses lifetime dan pembayaran otomatis via Midtrans (Payment Gateway).",
    tech: ["Flutter", "Laravel", "PostgreSQL"],
    link: "https://www.linkedin.com/posts/hazelmpr_bangun-solusi-meski-dengan-keterbatasan-activity-7350281283681337346-9QUT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEd9K7wBGNsNvV2PHabDD2TzXEFMhzYwktA"
  },
  {
    name: "Chatbot AI untuk E-commerce",
    year: "2025",
    desc: "Solusi chatbot AI untuk meningkatkan interaksi pelanggan dan penjualan melalui otomatisasi percakapan di platform e-commerce.",
    tech: ["n8n", "Telegram", "OpenAI API"],
    link: "https://www.linkedin.com/posts/hazelmpr_ternyata-asik-juga-explore-tools-automation-activity-7352517609805811714-Ychk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEd9K7wBGNsNvV2PHabDD2TzXEFMhzYwktA"
  },
  {
    name: "Aplikasi Toko Roti",
    year: "2025",
    desc: "Aplikasi digital untuk mengelola inventaris, pemesanan, dan pengiriman toko roti dengan sistem pembayaran dan lokasi terintegrasi.",
    tech: ["Flutter"],
    link: "https://www.linkedin.com/posts/hazelmpr_bnsp-juniormobileprogrammer-activity-7351075589488791552-eMVb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEd9K7wBGNsNvV2PHabDD2TzXEFMhzYwktA"
  },
  {
    name: "Layanan Mandiri Pasien Interaktif",
    year: "2025",
    desc: "Aplikasi self-service pasien untuk mempercepat proses pendaftaran dan antrian di klinik, dengan fitur pencarian cepat, registrasi mandiri, dan nomor antrian otomatis.",
    tech: ["Spring Boot", "Java", "React.js", "SSMS"],
    link: " https://lnkd.in/gex9nTSX"
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, maxIndex, isMobile]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-white">
      <h2 
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-3xl font-semibold text-[#38b6ff] mb-10 text-center"
      >
        Capaian & Proyek
      </h2>

      {isMobile ? (
        <div className="grid gap-8 max-w-md mx-auto">
          {projects.map((p, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
              className="bg-white/80 backdrop-blur-md border border-[#38b6ff]/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 hover:border-[#38b6ff]/40"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-[#38b6ff]">{p.name}</h3>
                <span className="text-sm text-[#38b6ff]/80">{p.year}</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#38b6ff]/10 text-[#38b6ff] px-2 py-1 rounded-full font-medium border border-[#38b6ff]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#38b6ff] hover:text-[#2a9de6] font-medium transition"
              >
                Lihat Proyek <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative max-w-7xl mx-auto px-16">
          <button
            data-aos="fade-right"
            data-aos-duration="600"
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#38b6ff] text-[#38b6ff] hover:text-white p-3 rounded-full shadow-lg transition duration-300 border border-[#38b6ff]/20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            data-aos="fade-left"
            data-aos-duration="600"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#38b6ff] text-[#38b6ff] hover:text-white p-3 rounded-full shadow-lg transition duration-300 border border-[#38b6ff]/20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {projects.map((p, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  data-aos-duration="800"
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white/80 backdrop-blur-md border border-[#38b6ff]/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 hover:border-[#38b6ff]/40 h-full">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold text-[#38b6ff]">{p.name}</h3>
                      <span className="text-sm text-[#38b6ff]/80">{p.year}</span>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{p.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#38b6ff]/10 text-[#38b6ff] px-2 py-1 rounded-full font-medium border border-[#38b6ff]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#38b6ff] hover:text-[#2a9de6] font-medium transition"
                    >
                      Lihat Proyek <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
            className="flex justify-center gap-2 mt-8"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#38b6ff] w-8"
                    : "bg-[#38b6ff]/30 hover:bg-[#38b6ff]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}