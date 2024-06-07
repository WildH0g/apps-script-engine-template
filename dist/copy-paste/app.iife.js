var __lib__=function(o){"use strict";function a(n,e){return Array.from({length:n},()=>Array.from({length:e},l))}function l(){const n="0123456789ABCDEF";let e="#";for(let t=0;t<6;t++)e+=n[Math.floor(Math.random()*16)];return e}function s(){const n=[{gasClass:DocumentApp,name:"DocumentApp"},{gasClass:FormApp,name:"FormApp"},{gasClass:SlidesApp,name:"SlidesApp"},{gasClass:SpreadsheetApp,name:"SpreadsheetApp"}];let e=null,t=null;return n.forEach(r=>{if(e===null)try{e=r.gasClass.getUi(),t=r,t.ui=e,console.log(`Selected context: ${r.name}`)}catch{e=null,t=null}}),t}function i(){const e=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:E20"),t=a(e.getNumRows(),e.getNumColumns());e.setBackgrounds(t)}function u(){s().ui.createMenu("👨‍🏭 Wurkspaces.dev").addItem("☕🍽️ Boilerplate","showSidebar").addToUi()}function c(){SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile("ui/index"))}return o.onOpen=u,o.randomizeCellColors=i,o.showSidebar=c,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),o}({});

/* eslint-disable no-undef */
function onOpen() {
  return __lib__.onOpen();
}
function randomizeCellColors() {
  return __lib__.randomizeCellColors();
}
function showSidebar() {
  return __lib__.showSidebar();
}