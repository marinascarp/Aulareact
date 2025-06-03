export default function exercicio1 ({numero})
{
    let quadrado= (numero) *  (numero);
    let cubo =  (numero)* (numero)*  (numero);

    return(
       <div>
        <p>O quadrado do número {numero} é {quadrado}</p>
       <br/>
       <p>O cubo do número {numero} é {cubo}</p>
       </div>
    );
}