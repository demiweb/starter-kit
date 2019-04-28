var gulp    = require('gulp');
var config  = require('../config.js');
var cheerio = require('gulp-cheerio');
var clean   = require('gulp-cheerio-clean-svg');
var rename  = require('gulp-rename');
var svgmin  = require('gulp-svgmin');
var path    = require('path');
var del     = require('del');
var util    = require('gulp-util');

gulp.task('clean-htmlicons', function(cb) {
    return del([
        config.src.iconsHTML+'/*.html'
    ]).then(function(paths) {
        util.log('Deleted:', util.colors.magenta(paths.join('\n')));
    });
});

gulp.task('create-htmlicons', function () {
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
                var iconName = path.basename(file.relative, path.extname(file.relative));
                var svg = $('svg');
                var svgStyle = svg.attr('style');
                
                if (svgStyle && svgStyle.indexOf('enable-background') !== -1) {
                    svg.removeAttr('style');
                };

                svg.attr('class', 'icon icon-' + iconName);
            },
            parserOptions: { xmlMode: false }
        }))
        .pipe(rename({
            prefix: '_',
            extname: '.html'
        }))
        .pipe(gulp.dest(config.src.iconsHTML));
});

gulp.task('svgicons', [
    'clean-htmlicons',
    'create-htmlicons'
]);

gulp.task('svgicons:watch', function () {
    gulp.watch(config.src.icons + '/*', ['svgicons']);
});