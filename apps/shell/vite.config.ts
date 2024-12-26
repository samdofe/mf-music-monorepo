/// <reference types='vitest' />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {nxCopyAssetsPlugin} from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';
import {configDefaults} from 'vitest/config';
import path from 'path';
//const deps = require("./package.json").dependencies;

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/shell',
  server: {
    port: 4200,
    host: 'localhost'
  },
  preview: {
    port: 4300,
    host: 'localhost'
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'shell',
      remotes: {
        podcast: "http://localhost:4302/assets/remoteEntry.js"
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@tanstack/react-query"
      ],
    })
  ],
  /*
   * Uncomment this if you are using workers.
   * worker: {
   *  plugins: [ nxViteTsPaths() ],
   * },
   */
  build: {
    modulePreload: false,
    outDir: '../../dist/apps/shell',
    target: 'esnext',
    minify: false,
    sourcemap: true,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@layouts": `${path.resolve(__dirname, "./src/app/layouts/index")}`,
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
      reportsDirectory: '../../coverage/apps/shell',
      provider: 'v8'
    }
  }
});
