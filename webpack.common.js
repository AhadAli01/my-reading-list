const path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { ReplaceUrlHtmlWebpackPlugin } = require('replace-url-html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        favicon: "./src/assets/open-book.ico"
    }),
    new ReplaceUrlHtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif|ico)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};