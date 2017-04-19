const gulp = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const rev = require('gulp-rev');
const stylus = require('gulp-stylus');
const revReplace = require('gulp-rev-replace');
const webpackStream = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');
const sftp = require('gulp-sftp');

const { end } = require('./make/libs');
const {
    __dist,
    __ts_entry,
    __autoprefixer,
    __stylus,
    __webpack,
    DEBUG
} = require('./make/config');

/** @gulp: default -> dist -> typescript */
gulp.task('typescript', done => {
    return gulp.src(__ts_entry)
        .pipe(named())
        .pipe(plumber())
        .pipe(webpackStream(__webpack, webpack))
        .pipe(gulpif(!DEBUG, uglify()))
        .pipe(gulp.dest(path.join(__dist, 'js')))
        .on('data', end(done, DEBUG));
});

/** @gulp: default -> dist -> assets */
gulp.task('assets', () => {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest(__dist));
});

/** @gulp: default -> dist -> stylus */
gulp.task('stylus', () => {
    return gulp.src('src/stylus/style.styl')
        .pipe(plumber())
        .pipe(stylus(__stylus))
        .pipe(autoprefixer(__autoprefixer))
        .pipe(gulpif(!DEBUG, rev()))
        .pipe(gulp.dest(path.join(__dist, 'css')))
        .pipe(gulpif(!DEBUG, rev.manifest('stylus.json')))
        .pipe(gulpif(!DEBUG, gulp.dest('manifest')));
});

/** @gulp: default -> dist */
gulp.task('dist', ['typescript', 'assets', 'stylus'], () => {
    return gulp.src('src/index.html')
        .pipe(gulpif(!DEBUG, revReplace({
            manifest: gulp.src('manifest/typescript.json'),
        })))
        .pipe(gulpif(!DEBUG, revReplace({
            manifest: gulp.src('manifest/stylus.json'),
        })))
        .pipe(gulp.dest(__dist));
});

/** @gulp: default -> watch */
gulp.task('watch', () => {
    gulp.watch('src/assets/**/*', ['assets'])
    gulp.watch('src/**/*.styl', ['stylus'])
});

/** @gulp: default */
gulp.task('dev', ['dist', 'watch'], () => {
    require('gulp-develop-server').listen({
        path: './server.js',
        execArgv: ['--harmony'],
    });
});
