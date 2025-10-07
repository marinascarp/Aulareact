import { useState } from "react";
export default function Exercicio3()
{

  const[valor, setValor] =useState(0);
  const[resultado, setResultado] =useState();
  const[taxa, setTaxa] =useState();
  const[tempo, setTempo] =useState();


  function calcular ()
  {

    let parcela= (Number(valor)) + (Number(valor)) * ((Number(taxa)) * (Number(taxa))) / 100* (Number(tempo));
   

    setResultado("A temperatura em celsius é " + parcela );
  }

    return (
        <div>
            <h1>Exercicio 3 </h1>
    
      <div className="conteudo">
        
        <h3>Calculo da temperatura em Celsius</h3>

        
        <form>
          <p>
            Digite o valor da prestação <br />
            <input type="text" value={valor}
            onChange={(e) => setValor(e.target.value)} />
          </p>
        
          <p>
            Digite a taxa de juros <br />
            <input type="text" value={taxa}
            onChange={(e) => setTaxa(e.target.value)} />
          </p>
         
          <p>
            Digite o tempo de atraso  <br />
            <input type="text" value={tempo}
            onChange={(e) => setTempo(e.target.value)} />
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