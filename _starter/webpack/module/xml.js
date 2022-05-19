const options = require('../config/app');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.xml$/i,
          use: [
            {
              loader: 'xml-loader',
              options: options.xml
            }
          ],
        }
      ]
    }
  }
}
