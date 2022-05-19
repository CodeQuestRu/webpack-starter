const options = require('../config/app');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(csv|tsv)$/i,
          use: [
            {
              loader: 'csv-loader',
              options: options.csv
            }
          ],
        }
      ]
    }
  }
}