const { merge } = require('webpack-merge');

// Настройки
const options = require('./config/app');

// Базовая конфигурация
const common = require('./webpack.common');

// Конфигурация для разработки
module.exports = merge(common, {
  // Режим
  mode: 'development',

  // Sourcemaps
  devtool: 'cheap-module-eval-source-map',

  // Сервер
  devServer: options.devServer,

  // Оптимизация
  optimization: {
    runtimeChunk: 'single',
  },
})