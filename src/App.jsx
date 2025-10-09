import { Title, Meta, Link } from "react-head";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PricingSection from "./components/PricingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* 🌐 SEO GLOBAL TAGS */}
      <Title>Deadline Aman - Jasa Pembuatan Software & Website Custom</Title>
      <Meta
        name="description"
        content="Deadline Aman adalah perusahaan pengembang software custom dan website profesional. Kami membantu bisnis Anda memiliki sistem digital yang efisien, cepat, dan aman."
      />
      <Meta
        name="keywords"
        content="jasa pembuatan software, jasa pembuatan website, software house, web development, sistem custom, aplikasi bisnis, Deadline Aman"
      />
      <Meta property="og:title" content="Deadline Aman - Jasa Pembuatan Software & Website Custom" />
      <Meta
        property="og:description"
        content="Deadline Aman menyediakan solusi software custom dan website profesional untuk bisnis, startup, dan instansi. Didesain sesuai kebutuhan Anda."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://deadline-aman.vercel.app/" />
      <Meta property="og:image" content="https://deadline-aman.vercel.app/D rm.png" />
      <Link rel="canonical" href="https://deadline-aman.vercel.app/" />
      <meta name="google-site-verification" content="DfVkSwR-rbT1WTG4U4_rvM2cH0zqjDk0oY1meH12wco" />
      <Meta name="robots" content="index, follow" />
      <Meta charSet="utf-8" />

      {/* Schema.org JSON-LD untuk rich result */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Deadline Aman",
            "url": "https://deadline-aman.vercel.app",
            "logo": "https://deadline-aman.vercel.app/D rm.png",
            "description": "Deadline Aman adalah perusahaan software house yang menyediakan jasa pembuatan software custom, aplikasi bisnis, dan website profesional untuk berbagai sektor industri.",
            "founder": {
              "@type": "Person",
              "name": "Tim Deadline Aman"
            },
            "sameAs": [
              "https://www.linkedin.com/company/deadline-aman",
              "https://instagram.com/deadlineaman"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-812-5205-1253",
              "contactType": "Customer Support",
              "areaServed": "ID",
              "availableLanguage": "Indonesian"
            }
          }
        `}
      </script>

      {/* 🧱 Struktur Asli Website (tidak diubah) */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ProjectsSection />
        <ContactSection />
        <ProfileSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
