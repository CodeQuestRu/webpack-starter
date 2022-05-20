const options = require('../config/app');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          // exclude: /(node_modules|bower_components)/,
          // include: paths.source,
          use: {
            loader: 'ts-loader',
            options: options.typescript
          }
        }
      ]
    }
  }
}
