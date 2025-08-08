import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/product_card/',
  plugins: [
    tailwindcss(),
  ],
})