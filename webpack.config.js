const path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './assets/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  watch: true,
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    }]
  },
  mode: 'development'
};