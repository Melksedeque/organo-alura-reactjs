import { useState } from "react";
import "./ExibirEsconderFormularios.css";

const ExibirEsconderFormularios = ({ exibir, aoAlternar }) => {
  const [visualizacao, setVisualizacao] = useState("off");

  function toggleFormularios(e) {
    console.log(e);
    setVisualizacao(visualizacao === "off" ? "on" : "off");
  }

  return (
    <>
      <button className="exibir-esconder-formulario" onClick={aoAlternar}>
        <img
          src="/imagens/botao.png"
          alt="Botão para exibir ou ocultar os Formulários"
        />
      </button>
    </>
  );
};

export default ExibirEsconderFormularios;
