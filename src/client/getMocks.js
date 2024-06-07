import isJest from './isJest.js';

/**
 * Pauses a function's execution for a specified amount of time.
 * @param {number} ms - The amount of time to pause the function's execution in milliseconds.
 * @returns {Promise<void>} - A promise that resolves after the specified amount of time.
 */
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, isJest() ? 0 : ms));

/**
 * Returns an object containing mock functions for the Google Apps Script API.
 * @param {Function} resolve - The Promise.resolve callback
 * @returns
 */
export default function getMocks(resolve) {
  return {
    async randomizeCellColors() {
      await sleep(1000);
      resolve(true);
    },
  };
}
