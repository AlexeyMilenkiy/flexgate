module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(svg|png|jpg|jpeg|gif|webp)$/i,
          loader: "file-loader",
          // type: 'asset/resource',
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    },
  };
};
