//公共的
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'), //（动态获取路径）
        filename: 'bundle.js',
        // publicPath: 'dist/' //在index.js还未打包到dist时有用
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8196,
                        name: 'img/[name].[hash:8].[ext]',
                    }
                }]

            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'] //转换es6-es5
                    }
                }
            }, {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],

    resolve: {
        alias: { //别名
            'vue$': 'vue/dist/vue.esm.js'
        }

    }
}