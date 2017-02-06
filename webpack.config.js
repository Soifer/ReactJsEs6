//var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var path = require('path');

module.exports = {
  // entry: {   javascript: "./src/main.js" }, plugins: [   new
  // webpack.HotModuleReplacementPlugin() ],
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
  devtool: "source-map",
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel?babelrc=false,presets[]=es2015,presets[]=react,cacheDirectory=false']
      }
    ],
    preLoaders: [//   // All output '.js' files will have any sourcemaps re-processed by
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {   extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"] }
};