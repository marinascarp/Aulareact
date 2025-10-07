import { useState } from "react";
export default function Exercicio2()
{

  const[temperatura, setNumero] =useState(0);
  const[resultado, setResultado] =useState();

  function calcular ()
  {

    let temperaturacelsius = ((temperatura-32)*5)/9;
   

    setResultado("A temperatura em celsius é " + temperaturacelsius );
  }

    return (
        <div>
            <h1>Exercicio 2 </h1>
    
      <div className="conteudo">
        
        <h3>Calculo da temperatura em Celsius</h3>

        
        <form>
          <p>
            Digite a temperatura <br />
            <input type="text" value={temperatura}
            onChange={(e) => setNumero(e.target.value)} />
          </p>
          <p>
            <input type="button" value="Exercicio2" 
            onClick={calcular}/>
          </p>
          <p>
            <b>
              o resultado
            </b><br></br>
            o numero digitado foi {temperatura} <br></br>
            o resultado é {temperaturacelsius}
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}