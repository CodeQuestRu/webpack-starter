module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g)$/i,
          type: 'asset/resource'
        }
      ]
    }
  }
} 