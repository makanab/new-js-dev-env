import path  from 'path';
import webpack from 'webpack';
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool:'inline-source-map',
    entry:[
        path.resolve(__dirname,'src/index')

    ],
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'


     },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }

            },

            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize:true}
                    }
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]

            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }

        ]
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            debug:true
        }),
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            //Options similal to the same options in webpackOptions.output
            //both options are optional
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]
}