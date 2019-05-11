var gulp = require('gulp');
var config = require('../config.js');
var imagemin    = require('gulp-imagemin');

gulp.task('copy:fonts', function () {
    return gulp
        .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:rootfiles', function () {
    return gulp
        .src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', function () {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,gif,webp}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy', [
    'copy:img',
    // 'copy:rootfiles',
    'copy:fonts'
]);
gulp.task('copy:watch', function () {
    gulp.watch(config.src.img + '/*', ['copy']);
});