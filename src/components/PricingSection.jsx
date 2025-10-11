import { CheckCircle2 } from "lucide-react";

const pricing = [
  {
    name: "Basic",
    price: "Rp2.000.000",
    desc: "Website sederhana dengan tampilan profesional. Cocok untuk portofolio, usaha kecil, atau profil personal.",
    features: [
      "Domain .com + Hosting gratis 1 tahun",
      "3 halaman utama (Home, About, Contact)",
      "Desain responsif (mobile & desktop friendly)",
      "Setup SEO dasar (meta tag, sitemap, Google indexing)",
      "Integrasi WhatsApp & Google Maps",
      "Maintenance gratis 1 bulan",
    ],
  },
  {
    name: "Standard",
    price: "Rp5.000.000",
    desc: "Website bisnis lengkap siap online. Cocok untuk perusahaan kecil–menengah yang ingin tampil profesional di internet.",
    features: [
      "Semua fitur Paket Basic",
      "Fitur Blog / Artikel",
      "Formulir kontak otomatis (terkirim ke email)",
      "Optimasi kecepatan & SEO lanjutan",
      "Sertifikat SSL + keamanan tambahan",
      "Integrasi Google Analytics",
      "Maintenance gratis 2 bulan",
    ],
  },
  {
    name: "Premium",
    price: "Rp10.000.000",
    desc: "Website custom dengan sistem dinamis & fitur canggih. Ideal untuk bisnis skala besar, startup, atau instansi yang butuh fleksibilitas tinggi.",
    features: [
      "Semua fitur Paket Standard",
      "Dashboard Admin (CMS custom)",
      "Integrasi API eksternal (pembayaran, IoT, dsb.)",
      "Multi-user & role management",
      "Database & backend terpisah (scalable)",
      "Support & maintenance 3 bulan",
      "Desain UI/UX eksklusif",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10" style={{ color: '#38b6ff' }}>
        Bundling & Harga
      </h2>
      <div className="grid gap-8 md:grid-cols-3 px-6 md:px-20">
        {pricing.map((item, index) => (
          <div
            key={item.name}
            className={`bg-white shadow-xl rounded-2xl p-8 border-t-4 hover:-translate-y-2 transition transform ${
              index === 1 ? "scale-105" : ""
            }`}
            style={{ borderTopColor: '#38b6ff' }}
          >
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#38b6ff' }}>
              {item.name}
            </h3>
            <p className="text-3xl font-extrabold text-gray-800 mb-4">
              {item.price}
            </p>
            <p className="text-gray-600 mb-6">{item.desc}</p>

            <ul className="text-left space-y-2 mb-6">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: '#38b6ff' }} />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}