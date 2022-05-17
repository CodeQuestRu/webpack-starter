const { merge } = require('webpack-merge');

// Плагины


// Базовая конфигурация
const common = require('./webpack.common');

// Конфигурация для продакшена
module.exports = merge(common, {
  // Режим
  mode: 'production',

  // Sourcemaps
  devtool: 'source-map',

  // Плагины
  plugins: [

  ]
})