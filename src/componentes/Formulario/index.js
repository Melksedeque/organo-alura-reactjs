import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [link, setLink] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      link,
      time,
    });
    setNome("");
    setCargo("");
    setLink("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label="Nome"
          type="text"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          placeholder="Digite seu nome"
          obrigatorio={true}
        />
        <CampoTexto
          label="Cargo"
          type="text"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          placeholder="Digite seu cargo"
          obrigatorio={true}
        />
        <CampoTexto
          label="Github"
          type="text"
          valor={link}
          aoAlterado={(valor) => setLink(valor)}
          placeholder="Informe o seu link do Github"
        />
        <ListaSuspensa
          label="Time"
          itens={props.nomesTimes}
          obrigatorio={true}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
