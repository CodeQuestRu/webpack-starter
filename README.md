## Tailwind

Подключаем Tailwind через PostCss. 
Для этого устанавливаем нужные пакеты:


```js
yarn add -D tailwind postcss
```


Добавляем файл конфигурации Tailwind с нужными настройками:


```js
// tailwind.config.js
module.exports = {

};
```


Добавляем плагин в PostCss:


```js
// postcss.config.js
module.exports = {
  plugins: {
    // Поддержка Tailwind CSS
    tailwindcss: {},
    'tailwindcss/nesting': {},
  }
};
```