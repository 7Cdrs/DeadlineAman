import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Aplikasi akuntansi dengan laporan keuangan otomatis",
    year: "2025",
    desc: "Aplikasi akuntansi perusahaan berbasis Laravel dengan fitur manajemen akun & role, transaksi harian, dan laporan laba rugi otomatis",
    tech: ["Laravel", "MySQL"],
    link: "https://jaladewachampion.com/"
  },
  {
    name: "Scheduro",
    year: "2025",
    desc: "Produk ini berfokus membantu freelancer dan mahasiswa agar lebih produktif lewat fitur AI-driven Task Breakdown, kanban board sederhana, serta pengingat otomatis via WhatsApp.",
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
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-semibold text-blue-700 mb-10 text-center">
        Capaian & Proyek
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-blue-700">{p.name}</h3>
              <span className="text-sm text-blue-500">{p.year}</span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Lihat Proyek <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
