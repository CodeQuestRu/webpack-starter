/////////////////////////////////////////////////
// Базовый прессет

module.exports = [
  '@babel/env',
  {
    debug: true,
    spec: true, // более медленный, но надежный код
    loose: false, // более быстрый, но не надежный код
    module: false
  }
];