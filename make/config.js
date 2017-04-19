const { DEBUG } = require('./env');
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
    __webpack
}
