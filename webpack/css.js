module.exports = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: paths,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
