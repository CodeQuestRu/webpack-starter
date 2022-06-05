const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Настройки
const options = require('../config/app');


module.exports = {
  module: {
    rules: [

      // Объединяет SVG с параметром ?sprite в спрайт для оптимизации

      {
        test: /\.svg$/i,
        // include: /.*\.svg\?sprite$/i,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: options.svg_sprite
          }
        ],
      },


      // Позволяет вставлять SVG как React компоненты

      // {
      //   test: /\.svg$/i,
      //   // exclude: /.*\.svg\?sprite$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: [
      //     {
      //       loader: '@svgr/webpack',
      //       options: options.svgr
      //     }
      //   ],
      // },
    ]
  },
  plugins: [
    new SpriteLoaderPlugin({ plainSprite: true })
  ]
}

