import { useState } from "react";
export default function Exercicio4()
{

  const[base, setBase] =useState(0);
  const[resultado, setResultado] =useState();
  const[altura, setAltura] =useState();
 
  
  function calcular ()
  {

    let area= Number (base * altura)/2;
   

    setResultado("A area do triangulo " + area );
  }

    return (
        <div>
            <h1>Exercicio 4 </h1>
    
      <div className="conteudo">
        
        <h3>Calculo da Area do Triangulo</h3>

        
        <form>
          <p>
            Digite a base <br />
            <input type="text" value={base}
            onChange={(e) => setBase(e.target.value)} />
          </p>
        
          <p>
            Digite a altura <br />
            <input type="text" value={altura}
            onChange={(e) => setAltura(e.target.value)} />
          </p>
         
         
          <p>
            <input type="button" value="Exercicio3" 
            onClick={calcular}/>
          </p>
          <p>
            <b>
              o resultado
            </b><br></br>
           o resultado é {resultado}
          
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}