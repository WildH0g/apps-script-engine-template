let polyfilled = false;
import getMocks from './getMocks.js';

/**
 * Polyfills google.script.run with mock functions.
 * @returns {Promise<void>}
 */
export default async function polyfillScriptRun() {
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
    google.script.run = {
      withSuccessHandler: resolve => {
        const mocks = getMocks(resolve);
        return {
          withFailureHandler: () => ({
            ...mocks,
          }),
        };
      },
    };
  }
}
