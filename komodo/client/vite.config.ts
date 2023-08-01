// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//   ],
//   build: {
//     manifest: true,
//     rollupOptions: {
//       input: './index.html',
//     }
//   }
  // server: {
  //   port: 5173,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       // changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ''),
  //       // secure: false,
  //     },
  //   },
  // },
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:3000', // Replace with your backend server address
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ''),
  //   },
  // },
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
    port: 3000,
  },
});
