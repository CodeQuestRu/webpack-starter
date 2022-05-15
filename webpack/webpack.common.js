const { merge } = require('webpack-merge');

// Плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Настройки
const options = require('./config/app');

// Модули
const cssLoader = require('./module/css');
const babelLoader = require('./module/babel');

// Базовая конфигурация
module.exports = merge({
  // Режим
  mode: 'none',

  // Sourcemaps
  devtool: false,

  // Точки входа
  entry: options.entry,

  // Точки выхода
  output: options.output,

  plugins: [
    // Формирование шаблона
    new HtmlWebpackPlugin(options.html_webpack_plugin)
  ]
},
  cssLoader,
  babelLoader
);
