module.exports = (api) => {
  api.cache.never();

  return {
    presets: [
      require('./_starter/babel/presets/react-app')
    ],

    plugins: [
      require('./_starter/babel/plugins/import-antd'),
      require('./_starter/babel/plugins/import-lodash'),
      require('./_starter/babel/plugins/module-resolver'),
      require('./_starter/babel/plugins/const-enum'),
    ]
  }
}