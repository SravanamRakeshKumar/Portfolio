import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures Vercel uses the correct output folder
    emptyOutDir: true, // Clears the dist folder before building
  },
  server: {
    port: 3000,
    host: true // Allows Vercel to access the development server
  },
  preview: {
    port: 5000, // Use a different port for preview mode
    strictPort: true
  }
});



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });
