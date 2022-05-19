module.exports = () => {
  return {
    module: {
      rules: [
        // В JS-файлах
        {
          test: /\.svg$/,
          issuer: {
            test: /\.js$/
          },
          use: [
            '@svgr/webpack',
            {
              loader: 'file-loader',
              options: options.svg
            }
          ]
        },

        // В CSS-файлах
        {
          test: /\.svg$/,
          issuer: {
            test: /\.css$/
          },
          use: {
            loader: 'file-loader',
            options: options.svg
          }
        }
      ]
    }
  }
}
