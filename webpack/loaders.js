'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.tsx = {
  test: /\.tsx?$/,
  //loader:  'ts-loader',
  loader:  'awesome-typescript-loader',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
              }),
  exclude: /node_modules/,
};

exports.fonts = { test: /\.(ttf|eot|woff|woff2|svg)$/i, loader: 'file-loader', exclude: /node_modules/ };