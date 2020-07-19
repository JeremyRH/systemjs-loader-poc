const path = require("path");

// Externals can come from an NPM package, CDN asset, Azure storage, etc.
// For simplicity, we're using require() and reusing the import map.
const { imports } = require("../importmap.json");
const externals = Object.keys(imports);

module.exports = [
  // Browser version
  {
    mode: "production",
    entry: "./src/router.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `router.${process.env.npm_package_version}.js`,
      libraryTarget: "system",
    },
    externals,
  },
  // No node version because this is only used in the actual app.
];
