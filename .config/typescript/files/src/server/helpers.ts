declare let DocumentApp: GoogleAppsScript.Document.DocumentApp;
declare let FormApp: GoogleAppsScript.Forms.FormApp;
declare let SlidesApp: GoogleAppsScript.Slides.SlidesApp;
declare let SpreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;

import { HexColor } from '../../types/colors';

/**
 * Genearates a two-dimensional array of random hexadecimal colors
 * @param numRows Number of rows in the array
 * @param numCols Number of columns in each row
 * @returns Two-dimensional array of hexadecimal colors
 */
export function generateRandomHexColor(
  numRows: number,
  numCols: number
): HexColor[][] {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, getRandomColor)
  );
}

/**
 * Generates a random hexadecimal color
 * @returns Random hexadecimal color
 */
export function getRandomColor(): HexColor {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color as HexColor;
}

interface GASClass {
  gasClass:
    | typeof DocumentApp
    | typeof FormApp
    | typeof SlidesApp
    | typeof SpreadsheetApp;
  name: 'DocumentApp' | 'FormApp' | 'SlidesApp' | 'SpreadsheetApp';
}

interface Context extends GASClass {
  ui: GoogleAppsScript.Base.Ui;
}

/**
 * Get the context of the Google Apps Script app. Works in editors: Docs, Forms, Slides, and Sheets.
 * @returns The context of the Google Apps Script app, or null if no context is found.
 */
export function getContext(): Context | null {
  const contexts: GASClass[] = [
    { gasClass: DocumentApp, name: 'DocumentApp' },
    { gasClass: FormApp, name: 'FormApp' },
    { gasClass: SlidesApp, name: 'SlidesApp' },
    { gasClass: SpreadsheetApp, name: 'SpreadsheetApp' },
  ];
  let ui: GoogleAppsScript.Base.Ui | null = null;
  let context: Context | null = null;
  for (const _context of contexts) {
    if (null !== ui) break;
    try {
      ui = _context.gasClass.getUi();
      context = { ..._context, ui };
      console.log(`Selected context: ${_context.name}`);
    } catch {
      ui = null;
      context = null;
    }
  }
  return context;
}
