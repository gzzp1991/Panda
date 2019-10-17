const webpack = require('webpack');
const { smart } = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');

module.exports = smart(base, {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
        include: [
          path.resolve(__dirname, 'node_modules/antd'),
          path.resolve(__dirname, 'src'),
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
  ],
});