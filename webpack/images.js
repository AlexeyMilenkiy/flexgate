module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
          },
        },
      ],
    },
  };
};
