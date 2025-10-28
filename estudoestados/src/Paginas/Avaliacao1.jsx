import { useState } from "react";
export default function Avaliacao1()
{

  const[base, setBase] =useState();
  const[resultado, setResultado] =useState();
  const[altura, setAltura] =useState();
  


  function calcular ()
  {

    let area, quantidade, valorGasto;

    area= base * altura;
    quantidade = area / 2;
    valorGasto = quantidade * 10.00;
   

    setResultado(
        <div>
            Quantidade = {quantidade} <br />
            Area = {area} <br />
            valorGasto = {valorGasto} <br />
           </div>
    );
  }

    return (
        <div>
            <h1>Avaliação </h1>
    
      <div className="conteudo">
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
            <input type="button" value="Avaliação" 
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