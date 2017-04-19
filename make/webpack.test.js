const webpack = require('webpack');
const { WATCH } = require('./env');

module.exports = {
    watch: WATCH,
    output: {
        filename: '[name].js'
    }
}
