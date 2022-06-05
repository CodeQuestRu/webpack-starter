const webpack = require('webpack');
const { merge } = require('webpack-merge');

// Плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Настройки
const options = require('./config/app');


// Базовая конфигурация
const common = {
  // Точки входа
  entry: options.entry,
  // Точки выхода
  output: options.output,
  // Расширения для импорта
  resolve: {
    extensions: options.extensions
  },

  plugins: [
    // Формирование шаблона
    new HtmlWebpackPlugin(options.html_wp),
  ]
};


// Общие модули
module.exports = merge(
  common,
  require('./module/babel'),
  require('./module/css'),
  require('./module/less'),
  require('./module/svg')
);
