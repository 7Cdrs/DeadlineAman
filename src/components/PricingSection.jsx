const pricing = [
  { name: "Basic", price: "Rp2.000.000", desc: "Website sederhana dengan 3 halaman." },
  { name: "Standard", price: "Rp5.000.000", desc: "Website bisnis lengkap dengan fitur kontak & blog." },
  { name: "Premium", price: "Rp10.000.000", desc: "Website custom dengan dashboard & integrasi API." },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-10">Bundling & Harga</h2>
      <div className="grid gap-8 md:grid-cols-3 px-6 md:px-20">
        {pricing.map((item) => (
          <div
            key={item.name}
            className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 transition transform"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{item.name}</h3>
            <p className="text-2xl font-semibold text-gray-800 mb-4">{item.price}</p>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
