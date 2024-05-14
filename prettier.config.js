const styleguide = require("@vercel/style-guide/prettier");

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, "prettier-plugin-tailwindcss"],
  semi: true,
  trailingComma: "none",
  singleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  tabWidth: 2,
};
