module.exports = {

  // Настройка темы
  presets: [
    require('./_starter/tailwind/preset')
  ],

  // Расположение файлов
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  // Другие настройки
  prefix: '',
  separator: ':',
  important: '#app', // действует только для utilities

  // darkMode: false,
  // purge: false, // https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css  

  // Отключение не нужных плагинов
  corePlugins: {
    float: false,
  },

  // Плагины Tailwind
  plugins: [],
};
