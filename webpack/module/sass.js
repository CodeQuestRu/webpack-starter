module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
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
            loader: 'sass-loader',
            options: options.sass_loader
          },
        ]
      }
    ]
  }
}
