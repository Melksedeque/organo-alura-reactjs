import "./ExibirEsconderFormularios.css";

interface ExibirEsconderFormulariosProps {
  exibir: boolean;
  aoAlternar: () => void;
}

const ExibirEsconderFormularios = ({
  aoAlternar,
}: ExibirEsconderFormulariosProps) => {
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
