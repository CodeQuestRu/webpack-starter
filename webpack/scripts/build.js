/////////////////////////////////
// Сборка билда

// Core
const webpack = require('webpack');
const chalk = require('chalk');

// Config
const prodConfig = require('../webpack.prod');

// Создаем экземпляр Webpack
const compiler = webpack(prodConfig);

// Запускаем сборку
compiler.run((error, stats) => {
  if (error) {
    // Ошибка конфигурации
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  // Информация о сборке
  const info = stats.toString({
    hash: true,
    colors: true,
    version: true,
    env: true,
    modules: false,
    entrypoints: false
  });

  // Успешная сборка
  console.log(chalk.greenBright('Build completed'));
  console.log(info);

  if (stats.hasErrors()) {
    // Ошибка во время компиляции
    console.log(chalk.redBright('Error'));
    console.error(info);
  }

  if (stats.hasWarnings()) {
    // Ворнинг во время компиляции
    console.log(chalk.yellowBright('Warning'));
    console.warn(info);
  }
});