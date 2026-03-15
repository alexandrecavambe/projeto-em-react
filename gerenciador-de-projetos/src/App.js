//Area para Importar Coisas:

import './App.css';

function App() {
  //Area Para Declarar Variaveis:
  let name = 'Alexandre'
  const novoNome = name.toUpperCase();

  const imagem = "https://share.google/VMTHWhjm7SvXzZuyc"


  function som(n1, n2){
    return n1 + n2;
  }


  return (
      /* Div do conteudo principal*/
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Ola, eu sou {novoNome}</p>
      <p>Soma: {som(2, 4)}</p>
      <img src = {imagem} alt = 'Minha imagem'/>
      
    </div>
  );
}

export default App;
