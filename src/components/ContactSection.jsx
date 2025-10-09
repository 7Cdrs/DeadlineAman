import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
<<<<<<< HEAD
    <section id="contact" className="py-16 bg-blue-100 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Kontak Kami</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          placeholder="Pesan"
          className="w-full border p-3 rounded-lg"
          rows="4"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Kirim
        </button>
      </form>
      <div className="mt-6 text-gray-600">
        <a href="#" className="mx-2 hover:text-blue-600">LinkedIn</a>|
        <a href="#" className="mx-2 hover:text-blue-600">Instagram</a>|
        <a href="#" className="mx-2 hover:text-blue-600">GitHub</a>
=======
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Info Kontak */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 mb-6">
            Punya ide atau proyek yang ingin diwujudkan?  
            Kami siap bantu membangun solusi digital yang sesuai kebutuhanmu.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <span>deadlineaman@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600 w-5 h-5" />
              <span>+62 812-5205-1253</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600 w-5 h-5" />
              <span>Surabaya, Indonesia</span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              Instagram
            </a>
            
          </div>
        </div>

        {/* Form Kontak */}
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-5 border border-blue-100">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg outline-none transition"
          />
          <input
            type="email"
            placeholder="Alamat Email"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg outline-none transition"
          />
          <textarea
            placeholder="Pesan Anda"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg outline-none transition"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            <Send className="w-5 h-5" />
            Kirim Pesan
          </button>
        </form>

>>>>>>> 115813b7f2e3bd673799f0944eb716ca5df67c91
      </div>
    </section>
  );
}
