const path = require('path');
module.exports = {
  /** Arquivo de entrada */
  entry: path.resolve(__dirname, 'src', 'index.js'),
  /** É onde o sistema vai jogar o bundle */
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    /** Onde o index.html será encontrado */
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    /** Serve para informar o webpack qual tipo de arquivo ele deve utilizar */
    rules: [
      {
        /** O nome do arquivo deve terminar ($) em 'js' */
        test: /\.js$/,
        /** 
        * Muitos arquivos já vem transpilados do node_modules, então não faria 
        * sentido transpilar novamente, logo se exclui 
        */
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }, {
        test:/\.css$/,
        use: [
          /** 
          * Pega o código CSS com o estilo de letras, por exemplo, e joga
          * para o html dentro de uma tag style 
          */
          { loader: 'style-loader' },
          /** Usado para o webpack entender importações */
          { loader: 'css-loader' },
        ]
      }, {
        /** Permite a importação de imagens */
        test: /.*\.(gif|png|jpg)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};