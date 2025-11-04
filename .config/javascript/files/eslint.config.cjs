const {
    defineConfig,
} = require("eslint/config");

const googleappsscript = require("eslint-plugin-googleappsscript");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    plugins: {
        googleappsscript,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...googleappsscript.environments.googleappsscript.globals,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./jsconfig.json",
        },
    },

    extends: compat.extends("eslint:recommended", "prettier"),

    rules: {
        "no-extra-boolean-cast": "off",
        "no-unused-vars": "off",
    },
}]);
