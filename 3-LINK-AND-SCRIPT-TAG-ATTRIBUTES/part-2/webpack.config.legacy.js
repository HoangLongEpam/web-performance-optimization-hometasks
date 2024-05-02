const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    filename: "[name].bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  targets: {
                    esmodules: false,
                  },
                  modules: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new ScriptExtHtmlWebpackPlugin({
        module: /\.mjs$/,
        custom: [
          {
            test: /\.js$/,
            attribute: 'nomodule',
            value: ''
        },
        ]
      })
  ],
};
