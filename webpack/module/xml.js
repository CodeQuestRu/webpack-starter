const options = require('../config/app');

module.exports = {
  module: {
    rules: [
      {
        test: /\.xml$/i,
        use: [
          {
            loader: 'xml-loader',
            options: options.xml_loader
          }
        ],
      }
    ]
  }
}
