import t from '@babel/traverse';
const traverse = t.default;

/**
 * Collects all function declarations in the AST.
 * @param {Object} ast - The AST of the minified IIFE.
 * @returns {Map} - A map of function names to their AST nodes.
 */
export default function collectFunctionDeclarations(ast) {
  const functionMap = new Map();

  traverse(ast, {
    FunctionDeclaration(path) {
      const node = path.node;
      functionMap.set(node.id.name, node);
    },
  });

  return functionMap;
}