import t from '@babel/traverse';
const traverse = t.default;

/**
 * Identifies the exports identifier used in the IIFE.
 * @param {Object} ast - The AST of the minified IIFE.
 * @returns {string|null} - The name of the exports identifier.
 */
export default function findExportsIdentifier(ast) {
  let exportsIdentifier = null;

  traverse(ast, {
    FunctionExpression(path) {
      const node = path.node;
      if (node.params.length > 0) {
        exportsIdentifier = node.params[0].name;
        path.stop();
      }
    },
  });

  return exportsIdentifier;
}