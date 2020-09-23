const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000
  }
}

module.exports = merge(commonConfig, devConfig)
