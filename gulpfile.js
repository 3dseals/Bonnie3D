'use strict';


var gulp = require('gulp');                        //获取gulp
var browsersync = require('browser-sync').create();//获取browsersync

//删除dist目录下文件
var del=require('del');
gulp.task('clean',function(cb){
    return del(['dist/*'],cb);
})

//操作js文件
var webpack = require('gulp-webpack');
gulp.task('scripts', function() {
    gulp.src('src/index.js')                        //需要操作的源文件
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist'))                    //把操作好的文件放到dist目录下
        .pipe(browsersync.stream());                //文件有更新自动执行
});

// 浏览器重载
gulp.task('dist-watch', browsersync.reload);

gulp.task('serve', ['clean'], function() {
    gulp.start('scripts');
    browsersync.init({
        port: 8080,
        server: "./"
    });
    gulp.watch('src/**', ['scripts']);         //监控文件变化，自动更新
    gulp.watch('dist/*.js', ['dist-watch']);         //监控文件变化，自动更新
});

gulp.task('default',['serve']);