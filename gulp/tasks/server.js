var gulp   = require('gulp');
var server = require('browser-sync').create();
var util   = require('gulp-util');
var config = require('../config');

gulp.task('server', function() {
    server.init({
        server: {
            baseDir: !config.production ? [config.dest.root, config.src.root] : config.dest.root,
            directory: false,
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        files: [
            config.dest.html + '/*.html',
            config.dest.css + '/*.css',
            config.dest.img + '/**/*'
        ],
        port: util.env.port || 8080,
        logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
        logConnections: false,
        logFileChanges: true,
        open: Boolean(util.env.open),
        notify: false,
        ghostMode: false,
        online: Boolean(util.env.tunnel)
    });
});

module.exports = server;
