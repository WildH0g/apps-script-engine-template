/* eslint-env jest */
import { generateRandomHexColor } from '../src/server/server';

describe('generateRandomHexColor', () => {
  it('should generate a 2D array of random hex colors with the correct dimensions', () => {
    // Define the desired number of rows and columns
    const numRows = 20;
    const numCols = 20;

    // Call the function to generate the random hex colors
    const result = generateRandomHexColor(numRows, numCols);

    // Assert the dimensions of the generated colors array
    expect(result.length).toBe(numRows);
    expect(result[0].length).toBe(numCols);

    // Assert that each color in the array is a valid hex color
    result.forEach((row) => {
      row.forEach((color) => {
        expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });
  });
});
