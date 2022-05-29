/**
 * Конфигурация для PostCSS
 */


module.exports = {
  plugins: {
    // Основной прессет
    "postcss-preset-env": {
      stage: 0,
      features: {
        'nesting-rules': false
      },
    },

    // Поддержка Tailwind CSS
    tailwindcss: {},
    'tailwindcss/nesting': {},

    // Другие плагины для CSS
    autoprefixer: {},
    cssnano: {}
  }
};