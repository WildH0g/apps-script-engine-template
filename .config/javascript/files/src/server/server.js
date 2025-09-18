import { generateRandomHexColor, getContext } from './helpers.js';

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
 * Runs when the Google Apps Script app is opened.
 */
export function onOpen() {
  const ui = getContext().ui;
  ui.createMenu('👨‍🏭 Wurkspaces.dev')
    .addItem('☕🍽️ Boilerplate', 'showSidebar')
    .addToUi();
}

/**
 * Shows the sidebar in the Google Apps Script app.
 */
export function showSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('ui/index')
  );
}
