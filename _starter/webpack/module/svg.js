const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Настройки
const options = require('../config/app');

module.exports = () => {
  return {
    module: {
      rules: [

        // Позволяет вставлять SVG как React компоненты

        {
          test: /\.svg$/i,
          // issuer: /\.[jt]sx?$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: options.svg_sprite
            },
            // {
            //   loader: '@svgr/webpack',
            //   options: options.svgr
            // },
            // 'svg-transform-loader',
            // 'svgo-loader'
          ],
        },

        // Объединяет SVG с параметром ?sprite в спрайт для оптимизации

        // {
        //   test: /\.svg$/i,
        //   include: /\?sprite$/i,
        //   use: [
        //     {
        //       loader: 'svg-sprite-loader',
        //       options: options.svg_sprite
        //     }
        //   ],
        // },
      ]
    },
    plugins: [
      new SpriteLoaderPlugin({ plainSprite: true })
    ]
  }
}
