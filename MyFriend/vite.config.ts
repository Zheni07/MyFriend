import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
// https://vite.dev/config/
export default defineConfig({
  base:'',
  plugins: [react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  assetsInclude: ['**/*.br'],
})
