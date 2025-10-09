export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white pt-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Kami Freelance Profesional
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        Membangun solusi digital untuk bisnis dan ide kreatif Anda.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
