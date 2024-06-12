module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["plugin:react/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "react/no-object-type-as-default-prop": "error",
    "react/prop-types": "off",
  },
};
