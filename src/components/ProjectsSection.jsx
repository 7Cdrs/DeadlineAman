import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Sistem Booking Hotel",
    year: "2024",
    desc: "Aplikasi reservasi dengan dashboard admin, laporan harian, dan fitur manajemen kamar.",
    tech: ["React", "Laravel", "MySQL"],
    link: "#"
  },
  {
    name: "E-Commerce UMKM",
    year: "2023",
    desc: "Platform toko online untuk UMKM dengan integrasi pembayaran otomatis dan notifikasi realtime.",
    tech: ["Next.js", "TailwindCSS", "Midtrans API"],
    link: "#"
  },
  {
    name: "Aplikasi Inventori",
    year: "2022",
    desc: "Sistem manajemen stok barang dengan multi user role dan grafik analitik penjualan.",
    tech: ["Vue", "Express", "MongoDB"],
    link: "#"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Capaian & Proyek</h2>
        <p className="text-gray-600 mt-2">Beberapa proyek yang pernah kami kerjakan dengan dedikasi & detail tinggi.</p>
      </div>

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
