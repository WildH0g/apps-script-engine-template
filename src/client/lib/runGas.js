/*eslint no-undef: "off"*/
import { polyfillScriptRun } from './mocking/index.js';
polyfillScriptRun();

/**
 * Promisifies google.script.run
 * @param {string} functionName - The name of the Apps Script function to call
 * @param {Array<*>} args - The array of arguments to pass to the Apps Script function
 */
export default async function runGas(functionName, args = []) {
  return new Promise((resolve, reject) => {
    // @ts-expect-error: google.script.run is a global provided by Google Apps Script
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      [functionName](...args);
  });
}
