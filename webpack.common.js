const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', 'whatwg-fetch', './app/index.js'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
