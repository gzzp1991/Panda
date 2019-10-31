const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const Happypack = require('happypack');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
  // mode: 'development', // production | development
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  watch: true,
  watchOptions: {
    poll: 1000, // 每1000毫秒检查一次变动
    aggregateTimeout: 300, // 防抖时间 1000毫秒
    ignored: /node_modules/, // 忽略文件夹
  },
  // devtool: 'eval-source-map', // source-map | eval-source-map | cheap-module-source-map | cheap-module-eval-source-map
  devServer: {
    port: 8888,
    contentBase: './dist',
    compress: true,
    progress: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
              ],
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      hash: true,
    }),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new ProgressBarWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: 'src/asset/img',
    //     to: 'img',
    //     toType: 'dir'
    //   }
    // ])
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    // })
    new CleanWebpackPlugin('./dist'),
    // new webpack.IgnorePlugin(/\.\/local/, /moment/)
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      util: path.resolve(__dirname, 'src/util'),
      page: path.resolve(__dirname, 'src/page'),
      component: path.resolve(__dirname, 'src/component'),
      less: path.resolve(__dirname, 'src/resource/less'),
      rdx: path.resolve(__dirname, 'src/rdx'),
    },
  },
};
