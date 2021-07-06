const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'output')
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: './markdown-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '123123',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),
        new CopyWebpackPlugin({
            patterns: ['public']
        })
    ]
}