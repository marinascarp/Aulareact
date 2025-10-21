import { useState } from "react";
export default function Simulado1()
{

  const[km, setKm] =useState();
  const[dias, setDias] =useState();
  const[resultado, setResultado] =useState();
  


  function calcular ()
  {

   let total= (dias * 90)+(km * 0.20);

    setResultado("O preço total a pagar é", total );
  }

    return (
        <div>
            <h1>Simulado 01 </h1>
    
      <div className="conteudo">
        <form>
          <p>
            Digite os Km percorridos  <br />
            <input type="text" value={km}
            onChange={(e) => setKm(e.target.value)} />
          </p>
        
          <p>
            Digite a quantidade de dias <br />
            <input type="text" value={dias}
            onChange={(e) => setDias(e.target.value)} />
          </p>
         
          <p>
            <input type="button" value="Simulado1" 
            onClick={calcular}/>
          </p>
          <p>
            <b>
              o resultado
            </b><br></br>
              {resultado}
          
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}