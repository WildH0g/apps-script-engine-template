/*eslint no-undef: "off"*/
import polyfillScriptRun from './polyfillScriptRun.js';
polyfillScriptRun();

/**
 * Promisifies google.script.run
 * @param {string} functionName - The name of the Apps Script function to call
 * @param {Array<*>} args - The array of arguments to pass to the Apps Script function
 */
export default async function runGas(functionName, args = []) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      [functionName](...args);
  });
}
