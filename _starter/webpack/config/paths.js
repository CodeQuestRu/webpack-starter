const { resolve } = require('path');
const { path: root } = require('app-root-path');


module.exports = {
  // Корневая директория
  root: root,

  // Путь до исходной директории
  source: resolve(root, './src'),

  // Файлы
  assets: resolve(root, './src/assets'),

  // Путь до конечной директории
  build: resolve(root, './dist'),

  // Путь до папки webpack
  starter: resolve(root, './_starter/webpack'),

  // Лоадеры
  loaders: resolve(root, './_starter/webpack/loaders'),
}