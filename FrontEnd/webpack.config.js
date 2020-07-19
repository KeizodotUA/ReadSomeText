const webpack = require('webpack')
const path = require('path')
const outputPath = path.resolve(__dirname, './build')
const HtmlWebPackPlugin = require('html-webpack-plugin')


const webpackConfig = {
    entry: {
        app: [
            path.resolve(__dirname, './src/index.js')
        ]
    },
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0'
    }
}

module.exports = webpackConfig