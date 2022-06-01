// const appRoot = require('app-root-path');
const resolveConfig = require('tailwindcss/resolveConfig');

// Возвращаем объект настроек
// const tailwindConfig = appRoot.resolve('./tailwind.config');
const tailwindConfig = require('./preset');
const { theme } = resolveConfig(tailwindConfig);

module.exports = theme;