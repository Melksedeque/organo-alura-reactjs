import "./Colaborador.css";

const Colaborador = (props) => {
  const estiloColaborador = {
    backgroundColor: props.cor,
  };
  return (
    <div className="colaborador">
      <figure className="imagem-colaborador" style={estiloColaborador}>
        <img
          src="https://www.github.com/Melksedeque.png"
          alt="Foto de Perfil de Melksedeque Silva"
        />
        <figcaption hidden>Melksedeque Silva</figcaption>
      </figure>
      <h4>Melksedeque Silva</h4>
      <h5>Desenvolvedor Full Stack</h5>
    </div>
  );
};

export default Colaborador;
