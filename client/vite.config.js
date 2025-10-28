import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(),
     tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // alias for src
      scenes: path.resolve(__dirname, './src/scenes'), // optional shortcut
      components: path.resolve(__dirname, './src/components') // optional shortcut
    }
  }
})
