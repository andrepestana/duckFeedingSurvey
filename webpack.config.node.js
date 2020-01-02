const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: "node",
  entry: './src/nodejs/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/nodejs/'),
    filename: 'bundle.js'
  },
  module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
         }
       }
     ]
  },
  plugins: [ 
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist/nodejs/']
    })
  ]
};
