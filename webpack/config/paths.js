const { resolve } = require('path');
const { path: root } = require('app-root-path');


module.exports = {
  // Корневая директория
  root: root,

  // Путь до исходной директории
  source: resolve(root, './src'),

  // Путь до конечной директории
  build: resolve(root, './dist'),

  // Путь до папки webpack
  starter: resolve(root, './webpack'),
}