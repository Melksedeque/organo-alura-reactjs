import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log("Form enviado com sucesso!");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          obrigatorio={true}
        />
        <CampoTexto
          label="Cargo"
          type="text"
          placeholder="Digite seu cargo"
          obrigatorio={true}
        />
        <CampoTexto
          label="Imagem"
          type="text"
          placeholder="Informe o endereço da imagem"
        />
        <ListaSuspensa label="Time" itens={times} obrigatorio={true} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
