import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ FIXED CONFIG — no need to include sitemap.xml manually
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Pastikan Vite tidak ganggu file public seperti XML
  publicDir: 'public',

  server: {
    mimeTypes: {
      'application/xml': ['xml'],
    },
  },
})
