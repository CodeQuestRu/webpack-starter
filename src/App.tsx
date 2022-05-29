import React from 'react';

// Глобальные стили
import '@assets/css/main.css';

// Компоненты
import { MyButton, MyIcon } from './components';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Приложение</h1>
      <MyButton type="primary">Кнопка</MyButton>
      <MyIcon />
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
    </div>
  );
}

export default App;
