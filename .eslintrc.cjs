module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"],
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    indent: "error",
    quotes: ["error", "double"],
  },
};
