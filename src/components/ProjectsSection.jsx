import { ExternalLink } from "lucide-react";

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
    link: "https://www.linkedin.com/in/zhulva-priya-abhipraya-a69475335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-semibold text-[#38b6ff] mb-10 text-center">
        Capaian & Proyek
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-white/80 backdrop-blur-md border border-[#38b6ff]/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 hover:border-[#38b6ff]/40"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-[#38b6ff]">{p.name}</h3>
              <span className="text-sm text-[#38b6ff]/80">{p.year}</span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
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
    </section>
  );
}
