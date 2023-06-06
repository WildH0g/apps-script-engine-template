import polyfillScriptRun from './polyfillScriptRun';

polyfillScriptRun();
export default async function runGas(functionName, args = []) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      [functionName](...args);
  });
}
