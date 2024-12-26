/// <reference types='vitest' />
import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  root: __dirname,
  define: {
    'process.env': process.env, // Access environment variables in code
  },
  cacheDir: '../../node_modules/.vite/apps/home',
  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4301,
    host: 'localhost',
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './HomeApp': './src/app/App.tsx',
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@tanstack/react-query"
      ],
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    modulePreload: false,
    outDir: "../../dist/apps/home",
    target: "esnext",
    minify: false,
    sourcemap: true,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@api": `${path.resolve(__dirname, "./src/api/index")}`,
      "@pages": `${path.resolve(__dirname, "./src/app/pages/index")}`,
      "@models": `${path.resolve(__dirname, "./src/models/index")}`,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      enabled: true,
      exclude: [
        ...configDefaults.exclude,
        'src/models/*',
        'src/test/**',
        'src/index.tsx',
        '**/main.tsx',
        '**/index.ts',
        '**/*.d.ts',
        '**/*.mocks.ts'
      ],
      reporter: ['json', 'lcov', 'text', 'clover', 'html'],
      reportsDirectory: '../../coverage/apps/home',
      provider: 'v8',
    },
  },
});
