var lib_ = function(exports) {
  "use strict";
  function generateRandomHexColor(numRows, numCols) {
    return Array.from(
      { length: numRows },
      () => Array.from({ length: numCols }, getRandomColor)
    );
  }
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function getContext() {
    const contexts = [
      { gasClass: DocumentApp, name: "DocumentApp" },
      { gasClass: FormApp, name: "FormApp" },
      { gasClass: SlidesApp, name: "SlidesApp" },
      { gasClass: SpreadsheetApp, name: "SpreadsheetApp" }
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
  function randomizeCellColors() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const range = sheet.getRange("A1:E20");
    const colors = generateRandomHexColor(
      range.getNumRows(),
      range.getNumColumns()
    );
    range.setBackgrounds(colors);
  }
  function onOpen() {
    const ui = getContext().ui;
    ui.createMenu("👨‍🏭 Wurkspaces.dev").addItem("☕🍽️ Boilerplate", "showSidebar").addToUi();
  }
  function showSidebar() {
    SpreadsheetApp.getUi().showSidebar(
      HtmlService.createHtmlOutputFromFile("ui/index")
    );
  }
  exports.onOpen = onOpen;
  exports.randomizeCellColors = randomizeCellColors;
  exports.showSidebar = showSidebar;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
  return exports;
}({});
