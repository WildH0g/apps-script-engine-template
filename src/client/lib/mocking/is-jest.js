/**
 * Determines whether Jest is running
 * @returns {boolean} True if Jest is running, false otherwise
 */
export default () => typeof globalThis.it === 'function';
