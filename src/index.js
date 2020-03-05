import React from 'react';
/** React-DOM faz integração do react com o browser */
import { render } from 'react-dom';
import App from './App';
/** 
* Passa, como primeiro parametro, App como tag do html
* Passa onde o conteúdo será jogado
*/
render(<App />, document.getElementById('app'));
