const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js'
  }
}

module.exports = merge(commonConfig, prodConfig)
