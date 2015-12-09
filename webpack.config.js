const path = require('path');
const webpack = require('webpack'); const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const OUT_DIR = path.join(__dirname, './example/');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  context: __dirname,
  entry: {
    example: './src/example.js',
  },
  output: {
    path: OUT_DIR,
    filename: '[name].js',
    publicPath: 'dist/',
  },
  resolve: {
    root: [
      path.join(__dirname, 'src/'),
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {},
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_PRODUCTION: JSON.stringify(IS_PRODUCTION),
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 9000,
        proxy: '127.0.0.1:8080',
        files: [
          'example/index.html',
          'src/**/*.js',
        ],
        ui: false,
        notify: false,
        reloadOnRestart: true,
      }
    ),
  ]
};

module.exports = config;
