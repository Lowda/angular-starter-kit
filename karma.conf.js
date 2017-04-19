const webpack = require('webpack');
const { __webpack, WATCH } = require('./make/config');

module.exports = config => {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        files: ['./test/spec.ts', './test/*.spec.ts'],
        exclude: ['node_modules'],
        preprocessors: {
            './test/*.spec.ts': ['webpack', 'karma-typescript']
        },
        webpack: __webpack,
        reporters: ['spec', 'karma-typescript'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: WATCH,
        browsers: ['PhantomJS'],
        singleRun: !WATCH,
        concurrency: Infinity
    })
}
