import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a5f8f] via-[#1e7cba] to-[#1a5f8f] text-white pt-12 pb-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,182,255,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(42,157,230,0.12),transparent_50%)]"></div>
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 text-center md:text-left relative z-10">
        
        {/* Brand & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-md">DeadlineAman</h2>
          <p className="text-white/95 text-sm leading-relaxed drop-shadow-sm">
            Partner digital terpercaya untuk membangun website profesional,
            cepat, dan siap scale. Kami bantu bisnis kamu tampil online dengan percaya diri.
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 drop-shadow-md">Navigasi</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="!text-white hover:!text-white/70 hover:translate-x-1 inline-block transition-all duration-300">Tentang Kami</a></li>
            <li><a href="#projects" className="!text-white hover:!text-white/70 hover:translate-x-1 inline-block transition-all duration-300">Proyek</a></li>
            <li><a href="#pricing" className="!text-white hover:!text-white/70 hover:translate-x-1 inline-block transition-all duration-300">Harga</a></li>
            <li><a href="#contact" className="!text-white hover:!text-white/70 hover:translate-x-1 inline-block transition-all duration-300">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 drop-shadow-md">Kontak</h3>
          <ul className="space-y-2 text-white/95">
            <li className="flex justify-center md:justify-start items-center gap-2 hover:text-white transition-colors duration-300 drop-shadow-sm">
              <Mail className="w-4 h-4 text-white/90" /> info@deadlineaman.com
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 hover:text-white transition-colors duration-300 drop-shadow-sm">
              <Phone className="w-4 h-4 text-white/90" /> +62 812-5205-1253
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 hover:text-white transition-colors duration-300 drop-shadow-sm">
              <MapPin className="w-4 h-4 text-white/90" /> Surabaya, Indonesia
            </li>
          </ul>
        </div>
      </div>

      {/* Garis bawah dan hak cipta */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-white/95 text-sm relative z-10">
        <p>© {new Date().getFullYear()} <span className="text-white font-medium drop-shadow-md">DeadlineAman</span>. All rights reserved.</p>
        <p className="mt-1 drop-shadow-sm">Kepuasan Anda adalah Prioritas Kami</p>
      </div>
    </footer>
  );
}