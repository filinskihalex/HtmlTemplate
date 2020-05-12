const gulp = require('gulp');
const sftp = require('gulp-sftp-up4');

module.exports = function ftp(cb) {
    return gulp.src('build/**/*')
        .pipe(sftp({
            host: 'f2service.ru',
            user: 'test',
            remotePath: '/root/src/test'
        }));
};
