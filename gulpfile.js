'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['css'])
})

gulp.task('css', () => {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('home.css'))
    .pipe(gulp.dest('dist/css'))
});
