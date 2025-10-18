import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeadProvider } from "react-head";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";

import en from "./i18n/en.json";
import id from "./i18n/id.json";

// 🔧 Inisialisasi i18n
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    id: { translation: id },
  },
  lng: "id", // bahasa default
  fallbackLng: "id",
  interpolation: { escapeValue: false },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HeadProvider>
  </StrictMode>
);
