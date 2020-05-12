const gulp = require('gulp');
const browserSync = require('browser-sync');

module.exports = function icons(cb) {
    return gulp.src('src/icons/**/*')
        .pipe(gulp.dest('build/icons'))
        .pipe(browserSync.stream());
};