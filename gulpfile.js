const gulp = require('gulp')
const pug2html = require('./gulp/tasks/pug2html')
const pug_build = require('./gulp/tasks/pug_build')
const style = require('./gulp/tasks/style')
const style_build = require('./gulp/tasks/style_build')
const rename = require('./gulp/tasks/renameIndex')
const copyFonts = require('./gulp/tasks/copyFonts')
const copyIco = require('./gulp/tasks/copyIco')
const copyMailer = require('./gulp/tasks/copyMailer')
const imageMin = require('./gulp/tasks/imageMin')
const server = require('./gulp/tasks/browserSync')
const clean = require('./gulp/tasks/del')
const js = require('./gulp/tasks/js')
const sftp = require('./gulp/tasks/sftp')
const cssSftp = require('./gulp/tasks/css-sftp')

module.exports.html = gulp.series(pug2html,pug_build,rename)
module.exports.style = gulp.series(style,style_build)
module.exports.run = gulp.series(clean,pug2html,pug_build,rename,style,style_build,js,copyFonts,copyIco,copyMailer,imageMin,server)
module.exports.server = gulp.series(server)
module.exports.sftp = gulp.series(cssSftp,sftp)
module.exports.js = gulp.series(js)