/////////////////////////////////
// Сборка в режиме разработки

// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');

// Константы
const { HOST, PORT } = require('./constants');

// Config
const devConfig = require('./webpack.dev');

// Создаем экземпляр Webpack
const compiler = webpack(devConfig);

// Сервер
const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false
      })
    );
  }
});

// Запускаем сервер
server.listen(PORT, HOST, () => {
  console.log(`
    ${chalk.greenBright('Server listening on')} 
    ${chalk.blueBright(`http://${HOST}:${PORT}`)}
  `);
});