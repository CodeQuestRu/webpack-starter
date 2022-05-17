const { root, source, build, starter } = require('./paths');


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
    filename: '[name].bundle.js',
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
  style_loader: {},

  // Css Loader
  css_loader: {
    importLoaders: 1
  },

  // PostCSS Loader
  postcss_loader: {},

  // Less Loader
  less_loader: {},

  // Sass Loader
  sass_loader: {},

  // Babel
  babel: {},


  /**
   * Плагины
  */

  // HTML Webpack Plugin
  html_webpack_plugin: {
    template: starter + '/static/template.html',
    title: 'Webpack-starter by CodeQuest'
  }
}