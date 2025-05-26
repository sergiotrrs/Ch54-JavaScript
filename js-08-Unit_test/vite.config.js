// https://vitejs.dev/guide/build.html#multi-page-app

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'src/pages/about-us/about-us.html'),
        contact: resolve(__dirname, 'src/pages/contact/contact.html'),
        products: resolve(__dirname, 'src/pages/products/products.html'),
        register: resolve(__dirname, 'src/pages/register/register.html'),
      },
    },
  },
})