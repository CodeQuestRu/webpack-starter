import React from 'react';

// Стили
import '../../style.css';
import cl from './App.module.css';

// SVG
import AddIcon from '../../assets/icons/add.svg?sprite';

// Спрайты
import ArrowIcon from '../../assets/icons/arrow.svg?sprite';
import CbIcon from '../../assets/icons/cb.svg?sprite';


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
