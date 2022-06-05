// Настройки
const options = require('../config/app');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(less)$/i,
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

