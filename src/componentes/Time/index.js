import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const estiloTime = { backgroundColor: props.corSecundaria };

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={estiloTime}>
        <header>
          <h3>{props.nome}</h3>
          <span style={{ backgroundColor: props.corPrimaria }}></span>
        </header>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              cor={props.corPrimaria}
              link={colaborador.link}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
