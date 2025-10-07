import { useState } from "react";
export default function Exercicio1()
{

  const[numero, setNumero] =useState(0);
  const[resultado, setResultado] =useState();

  function calcular ()
  {
    let quadrado = Number(numero) *  Number(numero);
    let cubo = quadrado * Number(numero);

    setResultado("O quadrado é" + quadrado + " o cubo é " + cubo);
  }

    return (
        <div>
            <h1>Exercicio 1 </h1>
    
      <div className="conteudo">
        
        <h3>Calculo do quadrado/Cubo</h3>

        
        <form>
          <p>
            Digite um numero <br />
            <input type="text" value={numero}
            onChange={(e) => setNumero (e.target.value)} />
          </p>
          <p>
            <input type="button" value="Exercicio 1" 
            onClick={calcular}/>
          </p>
          <p>
            <b>
              o resultado
            </b><br></br>
            o numero digitado foi {numero} <br></br>
            o resultado é {resultado}
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}