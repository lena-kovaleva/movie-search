const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
    const isProduction = env.prod || !env.dev;

    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        context: path.join(__dirname, 'src'),
        entry: [
            'babel-polyfill',
            './index'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'assets/bundle.js',
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: ['babel-loader'],
                    include: path.join(__dirname, 'src')
                },
                {
                    test: /\.(css|sass|scss)$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpg|png)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/',
                        publicPath: './assets/images/'
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Movie search',
                hash: true,
                template: './index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'assets/index.css',
                chunkFilename: '[id].css'
            })
        ].concat(
            isProduction ? [ new UglifyPlugin() ] : []
        ),
        devServer: {
            historyApiFallback: true
        }
    };
};