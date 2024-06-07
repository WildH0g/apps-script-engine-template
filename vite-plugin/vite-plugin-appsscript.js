import fs from 'fs';
import path from 'path';

/**
 * Exports the initianton function from the library for better semantics
 * @param {string} filePath - The path to the code to process
 * @param {string} propName - The name of the prperty to extract from the IIFE
 * @returns {object} - Rollup plugin object
 */
export function AppsScriptPlugin(filePath, propName) {
  return {
    name: 'vite-plugin-appscript',
    async closeBundle() {
      setTimeout(() => {
        filePath = path.join(process.cwd(), filePath);
        let data = fs.readFileSync(filePath, 'utf8');
        data += `\n${propName} = ${propName}.${propName};`;
        fs.mkdirSync(filePath.split('/').slice(0, -1).join('/'), {
          recursive: true,
        });
        fs.writeFileSync(filePath, data, 'utf8');
        fs.copyFileSync('appsscript.json', 'dist/appsscript.json');
      }, 0);
    },
  };
}
