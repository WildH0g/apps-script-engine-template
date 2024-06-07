/**
 * @typedef {Object} Setting
 * @property {string} filenName - The name of the file to copy.
 * @property {string} filePath - The path to the file to copy.
 * @property {string} copyTo - The path to copy the file to.
*/

/**
 * @typedef {Object} Env
 * @property {Setting} dev
 * @property {Setting} uat
 * @property {Setting} prod
*/

/** @type {Env} */
export default {
  dev: [
    {
      filenName: '.clasp.json',
      filePath: 'env-mgt/dev',
      copyTo: './'
    }
  ],
  uat: [
    {
      filenName: '.clasp.json',
      filePath: 'env-mgt/uat',
      copyTo: './'
    }
  ],
  prod: [
    {
      filenName: '.clasp.json',
      filePath: 'env-mgt/prod',
      copyTo: './'
    }
  ],
}