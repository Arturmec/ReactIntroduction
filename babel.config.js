module.exports = {
  /** Propriedades presets: quais presets serão utilizadas */
  presets: [
    /** 
    * É responsável por alterar as funcionalidades do Javascript 
    * que o navegador ainda não entende 
    */
    "@babel/preset-env",
    /** Alterar as funcionalidades do React que o navegador não entende */
    "@babel/preset-react"
  ],
}