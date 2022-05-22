const { merge } = require('webpack-merge');

// Плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Настройки
const options = require('./config/app');

// Модули
const loadCSS = require('./module/css');
const loadBabel = require('./module/babel');
const loadImage = require('./module/image');
const loadSvg = require('./module/svg');
const loadFont = require('./module/fonts');


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

    // new SpriteLoaderPlugin({
    //   plainSprite: true
    // })
  ]
};


// Общие модули
module.exports = merge(
  common,
  loadBabel(),
  loadCSS(),
  // loadImage(),
  loadSvg(),
  // loadFont(),
);
