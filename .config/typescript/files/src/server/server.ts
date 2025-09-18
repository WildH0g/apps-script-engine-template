declare let SpreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;
declare let HtmlService: GoogleAppsScript.HTML.HtmlService;

import { generateRandomHexColor, getContext } from './helpers';

/**
 * Randomizes the background color of cells in the range A1:E20
 * @returns {void}
 */
export function randomizeCellColors(): void {
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
export function onOpen(): void {
  const context = getContext();
  if (context && context.ui) {
    context.ui
      .createMenu('👨‍🏭 Wurkspaces.dev')
      .addItem('☕🍽️ Boilerplate', 'showSidebar')
      .addToUi();
  }
}

/**
 * Shows the sidebar in the Google Apps Script app.
 */
export function showSidebar(): void {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('ui/index')
  );
}
