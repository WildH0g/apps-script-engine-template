/* eslint-disable @typescript-eslint/no-unused-vars */
function getContext(): {
  gasClass:
    | typeof DocumentApp
    | typeof FormApp
    | typeof SlidesApp
    | typeof SpreadsheetApp;
  name: 'DocumentApp' | 'FormApp' | 'SlidesApp' | 'SpreadsheetApp';
  ui: GoogleAppsScript.Base.Ui;
} {
  const contexts = [
    { gasClass: DocumentApp, name: 'DocumentApp' },
    { gasClass: FormApp, name: 'FormApp' },
    { gasClass: SlidesApp, name: 'SlidesApp' },
    { gasClass: SpreadsheetApp, name: 'SpreadsheetApp' },
  ];
  let ui = null;
  let context = null;
  contexts.forEach((_context) => {
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

function onOpen() {
  const ui = getContext().ui;
  ui.createMenu('👨‍🏭 Wurkspaces.dev')
    .addItem('☕🍽️ Boilerplate', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('ui/index')
  );
}
