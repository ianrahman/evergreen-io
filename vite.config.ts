import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 5173,
    strictPort: false,
    host: true // Allow external connections for Cloudflare tunnel
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    // Optimize for Cloudflare Workers
    rollupOptions: {
      output: {
        // Generate efficient chunks for Workers
        manualChunks: undefined,
        // Ensure proper asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Optimize bundle size for Workers
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },
  // Optimize dependencies for Workers environment
  optimizeDeps: {
    include: ['svelte']
  },
  // Configure for production deployment
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
});