const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const pug = require("./webpack/pug");
const devServer = require("./webpack/devserver");
const sass = require("./webpack/sass");
const css = require("./webpack/css");
// const images = require("./webpack/images");

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "public"),
};

const productionConfig = merge([
  {
    entry: {
      index: PATHS.source + "/app.js",
    },
    output: {
      path: PATHS.build,
      filename: "bundle.[chunkhash].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        chunks: ["index"],
        template: PATHS.source + "/index.pug",
      }),
      new CleanWebpackPlugin(),
    ],
  },
  pug(),
  sass(),
  css(),
  //   images(),
]);

const developmentConfig = merge([productionConfig, devServer(), sass(), css()]);

module.exports = function (env, argv) {
  if (argv.nodeEnv === "production") {
    return productionConfig;
  }
  if (argv.nodeEnv === "development") {
    return developmentConfig;
  }
};
