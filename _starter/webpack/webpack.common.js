const webpack = require('webpack');
const { merge } = require('webpack-merge');

// Плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Настройки
const options = require('./config/app');

// Модули
const loadBabel = require('./module/babel');
const loadCss = require('./module/css');
const loadLess = require('./module/less');
const loadSvg = require('./module/svg');
// const loadImage = require('./module/image');
// const loadFont = require('./module/fonts');


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

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })

    // new SpriteLoaderPlugin({
    //   plainSprite: true
    // })
  ]
};


// Общие модули
module.exports = merge(
  common,
  loadBabel(),
  loadCss(),
  loadLess(),
  loadSvg(),
  // loadImage(),
  // loadFont(),
);
