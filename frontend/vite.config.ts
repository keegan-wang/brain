import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/app/static',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/analyze': 'http://127.0.0.1:8000',
      '/map': 'http://127.0.0.1:8000',
      '/summary': 'http://127.0.0.1:8000',
      '/feedback': 'http://127.0.0.1:8000',
      '/ingest': 'http://127.0.0.1:8000',
      '/ws': {
        target: 'ws://127.0.0.1:8000',
        ws: true,
      },
      '/docs': 'http://127.0.0.1:8000',
      '/ready': 'http://127.0.0.1:8000',
    }
  }
})
