const path = require("path");

// Externals can come from an NPM package, CDN asset, Azure storage, etc.
// For simplicity, we're using require() and reusing the import map.
const { imports } = require("../importmap.json");
const externals = Object.keys(imports);

module.exports = [
  // Browser version
  {
    mode: "production",
    entry: "./src/content-manager.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `content-manager-browser.${process.env.npm_package_version}.js`,
      libraryTarget: "system",
    },
    externals,
  },
  // Node version
  {
    mode: "development",
    entry: "./src/content-manager.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `content-manager-node.js`,
      libraryTarget: "commonjs2",
    },
    devtool: false,
  },
];
