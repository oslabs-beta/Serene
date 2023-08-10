import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],  
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}] //@ will actually be current directory folder with SRC
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: './index.html',
    }
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: {
      "/api": {
        // target: "http://127.0.0.1:3000",
        target: "http://localhost:3000",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
        // secure: false,
      },
    },
  },
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   proxy: {
//     '/api': {
//       target: 'http://localhost:3000', // Replace with your backend server address
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, ''),
//     },
//   },
// })
//   server: {
//     host: true,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//     port: 3000,
//   },
// });
