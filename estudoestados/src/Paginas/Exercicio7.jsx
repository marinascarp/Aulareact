import { useState } from "react";
export default function Exercicio7() 
{

  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [resultado, setResultado] = useState();
  
  function media(){
  let media= (nota1 + nota2 + nota3)/3;
 
  setResultado ("A media do Aluno " + media);
  }
  
  return (
    <div>
      <h1>Exercicio 7</h1>

      <div className="conteudo">
        <h2>Calculo da Média Aritmética</h2>
    
      <p>O objeto será receber o nome do aluno, suas 3 notas e calcular a média</p>

      <form>
      <p>
        Nota 1<br/>
        <input type="text" value={nota1}
          onChange ={(e) => setNota1 (e.target.value)}/>
      </p>

      <p>
        Nota 2<br/>
        <input type="text" value={nota2}
         onChange ={(e) => setNota2 (e.target.value)}/>
      </p>
      <p>
        Nota 3<br/>
        <input type="text" value={nota3}
         onChange ={(e) => setNota3 (e.target.value)}/>
      </p>
      <p>
        <input type="button" value= "calcular" onClick={resultado}/>
      </p>
      
      <a href="/">Voltar</a>
     

      </form>
      </div>


    </div>
  );
}
