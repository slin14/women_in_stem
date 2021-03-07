module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
          options: {
              import: true,
              module: true,
          }
        },
      ],
    },
  };