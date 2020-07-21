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
  // Browser version
  {
    mode: "production",
    entry: "./src/content-manager.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `content-manager-browser.${process.env.npm_package_version}.js`,
      libraryTarget: "system",
      // Using this module's own entry in the import map to set the public path.
      publicPath: path.dirname(imports["content-manager"]) + "/",
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
    entry: "./src/content-manager.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `content-manager-node.js`,
      libraryTarget: "commonjs2",
    },
    externals,
    devtool: false
  },
];
