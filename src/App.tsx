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
      {/* <MyButton type="primary">Кнопка</MyButton>
      <MyIcon /> */}
      <Button type="default">Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
  );
}

export default App;
