/**
 * Returns an object containing mock functions for the Google Apps Script API.
 * @param {Function} resolve - The Promise.resolve callback
 * @param {Function} reject - The Promise.reject callback
 * @param {Function} sleep - The sleep utility function
 * @returns {object} An object of mock functions.
 */
export default function getDefaultMocks(resolve, reject, sleep) {
  return {
    async randomizeCellColors() {
      await sleep(1000);
      console.log('Colors randomized successfully!');
      resolve(true);
      // reject('Could not randomize colors');
    },
  };
}
