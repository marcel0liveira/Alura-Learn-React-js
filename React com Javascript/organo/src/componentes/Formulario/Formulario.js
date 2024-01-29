import { useState } from "react";
import  Botao  from "../Botao";
import  CampoTexto  from "../CampoTexto";
import  ListaSuspensa  from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = (props) => {
  
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")

  const aoSalvar = (evento) => {
    evento.preventDefault()
    // console.log(`O Form foi submetido com os valores => ${nome}, ${cargo}, ${imagem}, ${time}`);
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    })
    setNome("")
    setCargo("")
    setImagem("")
    setTime("")
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
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
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
