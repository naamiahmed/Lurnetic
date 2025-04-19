import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // 👈 IMPORTANT!
  plugins: [react()],
  build: {
    outDir: 'dist', // output folder
    assetsDir: 'assets',
  },
});
