export function randomizeCellColors() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange('A1:E20');

  const colors = generateRandomHexColor(
    range.getNumRows(),
    range.getNumColumns()
  );

  range.setBackgrounds(colors);
}

export function generateRandomHexColor(
  numRows: number,
  numCols: number
): string[][] {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, getRandomColor)
  );
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
