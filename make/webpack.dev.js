const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const { DEBUG, WATCH } = require('./env');

/** Enable webpack errors trace stack */
process.traceDeprecation = DEBUG;

module.exports = {
    watch: WATCH,
    devtool: 'eval-source-map',
    output: {
        filename: '[name].js',
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
