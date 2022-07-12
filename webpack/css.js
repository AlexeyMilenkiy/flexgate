module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.css$/i,
          // include: paths,
          use: ["style-loader", "css-loader", './style.css'],
        },
      ],
    },
  };
};
