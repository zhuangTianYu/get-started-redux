const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /.css/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /.(js|jsx)/,
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    })
  ]
}
