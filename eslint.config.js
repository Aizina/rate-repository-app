const js = require("@eslint/js");
const globals = require("globals");
const reactPlugin = require("eslint-plugin-react");
const reactNativePlugin = require("eslint-plugin-react-native");

module.exports = [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}", "App.js"],
    ignores: ["node_modules/**", ".expo/**"],

    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }, 
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        __DEV__: "readonly",
      },
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
