
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@strapi/design-system': path.resolve(__dirname, 'node_modules/@strapi/design-system'),
      '@strapi/helper-plugin': path.resolve(__dirname, 'node_modules/@strapi/helper-plugin'),
      '@strapi/icons': path.resolve(__dirname, 'node_modules/@strapi/icons'),
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  server: {
    port: 8080
  }
});
