const path = require("path");

// Externals can come from an NPM package, CDN asset, Azure storage, etc.
// For simplicity, we're using require() and reusing the import map.
const { imports } = require("../importmap.json");
const externals = Object.keys(imports);

module.exports = [
  // Legacy version kept around because search relies on it.
  {
    mode: "production",
    entry: "./src/toolkit.v1.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "toolkit-browser.1.54.1.js",
      libraryTarget: "system",
    },
    externals,
  },
  // Browser version
  {
    mode: "production",
    entry: "./src/toolkit.v2.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `toolkit-browser.${process.env.npm_package_version}.js`,
      libraryTarget: "system",
    },
    externals,
  },
  // Node version
  {
    mode: "development",
    entry: "./src/toolkit.v2.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `toolkit-node.js`,
      libraryTarget: "commonjs2",
    },
    devtool: false,
  },
];
