const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    entry:'./app/main.js',
    output:{
        filename: 'bundle-[hash].js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    devServer:{
        contentBase:path.resolve(__dirname,"public"),
        port:8080
        // compress:true
    },
    devtool:"inline-source-map",
    plugins: [
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            title:"this",
            template:path.resolve(__dirname,"app/index.html")
        }),

        new ExtractTextPlugin("style.css")
    ]

};