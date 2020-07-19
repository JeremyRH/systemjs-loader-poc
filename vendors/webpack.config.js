const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [
  {
    mode: "production",
    entry: "./src/vendors.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `vendors-browser.${process.env.npm_package_version}.js`,
      libraryTarget: "system",
    },
    plugins: [
      // SystemJS provides a production-ready build. Use it so we don't have to import it and build it ourselves.
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(path.dirname(require.resolve("systemjs")), "s.min.js"),
            to: path.resolve(__dirname, "dist", "systemjs.js"),
          },
        ],
      }),
    ],
  },
  {
    mode: "development",
    entry: "./src/vendors.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `vendors-node.js`,
      libraryTarget: "commonjs2",
    },
    devtool: false,
  },
];
