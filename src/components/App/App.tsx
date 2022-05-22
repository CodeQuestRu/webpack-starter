import React, { cloneElement } from 'react';

// Стили
import '../../style.css';
import cl from './App.module.css';

// SVG
import AddIcon from '../../assets/icons/add.svg';
// import ArrowIcon from '../../assets/icons/arrow.svg';
// import CbIcon from '../../assets/icons/cb.svg';

console.log(AddIcon);


export default function App() {

  const SvgIcon = function () {
    return <svg viewBox={AddIcon.viewBox} width="50">
      <use xlinkHref={'#' + AddIcon.id} />
    </svg>
  };

  // const svgComponent = cloneElement(AddIcon, {});

  return (
    <div className="app">
      <h1 className={cl.h}>Webpack Starter</h1>

      <SvgIcon />

      {/* <AddIcon />
      <ArrowIcon />
      <CbIcon /> */}
    </div>
  )
}
