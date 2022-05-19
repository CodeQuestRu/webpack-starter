const { merge } = require('webpack-merge');

// Плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Настройки
const options = require('./config/app');

// Модули
const loadCSS = require('./module/css');
const loadBabel = require('./module/babel');
const loadImage = require('./module/image');
const loadSvg = require('./module/svg');
const loadFont = require('./module/font');


// Базовая конфигурация
const common = {
  // Точки входа
  entry: options.entry,
  // Точки выхода
  output: options.output,

  plugins: [
    // Формирование шаблона
    new HtmlWebpackPlugin(options.html_wp)
  ]
};


// Общие модули
module.exports = merge(
  common,
  loadCSS(),
  loadBabel(),
  loadImage(),
  loadSvg(),
  loadFont(),
);