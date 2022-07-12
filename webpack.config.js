const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const pug = require("./webpack/pug");
const devServer = require("./webpack/devserver");
const sass = require('./webpack/sass');

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "public"),
};

const common = merge([
  {
    // mode: "production",
    entry: {
      index: PATHS.source + "/pages/index/index.js",
      // 'blog' : PATHS.source + "/pages/blog/blog.js",
    },
    output: {
      path: PATHS.build,
        filename: "[name].js",
    //   filename: "bundle.js",
    //   publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        chunks: ["index"],
        template: PATHS.source + "/pages/index/index.pug",
      }),
      // new HtmlWebpackPlugin({
      //     filename: "blog.html",
      //     chunks: ["blog"],
      //     template: PATHS.source + "/pages/blog/blog.pug",
      //   }),
      // new webpack.HotModuleReplacementPlugin(),
    ],
  },
  pug(),
]);

// const common = {
//   mode: "production",
//   entry: {
//     index: PATHS.source + "/pages/index/index.js",
//     // 'blog' : PATHS.source + "/pages/blog/blog.js",
//   },
//   output: {
//     path: PATHS.build,
//     filename: "[name].js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       chunks: ["index"],
//       template: PATHS.source + "/pages/index/index.pug",
//     }),
//     // new HtmlWebpackPlugin({
//     //     filename: "blog.html",
//     //     chunks: ["blog"],
//     //     template: PATHS.source + "/pages/blog/blog.pug",
//     //   }),
//     // new webpack.HotModuleReplacementPlugin(),
//   ],
//   pug()
// };

const developmentConfig = {
  target: "web",
  //   mode: "development",
};

module.exports = function (env, argv) {
  // console.log('env', env)
  // console.log('argv.nodeEnv', argv.nodeEnv);
  if (argv.nodeEnv === "production") {
    return common;
  }
  if (argv.nodeEnv === "development") {
    return merge([common, devServer(), sass()]);
  }
};
