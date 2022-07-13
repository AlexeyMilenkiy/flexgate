const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          include: paths,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          // use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
