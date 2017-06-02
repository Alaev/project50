const path = require('path');
const webpack = require('webpack');
const poststylus = require('poststylus');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



const isProd = process.env.NODE_ENV === 'production'; // true or false
const cssDev = ['style-loader',
    'css-loader',
    'stylus-loader',
    {
        loader: 'sass-resources-loader',
        options: {
            // Provide path to the file with resources
            resources: [
                './client/src/stylus/resources.styl'
            ],
        },
    }];

const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'stylus-loader', {
        loader: 'sass-resources-loader',
        options: {
            // Provide path to the file with resources
            resources: [
                './client/src/stylus/resources.styl'
            ],
        },
    }],
    publicPath: './client/dist'
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {

    entry: './client/src/index.js',
    output: {
        path: path.resolve(__dirname, './client/dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: cssConfig
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './client/dist'),
        compress: true,
        // port: 8000,
        proxy: {
            '/api': 'http://localhost:3000'
        },
        stats: 'errors-only',
        hot: true,
        open: true
    },
    // devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Never Sleep Outside',
            hash: true,
            template: './client/src/index.html',
        }),
        new ExtractTextPlugin({
            filename: '/css/style.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    use: [poststylus(['autoprefixer', 'rucksack-css', 'postcss-ant'])]
                }
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin([
            {
                from: './client/src/vendors/font-awesome/css/font-awesome.min.css',
                to: './css/font-awesome.min.css'
            },
            {
                from: './client/src/vendors/font-awesome/fonts/fontawesome-webfont.woff2',
                to: './fonts/fontawesome-webfont.woff2'
            }])

    ]


};
