const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const options = require('../config/app');
const devMode = process.env.NODE_ENV !== "production";


module.exports = () => {
  return {
    // plugins: [
    //   !devMode && new MiniCssExtractPlugin()
    // ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // {
            //   loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            //   options: options.style
            // },
            {
              loader: "style-loader",
              options: options.style
            },
            {
              loader: "css-loader",
              options: options.css
            },
            {
              loader: 'postcss-loader',
              options: options.postcss
            },
          ]
        }
      ]
    }
  }
}
