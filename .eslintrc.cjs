/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    ".eslintrc-auto-import.json",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["*.c{js,ts}"],
      env: {
        node: true,
      },
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "vue/multi-word-component-names": "off",
      },
      globals: {
        $ref: "readonly",
        $computed: "readonly",
        $toRef: "readonly",
        $: "readonly",
        $$: "readonly",
      },
    },
  ],
}
