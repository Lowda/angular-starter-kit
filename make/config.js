const DEBUG = process.env.NODE_ENV !== 'production';
const TEST = process.env.NODE_ENV === 'test';
const WATCH = process.env.NODE_WATCH === 'true';
const __webpack = require('./webpack.config');
const __dist = 'dist';
const __ts_entry = 'src/bootstrap.ts';
const __stylus = { compress: !DEBUG }
const __autoprefixer = {
    browsers: ['last 2 versions'],
    cascade: false
}

module.exports = {
    __dist,
    __ts_entry,
    __stylus,
    __autoprefixer,
    DEBUG,
    TEST,
    WATCH
}
