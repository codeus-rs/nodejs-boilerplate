const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");
const path = require('path');
module.exports = {
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    externals: [nodeExternals()],
    entry: "./src/index.ts",
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name]-bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, './dist-webpack'),
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '_',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(stringified)
    ]
};
