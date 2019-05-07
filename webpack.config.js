const path = require("path");
// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  devtool: "source-map", //源码映射，错误时可以提示源码错误，不会只显示打包后的错误
  plugins: [
    new CleanWebpackPlugin(), //每次打包之前清空dist中的文件
    new HtmlWebpackPlugin({
      title: "reactredux",
      inject: true,
      template: "./index.html"
    })
  ],
  devServer: {
    //   配置代理------------？？？？------
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
};
module.exports = config;

// rules: [
//   {
//     test: /\.less$/,
//     use: [
//       {
//         loader: "style-loader"
//       },
//       {
//         loader: "css-loader",
//         options: {
//           importLoaders: 1
//         }
//       },
//       {
//         loader: "less-loader",
//         options: {
//           javascriptEnabled: true,
//           modifyVars: theme
//         }
//       }
//     ]
