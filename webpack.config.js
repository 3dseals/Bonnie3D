var path = require('path');
var webpack = require('webpack');

module.exports = {
    //插件项
    plugins: [],
    devServer: {
        noInfo: false,
        hot: true,
        inline: true
    },
    //页面入口文件配置
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bonnie3d.js'
    },
    module: {
        //加载器配置
        loaders: [
            //.js .glsl 文件使用 babel-loader 来编译处理
            { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader', query: { presets: ['es2015'] } },

        ]
    }
};