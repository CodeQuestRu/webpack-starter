Button примеры:
# Кнопки

На данный момент реализовано 3 основных вида кнопок, разделенных по цветам:

* `primary` - синяя
* `success` - зеленая
* `danger` - красная

Все они создаются вызовом одной функции с передачей ей основного и активного цвета:


```js
// Кнопка с типом "primary"
export const PrimaryButton = getStyled({
  normal: colors.clear_blue,
  active: colors.dark_clear_blue
});
```


Аналогичным образом можно легко создать кнопки любых предопределенных цветов.



## Инверсия

Кроме этого, все кнопки поддерживают пропс `invert`, который позволяет изменить внешний вид кнопки: 
изначально она будет с одной обводкой, а при наведение - с заливкой:


```jsx
<Button type="primary">Primary</Button>
<Button type="primary" disabled>Primary Disabled</Button>
<Button type="primary" invert>Primary Invert</Button>
```


Кроме этого у нас есть тип `default`, который будет применяться и без указания типа. 
Такая кнопка также имеет вид `primary`, но с предустановленным `invert`.



## Кнопка Link

Особняком ото всех стоит кнопка с типом `link`, которая выглядит как ссылка. 


```jsx
<Button type="link">Link</Button>
```


Все ее стили прописаны отдельно.



## Все кнопки

Все кнопки и их состояния:

```js
<div>
  <Button type="default">Default</Button>

  <Button type="primary">Primary</Button>
  <Button type="primary" disabled>Primary Disabled</Button>
  <Button type="primary" invert>Primary Invert</Button>

  <Button type="success">Success</Button>
  <Button type="success" disabled>Success Disabled</Button>
  <Button type="success" invert>Success Invert</Button>

  <Button type="danger">Danger</Button>
  <Button type="danger" disabled>Danger Disabled</Button>
  <Button type="danger" invert>Danger Invert</Button>

  <Button type="link">Link</Button>
</div>
```
