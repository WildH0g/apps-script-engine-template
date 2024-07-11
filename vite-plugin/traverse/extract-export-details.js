import extractParameters from './extract-params';
import t from '@babel/traverse';
const traverse = t.default;

/**
 * Extracts export details from AST based on the exports identifier and function map.
 * @param {Object} ast - The AST of the minified IIFE.
 * @param {string} exportsIdentifier - The name of the exports identifier.
 * @param {Map} functionMap - A map of function names to their AST nodes.
 * @returns {Array} - An array of objects with export details.
 */
export default function extractExportDetails(ast, exportsIdentifier, functionMap) {
  const exports = [];

  traverse(ast, {
    AssignmentExpression(path) {
      const node = path.node;

      if (!node.left.object || node.left.object.name !== exportsIdentifier)
        return;

      const exportName = node.left.property.name;
      const exportDetails = { name: exportName, parameters: [] };

      if (
        node.right.type === 'Identifier' &&
        functionMap.has(node.right.name)
      ) {
        const functionNode = functionMap.get(node.right.name);
        exportDetails.parameters = extractParameters(functionNode.params);
      }

      if (
        ['FunctionExpression', 'ArrowFunctionExpression'].includes(
          node.right.type
        )
      ) {
        exportDetails.parameters = extractParameters(node.right.params);
      }

      exports.push(exportDetails);
    },
  });

  return exports;
}