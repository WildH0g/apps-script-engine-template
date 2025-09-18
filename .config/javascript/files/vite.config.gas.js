import { defineConfig } from 'vite';
import { resolve } from 'path';
import { GoogleAppsScriptExportsPlugin } from './vite-plugin/vite-plugin-appsscript.js';

export default defineConfig({
  plugins: [GoogleAppsScriptExportsPlugin()],
  build: {
    minify: false,
    outDir: resolve(process.cwd(), 'dist/gas/server'),
    lib: {
      entry: resolve(process.cwd(), 'src/server/server.js'),
      name: 'lib_',
      fileName: 'server',
      formats: ['iife'],
    },
  },
});
