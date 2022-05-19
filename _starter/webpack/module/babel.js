const options = require('../config/app');
const paths = require('../config/paths');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          include: paths.source,
          use: {
            loader: 'babel-loader',
            options: options.babel
          }
        }
      ]
    }
  }
}
