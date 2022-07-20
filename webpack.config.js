const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const devServer = require("./webpack/devserver");
const images = require("./webpack/images");
const sass = require("./webpack/sass");
const pug = require("./webpack/pug");
const css = require("./webpack/css");

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "public"),
};

const productionConfig = merge([
  {
    entry: {
      index: PATHS.source + "/app.js",
      modal: [
        PATHS.source + '/scripts/hystmodal.min.js',
        PATHS.source + '/scripts/modal.js'
      ],
    },
    output: {
      path: PATHS.build,
      filename: "bundle.[chunkhash].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        //Создаем страницу index.html
        filename: "index.html",
        chunks: ["modal", "index"],
        template: PATHS.source + "/index.pug",
        inject: 'body',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "style.[chunkhash].css", //Выходное имя файла
      }),
      new CompressionPlugin({
        algorithm: "gzip",
        test: /.js$|.css$/,
      }),
    ],
  },
  pug(),
  sass(),
  css(),
  images(),
]);

const developmentConfig = merge([productionConfig, devServer()]);

module.exports = function (env, argv) {
  if (argv.nodeEnv === "production") {
    return productionConfig;
  }
  if (argv.nodeEnv === "development") {
    return developmentConfig;
  }
};
