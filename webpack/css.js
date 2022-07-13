const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: paths,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          // use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
