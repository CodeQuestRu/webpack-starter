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
    source + '/index.tsx'
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

  // Расширения для импорта
  extensions: [".ts", ".tsx", ".js"],


  /**
   * Лоадеры
  */

  // Style Loader
  style: {},

  // Css Loader
  css: {
    importLoaders: 1,
    modules: true
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

  // SVGR
  svgr: {},

  // SVG Sprite
  svg_sprite: {

  },

  // TypeScript
  typescript: {},


  /**
   * Плагины
  */

  // HTML Webpack Plugin
  html_wp: {
    template: starter + '/static/template.html',
    title: 'Webpack-starter by CodeQuest'
  }
}