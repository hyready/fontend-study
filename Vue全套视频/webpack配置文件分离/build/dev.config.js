const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = webpackMerge(baseConfig, {
    devServer: { //配置devserver
        contentBase: './dist',
        inline: true,
    }
})