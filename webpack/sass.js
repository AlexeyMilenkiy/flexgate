module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          // include: paths,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
