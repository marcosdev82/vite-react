export default function App() {
  return (
    <div>
      <h1>Alunos</h1>
      <Aluno nome="Marcos Tavares" idade={25} />
      <Aluno nome="Fabio Sousa" idade={30} />
      <Aluno nome="Rodolfo Castro" idade={28} />
    </div>
  )
}

interface AlunoProps {
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }: AlunoProps) {
  return (
  <div>
    <h1>Aluno: {nome}</h1>
    <h3>Idade: {idade}</h3>
  </div>
  )
}