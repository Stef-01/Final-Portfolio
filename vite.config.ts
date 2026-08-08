import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    // The oversized chunks are the lazy Spline/three stack — split and
    // loaded on demand (desktop only), not fixable by further chunking.
    chunkSizeWarningLimit: 2100,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
