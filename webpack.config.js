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

  // module: {
  //   rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  // },

  // plugins: [new HtmlWebpackPlugin({ template: './dist/index.html' })],
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './dist',
  // },

  // plugins: [new CleanPlugin.CleanWebpackPlugin()]
};