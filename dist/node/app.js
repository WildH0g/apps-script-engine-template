function r(n, e) {
  return Array.from(
    { length: n },
    () => Array.from({ length: e }, s)
  );
}
function s() {
  const n = "0123456789ABCDEF";
  let e = "#";
  for (let t = 0; t < 6; t++)
    e += n[Math.floor(Math.random() * 16)];
  return e;
}
function a() {
  const n = [
    { gasClass: DocumentApp, name: "DocumentApp" },
    { gasClass: FormApp, name: "FormApp" },
    { gasClass: SlidesApp, name: "SlidesApp" },
    { gasClass: SpreadsheetApp, name: "SpreadsheetApp" }
  ];
  let e = null, t = null;
  return n.forEach((o) => {
    if (e === null)
      try {
        e = o.gasClass.getUi(), t = o, t.ui = e, console.log(`Selected context: ${o.name}`);
      } catch {
        e = null, t = null;
      }
  }), t;
}
function u() {
  const e = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:E20"), t = r(
    e.getNumRows(),
    e.getNumColumns()
  );
  e.setBackgrounds(t);
}
function p() {
  a().ui.createMenu("👨‍🏭 Wurkspaces.dev").addItem("☕🍽️ Boilerplate", "showSidebar").addToUi();
}
function c() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("ui/index")
  );
}
export {
  p as onOpen,
  u as randomizeCellColors,
  c as showSidebar
};
