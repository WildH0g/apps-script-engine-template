(function(n,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(n=typeof globalThis<"u"?globalThis:n||self,r(n.init={}))})(this,function(n){"use strict";function r(o,e){return Array.from({length:o},()=>Array.from({length:e},l))}function l(){const o="0123456789ABCDEF";let e="#";for(let t=0;t<6;t++)e+=o[Math.floor(Math.random()*16)];return e}function i(){const o=[{gasClass:DocumentApp,name:"DocumentApp"},{gasClass:FormApp,name:"FormApp"},{gasClass:SlidesApp,name:"SlidesApp"},{gasClass:SpreadsheetApp,name:"SpreadsheetApp"}];let e=null,t=null;return o.forEach(s=>{if(e===null)try{e=s.gasClass.getUi(),t=s,t.ui=e,console.log(`Selected context: ${s.name}`)}catch{e=null,t=null}}),t}function a(){const e=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:E20"),t=r(e.getNumRows(),e.getNumColumns());e.setBackgrounds(t)}function u(){i().ui.createMenu("👨‍🏭 Wurkspaces.dev").addItem("☕🍽️ Boilerplate","showSidebar").addToUi()}function d(){SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile("ui/index"))}n.onOpen=u,n.randomizeCellColors=a,n.showSidebar=d,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});