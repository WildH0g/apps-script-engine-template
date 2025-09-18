import * as ExportedFunctions from './export-test.js';
console.warn(
  'DEBUGPRINT[162]: import-test.js:1: ExportedFunctions=',
  ExportedFunctions
);

Object.keys(ExportedFunctions).forEach((name, fn) => {
  ExportedFunctions[name]();
});

