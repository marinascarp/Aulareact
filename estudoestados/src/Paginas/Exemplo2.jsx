import { useState } from "react";

export default function Exemplo2() 
{

  const [numero1, setNumero1] = useState(22);
  const [numero2, setNumero2] = useState(5);
  const [resultado, setResultado] = useState();
  
  function media(){
  let n1,n2, media;
  n1 = Number(numero1);
  n2 = Number(numero2);
  media = (n1 + n2/2);
  
  setResultado ("A media do Aluno " + media);
  }
  function limpar(){
  
  }
  return (
    <div>
      <h1>Exemplo 2</h1>

      <div className="conteudo">
        <h2>Calculo da Média Aritmética</h2>
    
      <p>O objeto será receber o nome do aluno, suas 2 notas e calcular a média</p>

      <form>
        <p>
            Nome do Aluno<br/>
          <input type="text"/>
        </p>

      <p>
        Nota 1<br/>
        <input type="text" value={numero1}
          onChange ={(e) => setNumero1 (e.target.value)}/>
      </p>

      <p>
        Nota 2<br/>
        <input type="text" value={numero2}
         onChange ={(e) => setNumero2 (e.target.value)}/>
      </p>
      <p>
        <input type="button" value= "calcular" onClick={media}/>
      </p>
      <p>
        Numero 1 = {numero1} <br />
        Numero 2 = {numero2} <br />
        {resultado}

      </p>
      <a href="/">Voltar</a>
     <p>
      <input type="button" value="calcular"/>
     </p>

      </form>
      </div>


    </div>
  );
}
