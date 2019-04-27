var gulp    = require('gulp');
var config  = require('../config.js');
var cheerio = require('gulp-cheerio');
var clean   = require('gulp-cheerio-clean-svg');
var rename  = require('gulp-rename');
var svgmin  = require('gulp-svgmin');
var path    = require('path');
var del     = require('del');
var util    = require('gulp-util');

gulp.task('clean-html-icons', function(cb) {
    return del([
        config.src.iconsHTML+'/*.html'
    ]).then(function(paths) {
        util.log('Deleted:', util.colors.magenta(paths.join('\n')));
    });
});

gulp.task('create-svgicons', function () {
    return gulp.src(config.src.icons + '/*.svg')
        .pipe(svgmin({
          js2svg: {
                pretty: true
            },
          plugins: [{
                removeXMLProcInst: true
            }, {
                removeComments: true
            }, {
                removeDoctype: true
            }, {
                removeXMLNS: true
            }, {
              convertStyleToAttrs: false
            }]          
        }))        
        .pipe(cheerio(clean({
          attributes: [
            'id',
            'fill*',
            'clip*',
            'stroke*'
          ]
        })))
        .pipe(cheerio({
            run: function($, file) {            
                var className = path.basename(file.relative, path.extname(file.relative));
                var svg = $('svg');

                svg.attr('class', 'icon icon-' + className);
            },
            parserOptions: { xmlMode: false }
        }))
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest(config.src.iconsHTML));
});

gulp.task('svgicons', [
    'clean-html-icons',
    'create-svgicons'
]);

gulp.task('svgicons:watch', function () {
    gulp.watch(config.src.icons + '/*', ['svgicons']);
});