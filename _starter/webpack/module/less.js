// Настройки
const options = require('../config/app');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader",
              options: options.style
            },
            {
              loader: "css-loader",
              options: options.css
            },
            {
              loader: 'less-loader',
              options: options.less
            },
          ]
        }
      ]
    }
  }
}
