const path          = require('path')
const mix           = require('laravel-mix')
const webpack       = require('webpack')
const { version }   = require('./package.json')
const WebpackBar    = require('webpackbar')
//const OfflinePlugin = require('offline-plugin')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue();
mix.sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    devServer: {
        allowedHosts: "all",
        host: 'localhost',
        port: 8080,
        static: {

        },
    },
    watchOptions: {
        poll: 2000,
        ignored: /node_modules/
    },
    resolve  : {
        alias: {
            '@'         : path.resolve(__dirname, 'resources/js/'),
            'static'    : path.resolve(__dirname, 'resources/static/'),
        },
    },
    plugins: [
        new WebpackBar({ profile: true }),
        new webpack.DefinePlugin({ __VERSION: JSON.stringify(version) }),
    ],
});
mix.options({
    hmrOptions: {
        host: 'localhost',
        port: 8080,
    }
});
mix.extract([
    'axios',
    'bootstrap',
    'chart.js',
    'lodash',
    'popper.js',
    'select2',
    'vue',
    'vue-router',
])
