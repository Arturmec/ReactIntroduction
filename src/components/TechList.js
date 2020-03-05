import React, { Component } from 'react';


class TechList extends Component {
  /** 
  * Estado do componente: guarda todas as informações que podem ser 
  * manipuladas pelo componente 
  */
  state = {
    /** Irá armazenar o valor da nova tecnologia que o usuário digitará no input */
    newTech: "",
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  /** 
  * Precisa ser arrow function para poder acessar outras propriedas da classe 
  * Método armazena o valor do input em 'newTech' 
  */
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    /** Impede que o html atualize a cada clique */
    e.preventDefault();
    /** 
    * Copia os valores do array e adiciona o valor do input 
    * É obrigatório copiar pois os estados do react são imutáveis
    */
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      /** Exclui o valor que estava no campo de input */ 
      newTech: ''
    });
  }
  /** Procura dentro do state um tech com o mesmo nome de outro na state e deleta */
  handleDelete = (tech) => {
    /** Utiliza método filter para fitrar o array */
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  /** 
  * Todo componente escrito na forma de classe precisa, obrigatoriamente, 
  * ter um método render, que retorna o html
  */
  render() {
    return (
      /** Percorre array de tecnologias */
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
            </li>
          ))}     
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type= "submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;