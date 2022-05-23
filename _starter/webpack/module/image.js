const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// Настройки
const options = require('../config/app');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g)$/i,
          type: 'asset/resource'
        }
      ]
    },

    // Оптимизация
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: options.image
        })
      ]
    }
  }
} 