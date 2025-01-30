import "./ExibirEsconderFormularios.css";

const ExibirEsconderFormularios = ({ exibir, aoAlternar }) => {
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
