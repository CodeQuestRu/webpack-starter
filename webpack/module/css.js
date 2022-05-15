const options = require('../config/app');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: options.style_loader
          },
          {
            loader: "css-loader",
            options: options.css_loader
          },
          {
            loader: 'postcss-loader',
            options: options.postcss_loader
          },
        ]
      }
    ]
  }
}
