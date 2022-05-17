const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const options = require('../config/app');
const devMode = process.env.NODE_ENV !== "production";


module.exports = {
  plugins: [
    !devMode && new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
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
