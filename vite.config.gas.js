import { defineConfig } from 'vite';
import { resolve } from 'path';
// import { AppsScriptPlugin } from './vite-plugin/vite-plugin-appsscript.js';

export default defineConfig({
  // plugins: [AppsScriptPlugin('dist/server/server.iife.js', 'randomizeCellColors')],
  build: {
    minify: true,
    outDir: resolve(process.cwd(), 'dist/server'),
    lib: {
      entry: resolve(process.cwd(), 'src/server/server.js'),
      name: 'lib',
      fileName: 'server',
      formats: ['iife'],

    },
    rollupOptions: {
      output: {
        extend: false,
      },
    },
  },
});
