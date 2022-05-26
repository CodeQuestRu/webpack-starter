const {
  root,
  source,
  assets,
  build,
  starter,
  loaders,
  webpack
} = require('./paths');

// Вставка переменных
const themeVariables = require(webpack + '/data/antd-variables');

// Конфигурация
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
  less: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    }
  },

  // Sass Loader
  sass: {},

  // Babel
  babel: {},

  // XML
  xml: {},

  // CSV
  csv: {},

  // Изображения
  image: {
    plugins: [
      ["gifsicle", { interlaced: true }],
      ["jpegtran", { progressive: true }],
      ["optipng", { optimizationLevel: 5 }],
    ]
  },

  // SVG
  svg: {
    name: assets + `/[name].[ext]`
  },

  // SVGR
  svgr: {},

  // SVG Sprite
  svg_sprite: {
    runtimeGenerator: loaders + '/svg-sprite-loader/runtime-generator'
  },

  // TypeScript
  typescript: {},


  /**
   * Плагины
  */

  // HTML Webpack Plugin
  html_wp: {
    template: webpack + '/static/template.html',
    title: 'Webpack-starter by CodeQuest'
  }
}