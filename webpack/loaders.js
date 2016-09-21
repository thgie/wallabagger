'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
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