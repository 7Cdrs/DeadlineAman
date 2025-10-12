// src/components/AboutSection.jsx
import { Users, Target, Code, Zap, Heart, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Visi Kami",
      desc: "Membantu bisnis berkembang melalui solusi teknologi yang inovatif dan efektif"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Misi Kami",
      desc: "Menghadirkan produk digital yang estetis, fungsional, dan berdampak nyata"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Keahlian Kami",
      desc: "Fullstack development dengan teknologi modern dan best practices"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Kecepatan",
      desc: "Pengerjaan cepat tanpa mengorbankan kualitas dan detail produk"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kolaboratif",
      desc: "Komunikasi terbuka dan transparan di setiap tahap pengembangan"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable",
      desc: "Solusi yang dapat berkembang seiring pertumbuhan bisnis Anda"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#38b6ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2a9de6]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#38b6ff] mb-4">
            Tentang Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38b6ff] to-[#2a9de6] mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Kami adalah tim pengembang freelance yang berfokus pada solusi digital modern. 
            Dengan pengalaman di berbagai industri, kami siap mengubah ide Anda menjadi 
            produk digital yang powerful dan user-friendly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-[#38b6ff]/20 rounded-2xl p-8 
              hover:shadow-xl hover:border-[#38b6ff]/40 hover:-translate-y-2 transition-all duration-300
              relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38b6ff]/5 to-[#2a9de6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38b6ff] to-[#2a9de6] 
                text-white rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#38b6ff] mb-3 group-hover:text-[#2a9de6] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-[#38b6ff] mb-2 group-hover:scale-110 transition-transform">
              7+
            </div>
            <p className="text-gray-600 font-medium">Proyek Selesai</p>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-[#38b6ff] mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <p className="text-gray-600 font-medium">Kepuasan Client</p>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-[#38b6ff] mb-2 group-hover:scale-110 transition-transform">
              2+
            </div>
            <p className="text-gray-600 font-medium">Tahun Pengalaman</p>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-[#38b6ff] mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <p className="text-gray-600 font-medium">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}