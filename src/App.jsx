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
