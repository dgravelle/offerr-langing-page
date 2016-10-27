'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['css'])
    gulp.watch('src/js/**/*.ks', ['js'])
})

gulp.task('css', () => {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('home.css'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
    return gulp.src('src/js/*.js')
    .pipe(concat('bundle.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(gulp.dest('dist/js'));
});
