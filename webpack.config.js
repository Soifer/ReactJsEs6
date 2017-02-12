//var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");
// var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    "./src/main.js" // Your appʼs entry point
  ],
  watch: true,
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  target: 'web',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: true
        }
      },
      debug: true
    })
  ],
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['react-hot-loader', 'babel-loader?babelrc=false,presets[]=es2015,presets[]=react,cacheDirectory=false']
      },
      {
        enforce: 'pre',
        test: /\.js?$/,
        use: [{
          loader: 'eslint-loader'
        }],
        exclude: /(node_modules)/,
      }
    ],
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  }
};