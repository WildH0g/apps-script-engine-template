import { defineConfig } from 'vite';
import { resolve } from 'path';
import { GoogleAppsScriptExportsPlugin } from './vite-plugin/vite-plugin-appsscript.js';

export default defineConfig({
  plugins: [
    GoogleAppsScriptExportsPlugin(
      'dist/copy-paste/app.iife.js',
      'dist/copy-paste/exports.js',
      '__lib__',
      {
        exportsFile: false,
      }
    ),
  ],
  build: {
    minify: true,
    outDir: resolve(process.cwd(), 'dist/copy-paste'),
    lib: {
      entry: resolve(process.cwd(), 'src/app.js'),
      name: '__lib__',
      fileName: 'app',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        extend: false,
      },
    },
  },
});
