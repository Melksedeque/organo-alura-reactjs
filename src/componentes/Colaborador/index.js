import "./Colaborador.css";

const Colaborador = ({ nome, cargo, foto, cor }) => {
  const estiloColaborador = {
    backgroundColor: cor,
  };
  return (
    <div className="colaborador">
      <figure className="imagem-colaborador" style={estiloColaborador}>
        <img src={foto} alt={nome} />
        <figcaption hidden>Melksedeque Silva</figcaption>
      </figure>
      <h4>{nome}</h4>
      <h5>{cargo}</h5>
    </div>
  );
};

export default Colaborador;
