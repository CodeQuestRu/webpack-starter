const { merge } = require('webpack-merge');

// Плагины
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    // Удаление конечной директории
    // new CleanWebpackPlugin(),
  ]
})