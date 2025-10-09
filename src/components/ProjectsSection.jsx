const projects = [
  { name: "Sistem Booking Hotel", year: "2024", desc: "Aplikasi reservasi dengan dashboard admin." },
  { name: "E-Commerce UMKM", year: "2023", desc: "Toko online dengan pembayaran otomatis." },
  { name: "Aplikasi Inventori", year: "2022", desc: "Sistem manajemen stok berbasis web." },
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
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.year}</p>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
