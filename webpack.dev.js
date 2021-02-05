const path = require("path");
const common = require("./webpack.common"); 
const { merge } = require("webpack-merge");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge (common, {
    mode: "development",
    devtool: "inline-source-map",
    // devServer: { 
    //     contentBase: './dist', 
    // },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // in reverse
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ]
            }
        ]
    }
});