import Exemplo1 from "./Componentes/Exemplo1"

export default function App()
{
  return (
    <div> 
      <h1>Exercícios de Componentes</h1>

      <h1>Chamada para o Exemplo1</h1>
      <Exemplo numero1={8} numero2={2} />
      <Exemplo numero1={2} numero2={10}/>
      <Exemplo numero1={7} numero={20}/>

    </div>
  )
}