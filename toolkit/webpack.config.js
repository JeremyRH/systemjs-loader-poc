const path = require("path");

// Externals are derived from the import map.
const { imports } = require("../importmap.json");
const externals = Object.keys(imports);

// Transforms dynamic import to SystemJS.import. Will only transform imports
// listed in the import map.
function renderDynamicImport(importSpecifier) {
  if (imports.hasOwnProperty(importSpecifier)) {
    return { left: "SystemJS.import(", right: ")" };
  }
}

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
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            // A babel plugin is used to transform dynamic import so we need babel-loader.
            loader: "babel-loader",
            options: {
              plugins: [
                [
                  "babel-plugin-render-dynamic-import",
                  { renderDynamicImport },
                ],
              ],
            },
          },
        },
      ],
    },
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
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            // A babel plugin is used to transform dynamic import so we need babel-loader.
            loader: "babel-loader",
            options: {
              plugins: [
                [
                  "babel-plugin-render-dynamic-import",
                  { renderDynamicImport },
                ],
              ],
            },
          },
        },
      ],
    },
  },
  // Node version
  // No need to transform dynamic imports for node, webpack does this for us.
  {
    mode: "development",
    entry: "./src/toolkit.v2.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `toolkit-node.js`,
      libraryTarget: "commonjs2",
    },
    externals,
    devtool: false,
  },
];
