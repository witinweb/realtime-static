var gulp = require('gulp'),
    uncache = require('gulp-uncache'),
    usemin = require('gulp-usemin'),
    wrap = require('gulp-wrap'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-cssnano'),
    minifyJs = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyHTML = require('gulp-htmlmin'),
    ngHtml2Js = require("gulp-ng-html2js");

var config = {
    accessKeyId: "AKIAIX35UNOX7F477EQQ",
    secretAccessKey: "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"
}

var s3 = require('gulp-s3-upload')(config);

var paths = {
    scripts: 'src/js/**/*.*',
    styles: 'src/sass/**/*.sass',
    images: 'src/img/**/*.*',
    templates: 'src/templates/**/*.html',
    index: 'src/index.html',
    awesome_fonts: 'src/components/font-awesome/**/*.{ttf,woff,eof,svg,woff2}',
    bootstrap_fonts: 'src/components/bootstrap/**/*.{ttf,woff,eof,svg,woff2}'
};

/**
 * Handle bower components from index
 */
gulp.task('usemin', function() {
    return gulp.src(paths.index)
        .pipe(usemin({
            js: [minifyJs(), 'concat'],
            css: [minifyCss({keepSpecialComments: 0}), 'concat'],
        }))
        .pipe(uncache())
        .pipe(gulp.dest('dist/'));
});

/**
 * Copy assets
 */
gulp.task('build-assets', ['copy-awesome_fonts', 'copy-bootstrap_fonts']);

gulp.task('copy-awesome_fonts', function() {
    return gulp.src(paths.awesome_fonts)
        .pipe(rename({
            dirname: '/fonts'
        }))
        .pipe(gulp.dest('dist/lib'));
});
gulp.task('copy-bootstrap_fonts', function() {
    return gulp.src(paths.bootstrap_fonts)
        .pipe(rename({
            dirname: '/fonts'
        }))
        .pipe(gulp.dest('dist/lib'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-sass', 'custom-templates']);

gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/img'));
});

gulp.task('custom-js', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat('app.min.js'))
            .pipe(minifyJs())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('custom-sass', function() {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass())
            .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('custom-templates', function() {
    return gulp.src(paths.templates)
        .pipe(ngHtml2Js({
            moduleName: "goodocPartials",
            prefix: "/templates/"
        }))
        .pipe(concat("templateCachePartials.js"))
        .pipe(gulp.dest('dist/templates'));
});

/**
 * Watch custom files
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-sass']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.templates], ['custom-templates']);
    gulp.watch([paths.index], ['usemin']);
});

/**
 * Live reload server
 */
gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8889
    });
});

gulp.task('livereload', function() {
    gulp.src(['dist/**/*.*'])
        .pipe(watch(['dist/**/*.*']))
        .pipe(connect.reload());
});

/**
 * Gulp S3 Deploy
 */
gulp.task("deploy", function() {
    gulp.src("./dist/**")
        .pipe(s3({
            Bucket: 'goodoc-realtime-static', //  Required
            ACL:    'public-read'       //  Needs to be user-defined
        }, {
            // S3 Construcor Options, ie:
            maxRetries: 5
        }))
    ;
});

/**
 * Gulp tasks
 */
gulp.task('build', ['usemin', 'build-assets', 'build-custom']);
gulp.task('dev', ['build', 'webserver', 'livereload', 'watch']);