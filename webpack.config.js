const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    postcssOptions: {
      plugins: [
        [
          'autoprefixer',
          {
            grid: true,
          },
        ],
      ],
    },
  },
};

const commonConfig = {
  mode: devMode ? 'development' : 'production',
  entry: {
    index: './src/index',
    example: './example.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
    sourceMapFilename: '[file].[contenthash].map',
    library: 'menu',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /(\.m?js$)|(\.svelte$)/,
        exclude: /node_modules\/(?!svelte)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svelte$/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
              hydratable: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
          postcssConfig,
        ],
      },
      {
        test: /\.(jpe?g?|png|gif|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      IS_DEV: devMode,
      PROXY: JSON.stringify(process.env.PROXY),
    }),
  ],
  devtool: 'source-map',
};

module.exports = commonConfig;
