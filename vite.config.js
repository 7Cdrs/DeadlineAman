import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sitemap: resolve(__dirname, 'public/sitemap.xml'), // pastikan sitemap ikut ke dist
      },
    },
  },

  // Pastikan Vite serve file XML dengan benar saat di dev
  server: {
    mimeTypes: {
      'application/xml': ['xml'],
    },
  },
})
