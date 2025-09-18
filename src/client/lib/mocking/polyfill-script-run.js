import isJest from './is-jest.js';
import mockStrategies from './mock-strategies.js';

let polyfilled = false;

/** Pauses a function's execution for a specified amount of time.
 * @param {number} ms - The amount of time to pause the function's execution in milliseconds.
 * @returns {Promise<void>} - A promise that resolves after the specified amount of time.
 */
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, isJest() ? 0 : ms));

/**
 * Polyfills google.script.run with mock functions based on the provided strategy.
 * @param {string} strategyName - The name of the mock strategy to use (e.g., 'default').
 * @returns {Promise<void>}
 */
export default async function polyfillScriptRun(strategyName = 'default') {
  if (polyfilled) return;
  polyfilled = true;

  const _window =
    'undefined' !== typeof window
      ? window
      : 'undefined' !== typeof globalThis
        ? globalThis
        : {};
  const google = _window?.google || {};
  _window.google = google;

  if (!google.script || !google.script.run) {
    google.script = google.script || {};
    let successHandler = null;
    let failureHandler = null;

    const getMocks = mockStrategies[strategyName];
    if (!getMocks) {
      console.warn(
        `Mock strategy '${strategyName}' not found. Using an empty mock.`
      );
      // Provide an empty mock if the strategy is not found
      google.script.run = {
        withSuccessHandler: handler => {
          successHandler = handler;
          return google.script.run;
        },
        withFailureHandler: handler => {
          failureHandler = handler;
          return google.script.run;
        },
      };
      return;
    }

    const mockRun = {
      withSuccessHandler: handler => {
        successHandler = handler;
        return mockRun;
      },
      withFailureHandler: handler => {
        failureHandler = handler;
        return mockRun;
      },
      ...getMocks(
        result => successHandler && successHandler(result),
        error => failureHandler && failureHandler(error),
        sleep
      ),
    };
    google.script.run = mockRun;
  }
}
