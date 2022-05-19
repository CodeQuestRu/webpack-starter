const { merge } = require('webpack-merge');

// Плагины


// Базовая конфигурация
const common = require('./webpack.common');

// Конфигурация для продакшена
module.exports = merge(common, {
  // Режим
  mode: 'production',

  // Плагины
  plugins: [

  ],

  // Оптимизация
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
})