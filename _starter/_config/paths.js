const appRoot = require('app-root-path');
const { resolve } = require('path');

// Корневая директория
const root = appRoot.toString();

// Путь до исходной директории
const source = appRoot.resolve('./src');
const assets = resolve(source, './assets');
const config = resolve(source, './config');

// Путь до конечной директории
const build = appRoot.resolve('./dist');

// Путь до стартера
const starter = appRoot.resolve('./_starter');
const webpack = resolve(starter, './webpack');
const loaders = resolve(webpack, './loaders');


module.exports = {
  root,
  source,
  assets,
  config,
  build,
  starter,
  webpack,
  loaders
}