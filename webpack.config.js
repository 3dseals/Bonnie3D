var path = require('path');
var webpack = require('webpack');

module.exports = {
    //插件项
    plugins: [],
    //页面入口文件配置
    entry: {
        index : './src/index.js'
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bonnie3d.js'
    },
    module: {
        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: { presets: ['es2015'] } },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};