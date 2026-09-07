import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: /^@\/(?:admin|shared)\/(.*)/, replacement: path.resolve(__dirname, './src/$1') },
      { find: /^@shared\/(.*)/, replacement: path.resolve(__dirname, './src/$1') },
      { find: /^@admin\/(.*)/, replacement: path.resolve(__dirname, './src/$1') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
  server: {
    port: 5174,
  },
});
