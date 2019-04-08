const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const minifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const stripCssComments = require('gulp-strip-css-comments');

gulp.task('styles', function() {
    return gulp.src('src/css/scss/style.scss')
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer('last 2 version'))
        .pipe(stripCssComments({ preserve: false }))
        .pipe(minifycss())
		.pipe(gulp.dest('src/css'));
});

gulp.task('default', function() {
    gulp.watch('src/css/scss/**', gulp.parallel('styles'));
});