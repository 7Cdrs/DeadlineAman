import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

// URL utama websitemu
const SITE_URL = "https://deadline-aman.vercel.app";

async function generateSitemap() {
  // Daftar semua halaman utama di projectmu
  const links = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/pricing", changefreq: "monthly", priority: 0.8 },
    { url: "/projects", changefreq: "monthly", priority: 0.7 },
    { url: "/contact", changefreq: "monthly", priority: 0.7 },
    { url: "/profile", changefreq: "monthly", priority: 0.7 },
  ];

  const sitemap = new SitemapStream({ hostname: SITE_URL });

  const writeStream = createWriteStream(resolve("./public/sitemap.xml"));
  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap berhasil dibuat di /public/sitemap.xml");
}

generateSitemap().catch((err) => {
  console.error("❌ Gagal membuat sitemap:", err);
});
