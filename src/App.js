import React from 'react';
import './App.css';

import ironman from './assets/ironman.jpg'
/** Maneira mais fácil de criar um componente é através de uma function */
function App() {
  /** 
  * O react permite que exista código html dentro do javascript 
  * width é o tamanho que a imagem que aparecerá na tela
  */
  return <img src={ironman} width="200"/>
}

export default App;