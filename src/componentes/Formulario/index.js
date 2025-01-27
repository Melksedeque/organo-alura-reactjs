import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = ({ aoColaboradorCadastrado, times, criarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [link, setLink] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    aoColaboradorCadastrado({
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
          obrigatorio
        />
        <CampoTexto
          label="Cargo"
          type="text"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          placeholder="Digite seu cargo"
          obrigatorio
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
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          obrigatorio
        />
        <Botao texto="Criar card" />
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          criarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          label="Nome"
          type="text"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
          placeholder="Digite o nome do time"
          obrigatorio
        />
        <CampoTexto
          label="Cor do time"
          type="text"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
          placeholder="Insira a cor do time em Hex"
          obrigatorio
        />
        <Botao texto="Criar um novo time" />
      </form>
    </section>
  );
};

export default Formulario;
