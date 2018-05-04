var gulp = require('gulp');
var server = require('gulp-webserver')
var data = require('./src/data.json')
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 9090,
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/index') {
                    res.end(JSON.stringify(data))
                }
                next();
            }
        }))
})

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss')
})

gulp.task('default', ['server', 'watch']);