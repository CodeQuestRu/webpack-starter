import React from 'react';

// Стили
import '../../style.css';
import cl from './App.module.css';

// SVG
import AddIcon from '@icons/add.svg?sprite';

// Спрайты
import ArrowIcon from '@icons/arrow.svg?sprite';
import CbIcon from '@icons/cb.svg?sprite';


// console.log(AddIcon);


export default function App() {

  return (
    <div className="app">
      <h1 className={cl.h}>Webpack Starter</h1>

      <AddIcon width="50" />

      <ArrowIcon width="50" />
      <CbIcon width="50" />
    </div>
  );
}
