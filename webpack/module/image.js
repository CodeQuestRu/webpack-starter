const options = require('../config/app');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
