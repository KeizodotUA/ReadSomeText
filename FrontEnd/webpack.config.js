const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, './build')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, './src/index.js')]
  },
  output: {
    path: outputPath,
    filename: "index-bundle.js"
  },
  resolve: {
    symlinks: false,
    alias: {
      src: path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@api': path.resolve('./src/api'),
      '@actions': path.resolve('./src/actions')
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
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
};