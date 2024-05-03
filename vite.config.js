import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@emailjs/browser': '@emailjs/browser/dist/email.min.js'
    },
  },
});
