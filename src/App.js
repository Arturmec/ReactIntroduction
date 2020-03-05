import React from 'react';
import './App.css';

import TechList from './components/TechList';
/** Maneira mais fácil de criar um componente é através de uma function */
function App() {
  /** 
  * Salva TechList como uma tag do html
  */
  return <TechList />
}

export default App;