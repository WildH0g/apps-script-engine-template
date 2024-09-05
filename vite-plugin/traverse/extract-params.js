/**
 * Extracts parameter names and default values from a function node.
 * @param {Array} params - The parameters node array of the function.
 * @returns {Array} - An array of parameter objects with name and defaultValue.
 */
export default function extractParameters(params) {
  return params.map(param => {
    if (param.type === 'Identifier') {
      return { name: param.name };
    } else if (
      param.type === 'AssignmentPattern' &&
      param.left.type === 'Identifier'
    ) {
      return { name: param.left.name, defaultValue: param.right.value };
    } else if (param.type === 'RestElement') {
      return { name: `...${param.argument.name}` };
    }
    return { name: undefined };
  });
}