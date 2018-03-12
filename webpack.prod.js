const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist/scripts', 'dist/styles']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: 'styles/main.min.css',
    }),
  ],
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[folder]-[name]__[local]--[hash:base64:5]',
                sourceMap: true,
                importLoaders: 1,
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
  output: {
    filename: './scripts/main.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
});
