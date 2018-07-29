const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/js-data-structures",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "js-data-structures.js",
    library: "xD",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
