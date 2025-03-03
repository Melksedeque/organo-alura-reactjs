import "./Formulario.css";
import { useState } from "react";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import Campo from "../Campo";
import BotaoSubmit from "../BotaoSubmit";
import ListaSuspensa from "../ListaSuspensa";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  times: string[];
  criarTime: (time: { id: number; nome: string; cor: string }) => void;
  exibir: boolean;
}

const Formulario = ({
  aoColaboradorCadastrado,
  times,
  criarTime,
  exibir,
}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [link, setLink] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Time selecionado:", time);

    let imagem = link;
    if (imagem.endsWith("/")) {
      imagem = `${imagem.slice(0, -1)}.png`;
    } else {
      imagem = `${imagem}.png`;
    }

    const novoColaborador: IColaborador = {
      id: Math.floor(Math.random() * 100),
      nome,
      cargo,
      imagem,
      link,
      favorito: false,
      time,
    };

    aoColaboradorCadastrado(novoColaborador);
    setNome("");
    setCargo("");
    setLink("");
    setTime("");
  };

  return (
    exibir && (
      <section className={`formulario formulario-${exibir}`}>
        <form
          id="form-colaborador"
          name="form-colaborador"
          onSubmit={aoSalvar}
          acceptCharset="utf-8"
        >
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          <Campo
            label="Nome"
            type="text"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
            placeholder="Digite seu nome"
            obrigatorio
          />
          <Campo
            label="Cargo"
            type="text"
            valor={cargo}
            aoAlterado={(valor) => setCargo(valor)}
            placeholder="Digite seu cargo"
            obrigatorio
          />
          <Campo
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
            aoAlterado={(valor: string) => setTime(valor)}
            obrigatorio
          />
          <BotaoSubmit>Criar card</BotaoSubmit>
        </form>
        <form
          id="form-time"
          name="form-time"
          onSubmit={(e) => {
            e.preventDefault();
            criarTime({
              id: Math.floor(Math.random() * 100),
              nome: nomeTime,
              cor: corTime,
            });
          }}
          acceptCharset="utf-8"
        >
          <h2>Preencha os dados para criar um novo time.</h2>
          <Campo
            label="Time"
            type="text"
            valor={nomeTime}
            aoAlterado={(valor) => setNomeTime(valor)}
            placeholder="Digite o nome do time"
            obrigatorio
          />
          <Campo
            label="Cor do time"
            type="color"
            valor={corTime}
            aoAlterado={(valor) => setCorTime(valor)}
            placeholder="Insira a cor do time em Hex"
            obrigatorio
          />
          <BotaoSubmit>Criar um novo time</BotaoSubmit>
        </form>
      </section>
    )
  );
};

export default Formulario;
