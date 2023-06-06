/* eslint-disable @typescript-eslint/no-unused-vars */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('👨‍🏭 Wurkspaces.dev')
    .addItem('☕🍽️ Boilerplate', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('ui/index')
  );
}
