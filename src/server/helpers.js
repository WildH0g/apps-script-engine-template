/**
 * Genearates a two-dimensional array of random hexadecimal colors
 * @param {number} numRows Number of rows in the array
 * @param {number} numCols Number of columns in each row
 * @returns {import("../../types/colors.js").HexColor[][]} Two-dimensional array of hexadecimal colors
 */
export function generateRandomHexColor(numRows, numCols) {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, getRandomColor)
  );
}

/**
 * Generates a random hexadecimal color
 * @returns {import("../../types/colors.js").HexColor} Random hexadecimal color
 */
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * @typedef {Object} GASClass
 * @property {typeof DocumentApp | typeof FormApp | typeof SlidesApp | typeof SpreadsheetApp} gasClass - The class of the Google Apps Script app.
 */

/**
 * @typedef {Object} AppName
 * @property {'DocumentApp'|'FormApp'|'SlidesApp'|'SpreadsheetApp'} name - The name of the app.
 */

/**
 * Get the context of the Google Apps Script app. Works in editors: Docs, Forms, Slides, and Sheets.
 * @returns {{gasClass: GASClass, name: AppName, ui: GoogleAppsScript.Base.Ui}}
 */
export function getContext() {
  const contexts = [
    { gasClass: DocumentApp, name: 'DocumentApp' },
    { gasClass: FormApp, name: 'FormApp' },
    { gasClass: SlidesApp, name: 'SlidesApp' },
    { gasClass: SpreadsheetApp, name: 'SpreadsheetApp' },
  ];
  let ui = null;
  let context = null;
  contexts.forEach(_context => {
    if (null !== ui) return;
    try {
      ui = _context.gasClass.getUi();
      context = _context;
      context.ui = ui;
      console.log(`Selected context: ${_context.name}`);
    } catch (err) {
      ui = null;
      context = null;
    }
  });
  return context;
}
