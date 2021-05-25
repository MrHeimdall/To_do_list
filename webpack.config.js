const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;
const disPath = 'dist';

const indexInput = './src/index.html';
const indexOutput = 'index.html';

const webpackConfigInit = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.css']
  },
  entry: {
    app: ['@babel/polyfill', './src/js/index.js'],
  },
  output: {
    path: path.join(basePath, disPath),
    filename: '[chunkhash][name].js'
  },
  module: {
    rules: [
      { 
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
        ],
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indexInput
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};

module.exports = webpackConfigInit;
