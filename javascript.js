const rules = require("./rules");
module.exports = {
  extends: [
    "airbnb", // Uses the recommended configuration from eslint-config-airbnb
    "plugin:jest-dom/recommended",
    "prettier",
    "prettier/react",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    es6: true,
  },
  rules: {
    ...rules,
  },
  plugins: ["html", "prettier", "react-hooks", "testing-library", "jest-dom"],
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
