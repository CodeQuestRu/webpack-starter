const { merge } = require('webpack-merge');

// Базовая конфигурация
const common = require('./webpack.common');

// Конфигурация для разработки
module.exports = merge(common, {
  // Режим
  mode: 'development',

  // Sourcemaps
  devtool: 'inline-source-map'
})