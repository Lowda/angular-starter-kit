const merge = require('webpack-merge');
const webpack = require('webpack');

const { DEBUG, TEST } = require('./env');
const { resolve } = require('./libs');

const options = {
    output: {
        publicPath: '/js/'
    },
    resolve: {
        modules: ['node_modules', 'src/typescript'],
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.json$/,
            use: ['json-loader']
        }, {
            test: /\.ts$/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

module.exports = TEST ?
    merge(options, require('./webpack.test')) : DEBUG ?
        merge(options, require('./webpack.dev')) :
        merge(options, require('./webpack.dist'));
