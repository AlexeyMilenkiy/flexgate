const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  source: path.join(__dirname, "source"),
  build: path.join(__dirname, "public"),
};

const common = {
  mode: "production",
  entry: {
    index: PATHS.source + "/pages/index/index.js",
    // 'blog' : PATHS.source + "/pages/blog/blog.js",
  },
  output: {
    path: PATHS.build,
    filename: "[name].js",
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
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
    ],
  },
};

const developmentConfig = {
  mode: "development",
  devServer: {
    // stats: 'errors-only',
    // inline: true,
    port: 9000,
  },
};

module.exports = function (env, argv) {
    console.log('env', env)
    console.log('argv.nodeEnv', argv.nodeEnv);
  if (argv.nodeEnv === "production") {
    console.log(env);
    return common;
  }
  if (argv.nodeEnv === "development") {
    return Object.assign({}, common, developmentConfig);
  }
};
