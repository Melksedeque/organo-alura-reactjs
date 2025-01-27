import { AiFillCloseCircle } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({ colaborador, cor, aoDeletar }) => {
  const estiloColaborador = {
    backgroundColor: cor,
  };
  let fotoColaborador;

  if (colaborador.link.endsWith("/")) {
    fotoColaborador = `${colaborador.link.slice(0, -1)}.png`;
  } else {
    fotoColaborador = `${colaborador.link}.png`;
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        color="tomato"
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <figure className="imagem-colaborador" style={estiloColaborador}>
        <a
          href={colaborador.link}
          title={colaborador.nome}
          target="_blank"
          rel="noreferrer"
        >
          <img src={fotoColaborador} alt={colaborador.nome} />
          <figcaption hidden>Melksedeque Silva</figcaption>
        </a>
      </figure>
      <h4>
        <a
          href={colaborador.link}
          title={colaborador.nome}
          target="_blank"
          rel="noreferrer"
        >
          {colaborador.nome}
        </a>
      </h4>
      <h5>{colaborador.cargo}</h5>
    </div>
  );
};

export default Colaborador;
