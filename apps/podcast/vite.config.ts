/// <reference types='vitest' />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {nxCopyAssetsPlugin} from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';
import { configDefaults } from 'vitest/config';
import path from 'path';

export default defineConfig({
  base: process.env.VITE_PODCAST_DOMAIN || '/',
  root: __dirname,
  define: {
    // Access environment variables in code
    'process.env': process.env,
  },
  cacheDir: '../../node_modules/.vite/apps/podcast',
  server: {
    port: 4201,
    host: 'localhost'
  },
  preview: {
    port: 4301,
    host: 'localhost'
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'podcast',
      filename: 'remoteEntry.js',
      exposes: {
        './PodcastApp': './src/app/app.tsx'
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@tanstack/react-query"
      ],
    }),
  ],
  /*
   * Uncomment this if you are using workers.
   * worker: {
   *  plugins: [ nxViteTsPaths() ],
   * },
   */
  build: {
    modulePreload: false,
    outDir: "../../dist/apps/podcast",
    target: "esnext",
    minify: true,
    sourcemap: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@api": `${path.resolve(__dirname, "./src/api/index")}`,
      "@models": `${path.resolve(__dirname, "./src/models/index")}`,
      "@ui": `${path.resolve(__dirname, "./src/ui/index")}`,
      "@hooks": `${path.resolve(__dirname, "./src/hooks/index")}`,
      "@mocks": `${path.resolve(__dirname, "../../mocks/data")}`,
      "@layouts": `${path.resolve(__dirname, "./src/layouts/index")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/index")}`,
      "@store": `${path.resolve(__dirname, "./src/store/index")}`
    },
  },
  test: {
    watch: false,
    globals: true,
    setupFiles: `${path.resolve(__dirname, "./src/tests/setup.ts")}`,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      enabled: true,
      exclude: [
        ...configDefaults.exclude,
        'src/models/*',
        'src/tests/**',
        'src/index.tsx',
        '**/main.tsx',
        '**/index.ts',
        '**/*.d.ts',
        '**/*.mocks.ts'
      ],
      reporter: ['json', 'lcov', 'text', 'clover', 'html'],
      reportsDirectory: '../../coverage/apps/podcast',
      provider: 'v8'
    }
  }
});
