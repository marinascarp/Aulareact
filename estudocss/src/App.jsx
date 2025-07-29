import "./App.css";
export default function App()
{
    const centralizado={textAlign : "center"};
    const destaque={
        textAlign:"center",
        border: "2px solid blue",
        color: "blue",
        padding: "10px"

    }
    return (
        <div>
            <h1>Estudo CSS</h1>
            <p>
              O CSS (<i>Cacasding Style Sheets</i>)  é uma linguagem
             utilizada para estilizar <b>página web</b>, e será
             utilizada dentro ou fora do HTML.
            </p>

            <p>
             Na aula de hoje, vamos estudar e entender como aplicar
             estilos CSS em componentes do React
            </p>

        <ul>
            <li>Definir cor para texto, para o fundo do elemento </li>
            <li>Fontes e tamanhos de letras</li>
            <li>Posicionament dos elementos na página </li>
            <li>Espaçamento, bordas, sombras, etc...</li>
            <li>Efeitos visuais e animações.</li>
        </ul>
        <p>O HTML diz o que deve aparecer na página, enquanto o 
            CSS diz como deve aparecer</p>

       <p className="centro">BTS</p>

       <p style= {centralizado}>

        <img src="bts.jfif" alt="" />

       </p>

       <h3 style= {destaque}>Fim de Aula</h3>
        </div>
    );
}