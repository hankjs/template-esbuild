const config = require("./.eslintrc.js")

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    project: "./__tests__/tsconfig.json"
  }
};
