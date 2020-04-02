const path = require("path");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
  entry: {
    main:"./src/index.js",
    vendor:"./src/vendor.js"
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/assets/imgs/logo.png',
      mode: 'webapp', 
      devMode: 'webapp', 
      favicons: {
        appName: 'photographer_portfolio',
        appDescription: 'Study Case Photographers Portfolio',
        developerName: 'Theologos Tsolovikos',
        developerURL: null, 
        background: '#fff',
        theme_color: '#1A242D',
        icons: {
          coast: false,
          yandex: false
        }
      }})
  ],
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