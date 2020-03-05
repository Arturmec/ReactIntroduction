import React, { Component } from 'react';

import TechItem from './TechItem'
/** O componente foi criado na forma de class para conter um estado */
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
  * Executado assim que o componente entra em tela
  * Pode fazer qualque tipo de alteração ou execução
  */
  componentDidMount(){ 
    const techs = localStorage.getItem('techs');
    /** Se existir algo em techs...*/
    if (techs){
      /** ... preenche techs com o json */
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  /** 
  * Executado sempre que houver modificação nas props ou estado 
  * Recebe as antigas propriedades e o antigo estado como parâmetro 
  */
  componentDidUpdate(_, prevState){
    if(prevState.techs !== this.state.techs){
      /** Salva no banco de dados do browser na forma de json */
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  /** Executado quando o componente deixa de existir */
  componentWillUnmount(){

  }
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
          {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} 
            />
          )}     
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