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
function getContext() {
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

/**
 * Runs when the Google Apps Script app is opened.
 */
function onOpen() {
  const ui = getContext().ui;
  ui.createMenu('👨‍🏭 Wurkspaces.dev')
    .addItem('☕🍽️ Boilerplate', 'showSidebar')
    .addToUi();
}

/**
 * Shows the sidebar in the Google Apps Script app.
 */
function showSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('ui/index')
  );
}

function randomizeCellColors() {
  /*eslint no-undef: "off"*/
  lib.randomizeCellColors();
}
