export default function handler(req, res) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://deadlineaman.my.id/</loc><priority>1.0</priority></url>
  <url><loc>https://deadlineaman.my.id/#about</loc></url>
  <url><loc>https://deadlineaman.my.id/#pricing</loc></url>
  <url><loc>https://deadlineaman.my.id/#projects</loc></url>
  <url><loc>https://deadlineaman.my.id/#contact</loc></url>
</urlset>`);
}
