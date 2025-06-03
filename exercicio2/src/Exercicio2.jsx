export default function Exercicio2 ({numero}){
    let resultado = (numero-32)*5/9;
    return(
        <div>
        <p> A temperatura em celsius é{resultado}</p>
        </div>
    );
}