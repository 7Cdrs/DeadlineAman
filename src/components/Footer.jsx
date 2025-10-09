import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">DeadlineAman</h2>
          <p className="text-blue-300 text-sm leading-relaxed">
            Partner digital terpercaya untuk membangun website profesional,
            cepat, dan siap scale. Kami bantu bisnis kamu tampil online dengan percaya diri.
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2 text-blue-300">
            <li><a href="#about" className="hover:text-white transition">Tentang Kami</a></li>
            <li><a href="#projects" className="hover:text-white transition">Proyek</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Harga</a></li>
            <li><a href="#contact" className="hover:text-white transition">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
          <ul className="space-y-2 text-blue-300">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" /> deadlineaman@gmail.com
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" /> +62 812-3456-7890
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" /> Surabaya, Indonesia
            </li>
          </ul>
        </div>
      </div>

      {/* Garis bawah dan hak cipta */}
      <div className="border-t border-blue-800 mt-10 pt-4 text-center text-blue-400 text-sm">
        <p>© {new Date().getFullYear()} <span className="text-white font-medium">DeadlineAman</span>. All rights reserved.</p>
        <p className="mt-1">Kepuasan Anda adalah Prioritas Kami</p>
      </div>
    </footer>
  );
}
