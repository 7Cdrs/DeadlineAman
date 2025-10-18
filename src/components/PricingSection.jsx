import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const { t, i18n } = useTranslation();
  const pricing = t("pricing.packages", { returnObjects: true });

  // 🔘 Toggle Bahasa (dari fungsi tombol lama)
  const switchLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
  };

  return (
    <section
      id="pricing"
      className="py-10 sm:py-12 md:py-16 bg-gray-50 text-center"
    >
      {/* 🔹 Tombol Pricing International (pindahan dari Header) */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <button
          onClick={switchLanguage}
          className="px-4 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
          style={{
            backgroundColor: "#38b6ff",
            color: "#ffffff",
          }}
        >
          Pricing International
        </button>
      </div>

      <h2
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4"
        style={{ color: "#38b6ff" }}
      >
        {t("pricing.title")}
      </h2>

      <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-3 sm:px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
        {pricing.map((item, index) => (
          <div
            key={item.name}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="800"
            className={`bg-white shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-t-4 hover:-translate-y-2 transition transform ${
              index === 1 ? "lg:scale-105" : ""
            }`}
            style={{ borderTopColor: "#38b6ff" }}
          >
            <h3
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 200}
              data-aos-duration="600"
              className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2"
              style={{ color: "#38b6ff" }}
            >
              {item.name}
            </h3>
            <p
              data-aos="fade-up"
              data-aos-delay={index * 150 + 300}
              data-aos-duration="700"
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-2.5 sm:mb-3 md:mb-4"
            >
              {item.price}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay={index * 150 + 400}
              data-aos-duration="700"
              className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed"
            >
              {item.desc}
            </p>

            <ul className="text-left space-y-2 sm:space-y-2.5 md:space-y-2 mb-5 sm:mb-6">
              {item.features.map((feature, i) => (
                <li
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={index * 150 + 500 + i * 50}
                  data-aos-duration="600"
                  className="flex items-start gap-2 sm:gap-2.5"
                >
                  <CheckCircle2
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#38b6ff" }}
                  />
                  <span className="text-gray-700 text-xs sm:text-sm leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
