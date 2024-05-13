const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, "dist"),
      src: "index.html",
      dest: "index.html",
      inline: true,
      minify: true,
      extract: true,
      dimensions: [
        { width: 320, height: 480 }, // iPhone 5
        { width: 768, height: 1024 }, // iPad
        { width: 1920, height: 1080 }, // Desktop
      ],
      penthouse: {
        blockJSRequests: false,
      },
    }),
  ],
};
