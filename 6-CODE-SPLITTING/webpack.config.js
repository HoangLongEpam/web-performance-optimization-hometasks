const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: {
    script1: "./src/script1.js",
    script2: "./src/script2.js",
  },
  output: {
    filename: "[name].bundle.js",
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all",
        },
      },
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
};
