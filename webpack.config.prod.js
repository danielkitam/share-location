const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'share-place': './src/SharePlace.js',
    'my-place': './src/MyPlace.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'dist/assets/scripts/'
  },

  // module: {
  //   rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  // },

  // plugins: [new HtmlWebpackPlugin({ template: './dist/index.html' })],
  // devtool: 'cheap-source-map',
  // plugins: [new CleanPlugin.CleanWebpackPlugin()]
};