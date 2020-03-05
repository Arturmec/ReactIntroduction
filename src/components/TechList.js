import React, { Component } from 'react';


class TechList extends Component {
  /** 
  * Estado do componente: guarda todas as informações que podem ser 
  * manipuladas pelo componente 
  */
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };
  /** 
  * Todo componente escrito na forma de classe precisa, obrigatoriamente, 
  * ter um método render, que retorna o html
  */
  render() {
    console.log (this.state);
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;