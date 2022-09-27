const rules = require("./rules");
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "testing-library",
    "jest-dom",
  ],
  extends: [
    "airbnb",
    "plugin:jest-dom/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:import/typescript",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    "prettier",
    "prettier/react",
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...rules,
    ...{
      "no-use-before-define": "off", // turn off airbnb no-use-before-define
      "@typescript-eslint/no-use-before-define": "warn", // turn on @typescript no-use-before-define, see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
      "no-unused-vars": "off", // turn off the eslint core rule and turn on the typescript-eslint rule
      "@typescript-eslint/no-unused-vars": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
      "no-shadow": "off", // turn off the eslint core rule and turn on the typescript-eslint rule
      "@typescript-eslint/no-shadow": "error", // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md
    },
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
