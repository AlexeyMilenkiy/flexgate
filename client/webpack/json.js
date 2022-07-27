module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: "'json-loader'",
        },
      ],
    },
  };
};
