const path = require("path");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
module.exports = {
  entry: {
    main:"./src/index.js",
    vendor:"./src/vendor.js"
  },
 
  module: {
    rules: [
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "assets/imgs"
              }
          }
        },
        {
            test: /\.mp4$/,
            use: 'file-loader?name=assets/videos/[name].[hash].[ext]'
        }
    ]
  }
};