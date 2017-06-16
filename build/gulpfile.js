var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var px2rem = require('gulp-px2rem');

// 编译less
gulp.task('css', function () {
    gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('px2rem',function () {
    gulp.src('../dist/styles/index.css')
        .pipe(px2rem())
        .pipe(rename('index.debug.css'))
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('watch',function () {
    gulp.watch('../src/styles/*.less',['css'])
});

gulp.task('default', ['watch','px2rem']);
