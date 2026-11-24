import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' permite publicar dist/ en cualquier subcarpeta (p. ej. GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
