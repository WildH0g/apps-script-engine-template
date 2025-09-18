module.exports = {
  plugins: ['googleappsscript'],
  env: {
    browser: true,
    es2021: true,
    node: true,
    'googleappsscript/googleappsscript': true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './jsconfig.json',
  },
  rules: {
    'no-extra-boolean-cast': 'off',
    'no-unused-vars': 'off',
  },
};
