import { Header } from "./components/Header";
import { Aluno } from "./components/alunos/Alunos"
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header title="Alunos do React + TypeScript"/>
      <h1>Alunos</h1>
      <Aluno nome="Marcos Tavares" idade={25} />
      <Aluno nome="Fabio Sousa" idade={30} />
      <Aluno nome="Rodolfo Castro" idade={28} />
      <Footer />
    </div>
  )
}