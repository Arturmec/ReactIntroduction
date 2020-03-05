import React from 'react';
import PropTypes from 'prop-types';

/** Acessa o parâmetro tech e onDelete */
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}
/** 
* Se o tech não for informado, o defaultProps preenche as propriedades, 
* nesse caso oculto, mostra 'Oculto' 
*/
TechItem.defaultProps = {
  tech: 'Oculto',
};

/** Define as propriedades */
TechItem.propTypes = {
  /** Propriedade tech é do tipo string */
  tech: PropTypes.string,
  /** Função onDelete é função, e obrigatória */
  onDelete: PropTypes.func.isRequired
};
export default TechItem;