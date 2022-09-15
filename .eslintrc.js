module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: "airbnb-base",
  overrides: [
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    tsconfigRootDir: ".",
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["src", "./src"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx", '.json'],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", '.json'],
      },
    }
  },
  rules: {
    "no-bitwise": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-restricted-syntax": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "no-sequences": 0,
    "no-loop-func": 0,
    "no-nested-ternary": 0,
    "@typescript-eslint/no-unused-vars": "warn",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "warn"
  }
};
