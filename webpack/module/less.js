module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
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
            loader: 'less-loader',
            options: options.less_loader
          },
        ]
      }
    ]
  }
}
