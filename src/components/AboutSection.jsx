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
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#38b6ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#2a9de6]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38b6ff] mb-3 sm:mb-4 px-2"
          >
            Tentang Kami
          </h2>
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="600"
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#38b6ff] to-[#2a9de6] mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"
          ></div>
          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed px-2"
          >
            Kami adalah tim pengembang freelance yang berfokus pada solusi digital modern. 
            Dengan pengalaman di berbagai industri, kami siap mengubah ide Anda menjadi 
            produk digital yang powerful dan user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="group bg-white/80 backdrop-blur-sm border border-[#38b6ff]/20 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 
              hover:shadow-xl hover:border-[#38b6ff]/40 hover:-translate-y-2 transition-all duration-300
              relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#38b6ff]/5 to-[#2a9de6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#38b6ff] to-[#2a9de6] 
                text-white rounded-lg sm:rounded-xl mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#38b6ff] mb-2 sm:mb-3 group-hover:text-[#2a9de6] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div 
            data-aos="flip-left"
            data-aos-delay="0"
            data-aos-duration="800"
            className="group"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38b6ff] mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              7+
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">Proyek Selesai</p>
          </div>
          <div 
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="800"
            className="group"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38b6ff] mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">Kepuasan Client</p>
          </div>
          <div 
            data-aos="flip-left"
            data-aos-delay="200"
            data-aos-duration="800"
            className="group"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38b6ff] mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              2+
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">Tahun Pengalaman</p>
          </div>
          <div 
            data-aos="flip-left"
            data-aos-delay="300"
            data-aos-duration="800"
            className="group"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38b6ff] mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-medium">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}