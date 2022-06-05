const { resolve } = require('path');

// Пути
const paths = require('./paths');

// Вставка переменных
const themeVariables = require(resolve(paths.config, './antd/antd-variables'));

// Конфигурация
module.exports = {

  /**
   * Базовые настройки
  */

  // Входные точки
  entry: [
    resolve(paths.source, './index.tsx')
  ],

  // Выходная точка
  output: {
    path: paths.build,
    filename: '[name].[contenthash].js', // Поддержка кеширования
    clean: true
  },

  // Сервер
  devServer: {
    static: paths.build
  },

  // Расширения для импорта
  extensions: [".ts", ".tsx", ".js", ".jsx"],


  /**
   * Лоадеры
  */

  // Style Loader
  style: {},

  // Css Loader
  css: {
    // importLoaders: 1,
    // modules: true
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
    name: resolve(paths.assets, './[name].[ext]')
  },

  // SVGR
  svgr: {},

  // SVG Sprite
  svg_sprite: {
    runtimeGenerator: resolve(paths.utils, './svg-sprite-loader/runtime-generator')
  },

  // TypeScript
  typescript: {},


  /**
   * Плагины
  */

  // HTML Webpack Plugin
  html_wp: {
    template: resolve(paths.static, './template.html'),
    title: 'Webpack-starter by CodeQuest'
  }
}