import { useState } from "react";
export default function Exercicio5()
{

  const[lado, setLado] =useState(0);
  const[resultado, setResultado] =useState();
 
 function calcular ()
  {

    let area= Number (lado*lado);
   

    setResultado(" é " + area );
  }

    return (
        <div>
            <h1>Exercicio 5 </h1>
    
      <div className="conteudo">
        
        <h3>Calculo da Area do Quadrado</h3>

        
        <form>
          <p>
            Digite o valor do lado <br />
            <input type="text" value={lado}
            onChange={(e) => setLado(e.target.value)} />
          </p>
        <p>
            <input type="button" value="Exercicio5" 
            onClick={calcular}/>
          </p>
          <p>
            <b>
              o resultado
            </b><br></br>
           o resultado do quadrado {resultado}
          
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}