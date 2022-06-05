const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../../../tailwind.config');

// Возвращаем объект настроек
const { theme } = resolveConfig(tailwindConfig);
module.exports = theme;