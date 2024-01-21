import { useState } from "react";
import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const times = [
  "Programação",
  "Front-End",
  "Data Science",
  "Devops",
  "UX e Design",
  "Mobile",
  "Inovação e Gestão",
];

export const Formulario = () => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log(`O Form foi submetido com os valores => ${nome}, ${cargo}, ${imagem}, ${time}`)
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu Cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={false}
          label="Imagem"
          placeholder="Digite o local da sua imagem"
          value={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao 
          texto="Criar Card" 
        />
      </form>
    </section>
  );
};
