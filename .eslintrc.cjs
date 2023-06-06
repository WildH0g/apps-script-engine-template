module.exports = {
  plugins: ['googleappsscript', '@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true,
    'googleappsscript/googleappsscript': true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-extra-boolean-cast': 'off',
  },
};
