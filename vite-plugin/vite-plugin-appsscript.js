/** @module GoogleAppsScriptExportsPlugin */

import fs from 'fs';
import { resolve } from 'path';
import { parse } from '@babel/parser';
import t from '@babel/traverse';
import extractExports from './traverse/extract-exports.js';

const traverse = t.default;

/**
 * Extracts the exports as stand-alone functions
 * @param {string} origPath The file to extract the exports from
 * @param {string} exportsPath The file to extract the exports to
 * @param {string} varName The name of the variable that stores the return value of the IIFE
 * @param {GasExportOptions} [options] The options for the plugin
 */
export async function GoogleAppsScriptExportsPlugin(
  origPath = 'dist/gas/server/server.iife.js',
  exportsPath = 'dist/gas/exports.js',
  varName = 'lib_',
  options = {
    exportsFile: true,
    copyFiles: [{ from: './appsscript.json', to: 'dist/gas/appsscript.json' }],
  }
) {
  return {
    name: 'vite-plugin-appscript-exports',
    async closeBundle() {
      try {
        console.log('closeBundle');
        const code = fs.readFileSync(origPath, 'utf-8');
        const ast = parse(code);
        const exportDetails = extractExports(ast);
        // fs.writeFileSync(
        //   'exportDetails.json',
        //   JSON.stringify(exportDetails, null, 2)
        // );

        const getParam = paramObj => {
          if (!paramObj.defaultValue) return paramObj.name;
          if ('string' === typeof paramObj.defaultValue)
            return `${paramObj.name} = '${paramObj.defaultValue.replace(
              /'/g,
              "\\'"
            )}'`;
          return `${paramObj.name} = ${paramObj.defaultValue}`;
        };
        const exportsText =
          '/* eslint-disable no-undef */\n' +
          exportDetails
            .map(fn => {
              return null === fn.parameters
                ? `const ${fn.name} = ${varName}.${fn.name};`
                : [
                    `function ${fn.name}(${fn.parameters
                      .map(getParam)
                      .join(', ')}) {`,
                    `  return ${varName}.${fn.name}(${fn.parameters
                      .map(p => p.name)
                      .join(', ')});`,
                    '}',
                  ].join('\n');
            })
            .join('\n');

        fs.writeFileSync(exportsPath, exportsText, 'utf8');

        if (false === options.exportsFile) {
          const exp = fs.readFileSync(
            resolve(process.cwd(), exportsPath),
            'utf8'
          );
          fs.appendFileSync(
            resolve(process.cwd(), origPath),
            `\n${exp}`,
            'utf8'
          );
          fs.unlinkSync(resolve(process.cwd(), exportsPath));
        }
      } catch (err) {
        console.error(`Could not create exports: ${err}`);
      }

      if (!options.copyFiles || !options.copyFiles.length) return;
      options.copyFiles.forEach(file => {
        fs.copyFileSync(
          resolve(process.cwd(), file.from),
          resolve(process.cwd(), file.to)
        );
      });
    },
  };
}
