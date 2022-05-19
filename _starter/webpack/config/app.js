const {
  root,
  source,
  assets,
  build,
  starter
} = require('./paths');


module.exports = {

  /**
   * Базовые настройки
  */

  // Входные точки
  entry: [
    source + '/main.js'
  ],

  // Выходная точка
  output: {
    path: build,
    filename: '[name].[contenthash].js', // Поддержка кеширования
    clean: true
  },

  // Сервер
  devServer: {
    static: build
  },


  /**
   * Лоадеры
  */

  // Style Loader
  style: {},

  // Css Loader
  css: {
    importLoaders: 1
  },

  // PostCSS Loader
  postcss: {},

  // Less Loader
  less: {},

  // Sass Loader
  sass: {},

  // Babel
  babel: {},

  // XML
  xml: {},

  // CSV
  csv: {},

  // SVG
  svg: {
    name: assets + `/[name].[ext]`
  },


  /**
   * Плагины
  */

  // HTML Webpack Plugin
  html_wp: {
    template: starter + '/static/template.html',
    title: 'Webpack-starter by CodeQuest'
  }
}