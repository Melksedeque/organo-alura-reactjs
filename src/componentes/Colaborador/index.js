import "./Colaborador.css";

const Colaborador = ({ nome, cargo, link, cor }) => {
  const estiloColaborador = {
    backgroundColor: cor,
  };
  let fotoColaborador;

  if (link.endsWith("/")) {
    fotoColaborador = `${link.slice(0, -1)}.png`;
  } else {
    fotoColaborador = `${link}.png`;
  }

  return (
    <div className="colaborador">
      <figure className="imagem-colaborador" style={estiloColaborador}>
        <a href={link} title={nome} target="_blank" rel="noreferrer">
          <img src={fotoColaborador} alt={nome} />
          <figcaption hidden>Melksedeque Silva</figcaption>
        </a>
      </figure>
      <h4>
        <a href={link} title={nome} target="_blank" rel="noreferrer">
          {nome}
        </a>
      </h4>
      <h5>{cargo}</h5>
    </div>
  );
};

export default Colaborador;
