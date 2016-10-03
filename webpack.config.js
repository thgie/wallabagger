const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const loaders = require('./webpack/loaders');


module.exports = {
    entry: { 
        app: "./src/index.tsx",
        opt: "./src/options.js"
    },
    output: {
        path: 'dist',
        filename: '[name].js',
        chunkFilename: '[id].js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
      contentBase: './dist',
      info: true,
      hot: false,
      inline: true,
      port: 9999
    },

    resolve: {
        modules: [
            path.resolve("./src"),
            "node_modules"
        ],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        // preLoaders: [
        //     loaders.tslint,
        // ],
        loaders: [
            loaders.tsx,
            loaders.css,
            loaders.fonts
        ],

        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV !== 'production',
            __TEST__: JSON.stringify(process.env.TEST || false),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['app'],
            filename: 'index.html',
            hash: true,
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['opt'],
            filename: 'options.html',
            hash: true,
            template: './src/options.html',
            favicon: './src/favicon.ico'
        }),
        ]
};