import React from 'react';

// Глобальные стили
import '@assets/css/main.css';

// Компоненты
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Приложение</h1>

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
  );
}

export default App;
