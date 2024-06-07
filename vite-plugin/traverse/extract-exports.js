import findExportsIdentifier from './find-exports-identifier';
import collectFunctionDeclarations from './collect-function-declarations';
import extractExportDetails from './extract-export-details';

/**
 * Extracts export details from AST.
 * @param {Object} ast - The AST of the minified IIFE.
 * @returns {Array} - An array of objects with export details.
 */
export default function extractExports(ast) {
  const exportsIdentifier = findExportsIdentifier(ast);
  if (!exportsIdentifier) {
    throw new Error('Could not find the exports identifier');
  }

  const functionMap = collectFunctionDeclarations(ast);
  return extractExportDetails(ast, exportsIdentifier, functionMap);
}
