/*eslint no-constant-condition: "off"*/
// @ts-ignore
if (false) require('@types/google-apps-script');
/**
 * Randomizes the background color of cells in the range A1:E20
 * @returns {void}
 */
export function randomizeCellColors() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange('A1:E20');

  const colors = generateRandomHexColor(
    range.getNumRows(),
    range.getNumColumns()
  );

  range.setBackgrounds(colors);
}

/**
 * Genearates a two-dimensional array of random hexadecimal colors
 * @param {number} numRows Number of rows in the array
 * @param {number} numCols Number of columns in each row
 * @returns {string[][]} Two-dimensional array of hexadecimal colors
 */
export function generateRandomHexColor(numRows, numCols) {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, getRandomColor)
  );
}

/**
 * Generates a random hexadecimal color
 * @returns {string} Random hexadecimal color
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
