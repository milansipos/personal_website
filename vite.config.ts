import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      // extra pages: /impressum/, /datenschutz/ and the 404 page GitHub Pages serves for unknown paths
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        impressum: fileURLToPath(new URL('./impressum/index.html', import.meta.url)),
        datenschutz: fileURLToPath(new URL('./datenschutz/index.html', import.meta.url)),
        notfound: fileURLToPath(new URL('./404.html', import.meta.url)),
      },
    },
  },
})
