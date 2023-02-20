const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'SharePlace': './src/SharePlace.js',
    'MyPlace': './src/MyPlace.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
  },
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './dist',
  // },

  // plugins: [new CleanPlugin.CleanWebpackPlugin()]
};