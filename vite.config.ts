import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  define: {
    // This exposes the VITE_API_KEY from .env to process.env for compatibility
    'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY)
  }
});